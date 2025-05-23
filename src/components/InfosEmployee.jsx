import React from 'react'

export default function InfosEmployee({phone, email, website}) {
  return (
    <div>
        <p>Phone : {phone}</p>
        <p>Email : {email}</p>
        <p>Website : {website}</p>
    </div>
  )
}
