import React from "react";

import "./LoadCard.css";

const LoadCard = (props) => {
  return (
    <section className="load-card">
      <div className="load-card__auto">
        <h4>{props.model}</h4>
        {/* this doest work due to free server */}
        {/* <img src={props.image} alt="car" /> */}
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdKu-Y9C8G5fKNK0bIcISAcyzgm5pZeRg_Gw&usqp=CAU" alt="car" />
      </div>
      <div className="load-card__content">
        <div>
          <span>{props.payment} / Certified</span>
          <h4>${props.price}</h4>
        </div>
        <div>
          <span className="load-item__label">Company</span>
          <h4>{props.companyName}</h4>
        </div>
        <div>
          <a href={`tel:${props.phoneNumber}`}>
            <span>Tel: {props.phoneNumber}</span>
          </a>
        </div>
      </div>
      <div className="load-item__pick-drop">
        <a>
          <span className="load-item__label">Pickup Location</span>
          <h4>{props.pickupLocation}</h4>
        </a>
        <a>
          <span className="load-item__label">Destination</span>
          <h4>{props.dropOffLocation}</h4>
        </a>
        <a>
          <span className="load-item__label">Pickup Date</span>
          <span>{props.pickupDate}</span>
        </a>
      </div>
    </section>
  );
};

export default LoadCard;
