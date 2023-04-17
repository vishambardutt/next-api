import React from 'react'

const users = ({users}) => {
  return (
      <>
      <h1>users</h1>
      {
            users.map((user)=>{
                  return(
                        <div key={user.id}>
                             <p>{user.name}</p> 
                              <p>{user.email}</p>

                        </div>
                  )
            })
      }
      </>
    
  )
}

export default users

export async function getStaticProps(){
      let response = await fetch('https://jsonplaceholder.typicode.com/users')
      let data = await response.json()
      console.log(data)

      return{
            props:{
                  users: data,
            }
      }
}