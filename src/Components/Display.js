import React from "react";
import hack from "hack";

export class DisplayToday extends React.Component {
  removeThis(index) {
    this.props.deleteItem(index, "Today");
  }

  render() {
    return (
      <div className="cell">
        <h3>Today</h3>
        {this.props.items.map((item, index) => {
          return (
            <div key={index} className="grid myitems">
              <div className="cell -9of12">
                <div className="content-title">
                  <span key="{index}">{item}</span>
                </div>
              </div>
              <div className="cell -3of12">
                <div className="content">
                  <button
                    className="btn-default btn-ghost"
                    onClick={() => this.removeThis(index)}
                  >
                    X
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export class DisplayTomorrow extends React.Component {
  removeThis(e) {
    this.props.deleteItem(e, "Tomorrow");
  }
  render() {
    return (
      <div>
        <h2>Tomorrow</h2>
        {this.props.items.map((item, index) => {
          return (
            <div key={index} className="grid myitems">
              <div className="cell -9of12">
                <div className="content-title">
                  <span key="{index}">{item}</span>
                </div>
              </div>
              <div className="cell -3of12">
                <div className="content">
                  <button
                    className="btn-default btn-ghost"
                    onClick={() => this.removeThis(index)}
                  >
                    X
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export class DisplayFuture extends React.Component {
  removeThis(e) {
    this.props.deleteItem(e, "Future");
  }
  render() {
    return (
      <div>
        <h2>Future</h2>
        {this.props.items.map((item, index) => {
          return (
            <div key={index} className="grid myitems">
              <div className="cell -9of12">
                <div className="content-title">
                  <span key="{index}">{item}</span>
                </div>
              </div>
              <div className="cell -3of12">
                <div className="content">
                  <button
                    className="btn-default btn-ghost"
                    onClick={() => this.removeThis(index)}
                  >
                    X
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
