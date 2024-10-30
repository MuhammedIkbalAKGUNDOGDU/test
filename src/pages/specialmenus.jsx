import React from "react";

function SpecialMenu({ title, imageUrl, dishes }) {
  return (
    <div className="special-menu">
      <h2 className="menu-title">{title}</h2>
      {/*<img src={imageUrl} alt="Dish" className="menu-image" />*/}

      <div className="menu-content">
        {dishes.map((dish, index) => (
          <div className="menu-item" key={index}>
            <h3>{dish.name}</h3>
            <p>{dish.price} TL</p>
            <p className="description">{dish.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SpecialMenu;
