import React from "react";

import style from "./HorzListGroup.module.css";

const HorzListGroup = (props) => {
  const {
    items,
    textProperty,
    valueProperty,
    onItemSelect,
  } = props;


  return (
    <ul className={style.ul}>
      {items.map((item) => (
        <li
          key={item[valueProperty]}
          onClick={() => onItemSelect(item)}
          className={style.li}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

HorzListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default HorzListGroup;
