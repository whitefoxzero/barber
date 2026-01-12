"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { Store, User, Phone, MapPin, Mail, Lock } from "lucide-react";

export default function SignUpBarberPage() {
  const [form, setForm] = useState({
    shopName: "",
    ownerName: "",
    phone: "",
    address: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl"
      >
        <Card className="rounded-2xl shadow-xl">
          <CardContent className="p-8">
            <h1 className="text-3xl font-bold text-center mb-2">
              Barber Sign Up
            </h1>
            <p className="text-center text-muted-foreground mb-8">
              สมัครร้านตัดผมเพื่อเริ่มใช้งานระบบ
            </p>

            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label htmlFor="shopName" className="flex items-center gap-2">
                    <Store className="h-4 w-4" /> ชื่อร้าน
                  </Label>
                  <Input id="shopName" placeholder="Barber X" onChange={onChange} />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="ownerName" className="flex items-center gap-2">
                    <User className="h-4 w-4" /> ชื่อเจ้าของร้าน
                  </Label>
                  <Input id="ownerName" placeholder="John Doe" onChange={onChange} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" /> เบอร์โทรศัพท์
                  </Label>
                  <Input id="phone" placeholder="099-999-9999" onChange={onChange} />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" /> Email
                  </Label>
                  <Input id="email" type="email" placeholder="barber@email.com" onChange={onChange} />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label htmlFor="password" className="flex items-center gap-2">
                  <Lock className="h-4 w-4" /> Password
                </Label>
                <Input id="password" type="password" placeholder="••••••••" onChange={onChange} />
              </div>
              <div className="space-y-1">
                <Label htmlFor="confirmPassword" className="flex items-center gap-2">
                  <Lock className="h-4 w-4" /> confirmPassword
                </Label>
                <Input id="confirmPassword" type="confirmPassword" placeholder="••••••••" onChange={onChange} />
              </div>
              </div>

              <div className="space-y-1">
                <Label htmlFor="address" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> ที่อยู่ร้าน
                </Label>
                <Input id="address" placeholder="Bangkok, Thailand" onChange={onChange} />
              </div>

             

              <Button className="w-full rounded-xl text-base mt-4">
                สมัครร้านตัดผม
              </Button>
            </form>

            <div className="text-center mt-6 text-sm">
              <span className="text-muted-foreground">มีบัญชีอยู่แล้ว?</span>{" "}
              <a href="/sign/sign-in" className="text-indigo-600 font-medium hover:underline">
                เข้าสู่ระบบ
              </a>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
