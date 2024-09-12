import React, { useState } from 'react'
import Layout from '@/layout/Layout'
import UserTable from '@/components/UserTable'

export default function Index() {
 const features = [
        {
            "id":1,
            "feature_name":"parking",
            "added on": "14 Dec 2023 , 01:14 pm"
    
        },
        {
            "id":2,
            "feature_name":"parking",
            "added on": "14 Dec 2023 , 01:14 pm"
    
        }
    ]
    return (
        <Layout>
            <UserTable data={features} />
        </Layout>
    )
}
