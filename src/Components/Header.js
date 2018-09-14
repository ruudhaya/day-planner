import React from "react";
import hack from "hack";

export class Header extends React.Component {
  render() {
    return (
      <div className="grid header">
        <div className="salutation cell -80f12">
          <div className="content name">
            <center>
              <b> {this.props.nam} </b>
              <hr />
            </center>
          </div>
        </div>
      </div>
    );
  }
}
