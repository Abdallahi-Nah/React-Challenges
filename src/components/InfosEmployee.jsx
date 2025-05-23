import React from 'react'

export default function InfosEmployee({phone, email, website}) {
  return (
    <div className='text-white'>
        <p>Phone : {phone}</p>
        <p>Email : {email}</p>
        <p>Website : {website}</p>
    </div>
  )
}
