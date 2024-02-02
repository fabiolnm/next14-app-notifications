import { prisma } from '../lib/prisma'

export async function getNotifications() {
  const notifications = await prisma.notification.findMany()
  return notifications
}

export async function getNotification(notificationId: number) {
  const notification = await prisma.notification.findFirst({
    where: { id: notificationId }
  })
  return notification
}