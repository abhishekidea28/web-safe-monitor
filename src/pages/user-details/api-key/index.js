import AddApiKey from '@/components/AddApiKey'
import Layout from '@/layout/Layout'
import NavBar from '@/modules/Navbar'
import React from 'react'

const index = () => {
    return (
        <Layout>
            <NavBar title="User Management" />
            <div className='p-8'>
                <AddApiKey />

            </div>

        </Layout>
    )
}

export default index