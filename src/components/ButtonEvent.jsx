import React from "react";
import Employee from "./Employee";
import { useState } from "react";

export default function ButtonEvent() {
  const [index, setIndex] = useState(0);
  const [employees, setEmployees] = useState([]);
  const [message, setMessage] = useState("");

  let employeesInfos = [
    {
      name: "Abdallahi Nah",
      job: "Full-Stack developer",
      phone: "+222 33296173",
      email: "abdounah@gmail.com",
      website: "abdounah.com",
    },
    {
      name: "Ahmed Med",
      job: "Mobile developer",
      phone: "+222 41154423",
      email: "ahmedmed@gmail.com",
      website: "ahmedmed.com",
    },
    {
      name: "Ali Brahim",
      job: "Desktop developer",
      phone: "+222 22134522",
      email: "alibrh@gmail.com",
      website: "alibrh.com",
    },
    {
      name: "Minetou Med",
      job: "Graphic Designer",
      phone: "+222 33125566",
      email: "minetoumed@gmail.com",
      website: "minetoumed.com",
    },
  ];

  const addEmployee = () => {
    setMessage("");
    if (index < employeesInfos.length) {
      setEmployees([
        ...employees,
        {
          name: employeesInfos[index].name,
          job: employeesInfos[index].job,
          phone: employeesInfos[index].phone,
          email: employeesInfos[index].email,
          website: employeesInfos[index].website,
        },
      ]);
      setIndex(index + 1);
    }else {
        setMessage("we don't have any item...");
    }
  };

  return (
    <>
      <div className="mt-3">
        <button onClick={addEmployee} className="btn btn-primary w-100">
          Add Employee
        </button>
      </div>

      <div className="row container mt-3" style={{ height: "100vh" }}>
        {message == "" ? employees.map((employee, index) => {
          return (
            <Employee
              key={index}
              name={employee.name}
              job={employee.job}
              phone={employee.phone}
              email={employee.email}
              website={employee.website}
            />
          );
        }) : ""}
      </div>
    </>
  );
}
