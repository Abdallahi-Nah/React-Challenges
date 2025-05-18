import React from "react";
import { Button, Card } from "react-bootstrap";

export default function Cards({onClick, img, title, description, children}) {
  const handleClick = () => {
    onClick(title);
  }

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={img}
          style={{ height: "200px", width: "100%", padding: "10px" }}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
            {children}
          </Card.Text>
          <Button onClick={handleClick} variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
}
