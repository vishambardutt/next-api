import React from 'react'
import User from "../components/user"
const users = ({users}) => {
  return (
      <>
      <h1>users</h1>
      {
            users.map((user)=>{
                  return(
                        <div key={user.id}>
                             <User user={user}/>

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