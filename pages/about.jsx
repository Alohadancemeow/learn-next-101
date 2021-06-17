import React from 'react'
import Link from 'next/link'

const about = () => {
    return (
        <div>
            <h1>About</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima quidem corporis dignissimos!</p>
            <p>Version: 1.0.0</p>
            <Link href="/">Home</Link>
        </div>
    )
}

export default about
