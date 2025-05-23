import React from 'react';
import Me from '../images/me.jpeg';

export default function ImgEmployee() {
  return (
    <div className=' mt-2 w-100'>
        <img src={Me} alt="my img" srcset="" className='h-75 w-100 rounded-1'/>
    </div>
  )
}
