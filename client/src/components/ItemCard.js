import React from 'react';

const ItemCard = () => {

    return (
        <div className="item-card">
        <div className="title-bar card-bar">
          <a href=''></a>
        </div>
        <a className="card-hover">
          <div className="view-more">
            View Item
          </div>
        </a>
        <div className="item-img-div">
          <img src="" alt="" />
        </div>
        <div className="shadow card-shadow" />
      </div>
    );
};

export default ItemCard;