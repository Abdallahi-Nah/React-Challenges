import React from "react";

export default function SingleSocial({socialName, image}) {
  return (
    <div>
      <li className="list-group-item p-3">
        <img src={image} className='me-2'/>
        <input type="checkbox" className="me-2" id={socialName} />
        <label htmlFor={socialName}>{socialName}</label>
      </li>
    </div>
  );
}