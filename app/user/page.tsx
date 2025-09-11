"use client"

import React from 'react'
import Sidebar from '../(site)/_components/sidenavbar'

import NewComponent from '../user/dashbord/page'

const UserPage = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <NewComponent/>
      </div>
    </div>
  )
}

export default UserPage
