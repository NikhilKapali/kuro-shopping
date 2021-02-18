import React from "react";

import "./collection_item.scss";

export default function collection_item({ id, name, price, imageUrl }) {
  return (
    <div className="collection__item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>

      <dic className="collection__footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </dic>
    </div>
  );
}
