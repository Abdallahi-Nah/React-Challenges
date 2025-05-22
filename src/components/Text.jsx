import React from "react";

export default function Text() {
  const clientNeeded = "Programmer";
  return (
    <div className="m-3">
      <p className="p-3">
        <span className={clientNeeded == "Designer" ? "fw-bold text-dark" : ""}>Graphic </span>
        and <span className={clientNeeded == "Programmer" ? "fw-bold text-dark" : ""}>Web </span>
        design are far more than a job for me. Thanks to my extensive technical
        knowledge. I can implement my creative ideas very well. so that I can
        offer tailor. made solutions for customers.
      </p>
    </div>
  );
}
