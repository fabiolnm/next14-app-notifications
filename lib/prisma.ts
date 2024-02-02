import { PrismaClient } from '@prisma/client'

// https://www.prisma.io/docs/guides/database/troubleshooting-orm/help-articles/nextjs-prisma-client-dev-practices
declare global {
  var prisma: undefined | PrismaClient
}

export const prisma = global.prisma ?? new PrismaClient({
  // log: ['query']
})
if (process.env.NODE_ENV !== 'production') global.prisma = prisma

// https://www.prisma.io/docs/reference/api-reference/error-reference#prisma-client-query-engine
export function handlePrismaErrors (err: any) {
  switch (err.code) {
    case 'P2002':
      return Promise.resolve(err.message.split('\n').at(-1))
    default: throw err
  }
}
