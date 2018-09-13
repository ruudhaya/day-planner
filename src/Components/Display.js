import React from "react";

export class DisplayToday extends React.Component {
  removeThis(index) {
    this.props.deleteItem(index, "Today");
  }

  render() {
    return (
      <div>
        <h2>Today</h2>
        {this.props.items.map((item, index) => {
          return (
            <div>
              <span key="{index}">{item}</span>
              <button onClick={() => this.removeThis(index)}>X</button>
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
            <div>
              <span key="{index}">{item}</span>
              <button onClick={() => this.removeThis(index)}>X</button>
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
            <div>
              <span key="{index}">{item}</span>
              <button onClick={() => this.removeThis(index)}>X</button>
            </div>
          );
        })}
      </div>
    );
  }
}
