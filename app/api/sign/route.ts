import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // เพิ่ม user ใหม่
  const newUser = await prisma.user.create({
    data: {
      name: 'Parkan',
      email: 'parkan@example.com',
    },
  });
  console.log(newUser);

  // ดึง user ทั้งหมด
  const allUsers = await prisma.user.findMany();
  console.log(allUsers);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
