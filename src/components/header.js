import React from "react"

export default function Header(props) {
  const headerLevelMap = [2, 1.5, 1.17, 1, 0.83, 0.67];
  let headerLvl = parseInt(props.headerLevel,10) - 1;
  let headerFontSize = headerLevelMap[headerLvl];
  return (
    <p style={{ fontSize:`${headerFontSize}em`, fontWeight:`bolder` }}>
      {props.text}
    </p>
  )
}