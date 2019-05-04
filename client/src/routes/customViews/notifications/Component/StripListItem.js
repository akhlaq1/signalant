import React from "react";

function ListItem({styleName, data}) {
  const {image, name, description, buttonList, icon, time} = data;
  return (
    <div className={`gx-user-list ${styleName}`}>
      <img
        alt='avatar'
        src={image}
        className="gx-avatar-img gx-avatar-img-lg gx-border-0"
        style={{width:'75px',height:'75px'}}
      />
      <div className="gx-description">
        <h3>{name}</h3>
        <p className="gx-mb-2">{description}</p>
        <i className={`icon icon-${icon} gx-pr-2`}/> <span className="gx-meta-date"><small>{time}</small></span>
        {/* {buttonList.map((btn, index) => (
          <span key={index} className="ant-badge gx-badge gx-badge-outline">{btn.name}</span>
        ))} */}
      </div>
    </div>
  );
}

export default ListItem;
