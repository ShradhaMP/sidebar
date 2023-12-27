import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
       const {name,id} =useParams()
  return (
    <div>
      <h1>It's {name}'s Mail</h1>
      <h2>His id is: {id}</h2>
    </div>
  )
}

export default User
