import React from 'react'
import Link from 'next/link'
const index = () => {
  return (
    <>
    <h3>Home Page</h3>
 <ul>
  <li><Link href="/users">Users</Link></li>
  <li><Link href="/posts">Posts</Link></li>
</ul>
   
    

    </>
  )
}

export default index