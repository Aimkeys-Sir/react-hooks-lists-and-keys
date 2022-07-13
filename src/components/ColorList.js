import React from "react";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];

  const colorLis=colors.map(col=><li key={col} style={{ color: col}}>{col}</li>)
  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
      {colorLis}
      </ol>
    </div>
  );
}

export default ColorList;
