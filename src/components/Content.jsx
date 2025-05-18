import React from "react";
import Cards from "./Cards";

export default function Content() {
  let products = [
    { img: "phone1.jpg", title: "iPhone 14", description: "this is iphone 14" },
    { img: "phone2.jpg", title: "iPhone 13", description: "this is iphone 13" },
    { img: "phone3.jpg", title: "iPhone 12", description: "this is iphone 12" },
    { img: "phone4.jpg", title: "iPhone 11", description: "this is iphone 11" },
    { img: "phone1.jpg", title: "iPhone 16", description: "this is iphone 16" },
  ];

  const printTitle = (message) => {
    console.log("this from content file, the title is : " + message);
  }

  return (
    <>
      <div className="d-flex justify-content-around align-content-center gap-2 m-2">
        {products.map((product, index) => {
          return (
            <Cards
              onClick={printTitle}
              key={index}
              img={product.img}
              title={product.title}
              description={product.description}
            >
                <p>my market</p>
            </Cards>
          );
        })}
      </div>
    </>
  );
}
