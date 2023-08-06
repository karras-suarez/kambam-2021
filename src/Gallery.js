import React from "react";
import {
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  ten,
  eleven,
  twelve,
  thirteen,
  fourteen,
} from "./images/birthday-photos";

const numbers = [
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  ten,
  eleven,
  twelve,
  thirteen,
  fourteen,
];

export const PhotoGallery = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "25px",
        margin: "0 40px",
      }}
    >
      {numbers.map((photo, index) => (
        <img
          key={index}
          src={photo}
          alt={`${index + 1}`}
          style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "16px" }}
        />
      ))}
    </div>
  );
};