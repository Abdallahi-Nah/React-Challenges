import React from "react";
import SingleSocial from "./SingleSocial";

export default function Social() {
  return (
    <div className="m-3">
      <ul className="list-group">
        <SingleSocial socialName="Facebook" image='https://picsum.photos/63' />
        <SingleSocial socialName="Youtube" image='https://picsum.photos/61' />
        <SingleSocial socialName="Instegram" image='https://picsum.photos/62' />
      </ul>
    </div>
  );
}
