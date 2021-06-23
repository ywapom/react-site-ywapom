import React, { Component } from "react";

const h4style = {
  borderStyle: "inset",
  borderWidth: "1px",
  borderLeftWidth: "1px",
  borderRightWidth: "1px",
  borderRadius: "25px",
  borderColor: "teal",
  color: "teal",
  textAlign: "center",
  marginRight: "30px",
  marginLeft: "30px",
  fontSize: "larger",
  fontFamily: "Georgia",
};

const h5style = {
  textAlign: "center",
};

class Intro extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="text-center text-bold">Compositions by Ron Hermansen</h1>
        <h5 style={h5style}>All Rights Reserved.</h5>
        <br></br>
        <h4 style={h4style}>
          <br></br>
          “Music produces a kind of pleasure which human nature cannot do
          without.” – Confucius
          <p></p>
        </h4>
        <br></br>
      </React.Fragment>
    );
  }
}

export default Intro;
