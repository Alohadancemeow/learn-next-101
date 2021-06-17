import React from 'react'
import { useRouter } from 'next/router'

const EventPage = () => {

    const router = useRouter()

    console.log(router);
    
    return (
        <div>
            <h1>My event</h1>
            <h3>{router.query.slug}</h3>
        </div>
    )
}

export default EventPage
