import { prisma } from '../lib/db';

export async function savePromise({
  customerName,
  promiseText,
  dueTime,
}: {
  customerName: string;
  promiseText: string;
  dueTime: Date;
}) {
  return prisma.promise.create({
    data: { customerName, promiseText, dueTime },
  });
}
