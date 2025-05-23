import React from 'react'

export default function DescEmployee({name, job}) {
  return (
    <div>
        <p className='text-uppercase fw-bold fs-3 text-center'>{name}</p>
        <p className='fw-medium text-center'>{job}</p>
    </div>
  )
}
