import React from "react";
import "./css/Carousel.css";

export default function Carousel() {
  return (
    <div
      class="gallery js-flickity"
      data-flickity-options='{ "wrapAround": true }'
    >
      <div class="gallery-cell"></div>
      <div class="gallery-cell"></div>
      <div class="gallery-cell"></div>
      <div class="gallery-cell"></div>
      <div class="gallery-cell"></div>
    </div>
  );
}
