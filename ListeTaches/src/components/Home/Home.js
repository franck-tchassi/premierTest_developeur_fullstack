import React from "react";
import { Link } from "react-router-dom";
import homeImage from "./todo-list.jpg"

function Home(props) {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <img src={homeImage} height="700px" width="800px"></img>
    </div>
  );
}

export default Home;