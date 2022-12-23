import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

let currDate = new Date(2022, 12, 23, 10);
currDate = currDate.getHours();
let greeting = "";
const cssStyle = {};

if (currDate >= 1 && currDate < 12) {
  greeting = "Good Morning";
  cssStyle.color = "black";
}
else if (currDate >= 12 && currDate < 19) {
  greeting = "Good Afternoon";
  cssStyle.color = "Green";
}
else {
  greeting = "Good Night";
  cssStyle.color = "Blue";
}


ReactDOM.render(
  <>
    <h1>Hello Subhadip, <span style={cssStyle}> {greeting}</span></h1>
  </>, document.getElementById("root"));