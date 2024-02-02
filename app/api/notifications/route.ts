export const dynamic = 'force-dynamic'

import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '../../../lib/prisma'

export async function GET (req: NextRequest) {
  const notifications = await prisma.notification.findMany({ })
  return NextResponse.json(notifications)
}