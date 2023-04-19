import React from 'react'

const User = ({user}) => {
  return (
    <>
    <p>{user.name}</p>
    <p>{user.email}</p>
    <p>Street:{user.address.street}</p>
    </>
  )
}

export default User