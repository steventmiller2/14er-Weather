import React from "react";
import "./Body.css";
import SideBarMenu from "./SideBarMenu.jsx";
import MainContent from "./MainContent.jsx";

class Body extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="body">
        <SideBarMenu></SideBarMenu>
        <MainContent></MainContent>
      </div>
    )
  }
}

export default Body;