import React from 'react'

function Logo({ classes = 'text-2xl mt-1' }) {
    return (
        <h2 className={`${classes}`}>AtomicBlogs</h2>
    )
}

export default Logo