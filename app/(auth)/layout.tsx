import AuthSideSection from '@/features/auth/components/auth-side-section';
import React from 'react'

export default function Layout({ children } : { children: React.ReactNode; }  ) {
  return (
    <div className="grid grid-cols-2 min-h-full">
 {children}
      <AuthSideSection/>
      </div>
  )
}
