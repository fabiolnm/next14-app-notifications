import { prisma } from '../lib/prisma'

export async function getNotifications() {
  const notifications = await prisma.notification.findMany()
  return notifications
}