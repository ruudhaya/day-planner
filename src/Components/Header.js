import React from "react";

export class Header extends React.Component {
  render() {
    return (
      <div>
        <center>
          <b> {this.props.nam} </b>
          <hr />
        </center>
      </div>
    );
  }
}
