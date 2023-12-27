import React from 'react'

function UsersData({users}) {
  return (
    <>
      {
       users.map((cur)=>{
              const {id,name,email} =cur;
              return(
                     <tr key={id}>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{email}</td>
                     </tr>
              )
       })
      }
    </>
  )
}

export default UsersData
