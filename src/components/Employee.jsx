import React from 'react'
import ImgEmployee from './ImgEmployee'
import DescEmployee from './DescEmployee'
import InfosEmployee from './InfosEmployee'

export default function Employee({name, job, phone, email, website}) {
  return (
    <div className='col-md-4 col-sm-6 pb-4 rounded-2'>
      <div className="card">
          <div className="card-header">
            <ImgEmployee />
          </div>
          <div className="card-body">
            <DescEmployee name={name} job={job} />
            <hr className='text-white' />
            <InfosEmployee phone={phone} email={email} website={website} />
          </div>
      </div>
    </div>
  )
}
