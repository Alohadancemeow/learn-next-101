import React from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout';

const EventPage = () => {

    const router = useRouter()

    console.log(router);
    
    return (
        <Layout>
            <h1>My event</h1>
            <h3>{router.query.slug}</h3>
        </Layout>
    )
}

export default EventPage
