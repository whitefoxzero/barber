"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";

export default function SignUp_user() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const showSuccess = (message: string) => {
    setSuccess(message);
    setTimeout(() => setSuccess(""), 5000);
  }
  const showError = (message: string) => {
    setError(message);
    setTimeout(() => setError(""), 5000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!name || !email || !password || !confirmPassword || !phone) {
      showError("กรุณากรอกข้อมูลให้ครบถ้วน");
      return;
    }
  
    if (password.length < 6) {
      showError("รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร");
      return;
    }
  
    if (password !== confirmPassword) {
      showError("รหัสผ่านไม่ตรงกัน");
      return;
    }
  
    if (!/^[0-9]{10}$/.test(phone)) {
      showError("เบอร์โทรศัพท์ไม่ถูกต้อง");
      return;
    }
  
    try {
      const res = await axios.post("/api/sign/sign-up-user", {
        name,
        email,
        password,
        confirmPassword,
        phone,
      });
  
      showSuccess(res.data.message || "สมัครสมาชิกสำเร็จ");
    } catch (err: unknown) {
      console.error("SIGN UP ERROR >>>", err);
      if (axios.isAxiosError(err)) {
        showError(err.response?.data?.message || "เกิดข้อผิดพลาดจากเซิร์ฟเวอร์");
      } else {
        showError("เกิดข้อผิดพลาดที่ไม่ทราบสาเหตุ");
      }
    }
  };
  
  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <Card className="rounded-2xl shadow-xl">
          <CardContent className="p-8">
            <h1 className="text-3xl font-bold text-center mb-2">สมัครสมาชิก</h1>
            <p className="text-center text-muted-foreground mb-6">
              ลงทะเบียนเพื่อเริ่มต้นใช้งาน
            </p>
            <AnimatePresence>
              {success && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="mb-4 rounded-xl bg-green-500/90 px-4 py-3 text-sm text-white shadow"
                >
                  {success}
                </motion.div>
              )}
            </AnimatePresence>


            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="mb-4 rounded-xl bg-red-500/90 px-4 py-3 text-sm text-white shadow"
                >
                  {error}
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <Label htmlFor="name">ชื่อ</Label>
                <Input
                  id="name"
                  placeholder="นาย ก"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="space-y-1">
                <Label htmlFor="email">อีเมล</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="space-y-1">
                <Label htmlFor="password">รหัสผ่าน</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="space-y-1">
                <Label htmlFor="confirmPassword">ยืนยันรหัสผ่าน</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="phone">เบอร์โทรศัพท์</Label>
                <Input
                  id="phone"
                  type="phone"
                  placeholder="•••••••••"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>


              <Button className="w-full mt-2 rounded-xl">
                Sign Up
              </Button>
            </form>

            <div className="text-center mt-6 text-sm">
              <span className="text-muted-foreground">มีบัญชีอยู่แล้ว?</span>{" "}
              <a href="/sign/sign-in" className="text-indigo-600 font-medium hover:underline">
                Sign in
              </a>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
