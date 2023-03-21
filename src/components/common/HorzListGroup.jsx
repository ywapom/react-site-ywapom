import React from "react";

import style from "./HorzListGroup.module.css";

const HorzListGroup = (props) => {
  const {
    items,
    textProperty,
    valueProperty,
    onItemSelect,
  } = props;

  // const isDesktopOrLaptop = useMediaQuery({
  //     query: '(min-device-width: 1224px)'
  // })
  // const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })
  // const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  // const isTabletOrMobileDevice = useMediaQuery({
  //     query: '(max-device-width: 1224px)'
  // })
  // const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  // const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

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
