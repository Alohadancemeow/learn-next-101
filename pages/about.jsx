import React from 'react'
import Link from 'next/link'
import Layout from '@/components/Layout'

const about = () => {
    return (
        <Layout title="DJ Events | About">
            <h1>About</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima quidem corporis dignissimos!</p>
            <p>Version: 1.0.0</p>
            <Link href="/">Home</Link>
        </Layout>
    )
}

export default about
