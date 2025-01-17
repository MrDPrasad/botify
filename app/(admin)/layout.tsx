import React, { Children } from 'react'

function AdminLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
    <div>{/*Header */}
    <div>{/*Sidebar */}
        <div>{children}</div>
    </div>
    </div>
  )
}

export default AdminLayout

