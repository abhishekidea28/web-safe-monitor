import React, { useState } from 'react'
import Layout from '@/layout/Layout'
import UserTable from '@/components/UserTable'
import NavBar from '@/modules/Navbar'
import { users } from '@/demoData/users'

export default function Index() {
    
    return (
        <Layout>
            <NavBar title="User Management" />
            <div className='p-8'>
                <UserTable data={users} />
            </div>

        </Layout>
    )
}
