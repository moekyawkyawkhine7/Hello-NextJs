import React from 'react'
// lib
import Link from 'next/link';

const index = () => {
    return (
        <div>
            Nested Routing
            <br/>
            <Link href="/routing/activities"> Activities</Link>
            <br/>
            <Link href="/routing/blog"> Blog </Link>
        </div>
    )
}

export default index