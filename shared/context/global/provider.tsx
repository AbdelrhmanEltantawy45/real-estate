import React from 'react'
import ReactQueryProvider from './providers/react-query.provider'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import NextAuthProvider from './providers/next-auth.provider'

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      <NextAuthProvider>
        <ReactQueryDevtools initialIsOpen={false}  />
        {children}
      </NextAuthProvider>
    </ReactQueryProvider>
  )
}