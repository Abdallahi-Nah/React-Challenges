import React from 'react'
import Employee from './Employee'

export default function Employees() {
    let employeesInfos = [
        {
            name: "Abdallahi Nah",
            job: "Full-Stack developer",
            phone: "+222 33296173",
            email: "abdounah@gmail.com",
            website: "abdounah.com"
        },
        {
            name: "Ahmed Med",
            job: "Mobile developer",
            phone: "+222 41154423",
            email: "ahmedmed@gmail.com",
            website: "ahmedmed.com"
        },
        {
            name: "Ali Brahim",
            job: "Desktop developer",
            phone: "+222 22134522",
            email: "alibrh@gmail.com",
            website: "alibrh.com"
        },
        {
            name: "Minetou Med",
            job: "Graphic Designer",
            phone: "+222 33125566",
            email: "minetoumed@gmail.com",
            website: "minetoumed.com"
        }
    ];

  return (
    <div className='d-flex gap-2 justify-content-between container mt-3' style={{height: '100vh'}}>
        {
            employeesInfos.map((employee) => {
                return (<Employee name={employee.name} 
                                  job={employee.job} 
                                  phone={employee.phone}
                                  email={employee.email}
                                  website={employee.website}/>);
            })
        }
    </div>
  )
}
