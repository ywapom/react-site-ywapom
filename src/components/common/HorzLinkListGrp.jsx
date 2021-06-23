import React from "react";
import { Link } from "react-router-dom";
import styles from "./HorzListGroup.module.css";

const HorzLinkListGrp = (props) => {
  const {
    items,
    textProperty,
    valueProperty,
    onItemSelect,
    selectedItem,
  } = props;
  return (
    <ul>
      {items.map((item) => (
        <li key={item.valueProperty} font-family="Georgia" >
          <Link
            onClick={() => onItemSelect(item)}
            key={item[valueProperty]}
            className={
              item === selectedItem
                ? "list-group-item"
                : "list-group-item active"
            }
          ></Link>
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

HorzLinkListGrp.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default HorzLinkListGrp;
