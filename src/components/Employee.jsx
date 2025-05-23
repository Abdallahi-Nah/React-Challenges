import React from 'react'
import ImgEmployee from './ImgEmployee'
import DescEmployee from './DescEmployee'
import InfosEmployee from './InfosEmployee'

export default function Employee({name, job, phone, email, website}) {
  return (
    <div className='container w-25 pb-4 h-75 rounded-2' style={{backgroundColor: "#444444"}}>
        <ImgEmployee />
        <DescEmployee name={name} job={job} />
        <hr className='text-white' />
        <InfosEmployee phone={phone} email={email} website={website} />
    </div>
  )
}
