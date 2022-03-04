import React from "react";
import "./Body.css";
import './LeftPanel';
import LeftPanel from "./LeftPanel";
import MainContent from "./MainContent";

class Body extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="body">
        <LeftPanel></LeftPanel>
        <MainContent></MainContent>
      </div>
    )
  }
}

export default Body;