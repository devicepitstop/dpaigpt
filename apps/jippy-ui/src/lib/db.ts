import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function connectDb() {
  try {
    await prisma.$connect();
    console.log('🗄️  Prisma connected');
  } catch (e) {
    console.error('❌ Prisma connection error:', e);
  }
}
connectDb();

process.on('beforeExit', async () => {
  await prisma.$disconnect();
  console.log('🗄️  Prisma disconnected');
});

export { prisma };
