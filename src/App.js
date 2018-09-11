import React from "react";

import { Header } from "./Components/Header";
import { Textbox } from "./Components/Textbox";
import {
  DisplayToday,
  DisplayTomorrow,
  DisplayFuture
} from "./Components/Display";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Today: [],
      Tomorrow: [],
      Future: [],
      username: "Hi Udhay"
    };
    this.updateEntry = this.updateEntry.bind(this);
    this.deleteEntry = this.deleteEntry.bind(this);
  }

  updateEntry(term, day) {
    if (day === "Today") {
      this.setState({
        Today: [...this.state.Today, term]
      });
    } else if (day === "Tomorrow") {
      this.setState({
        Tomorrow: [...this.state.Tomorrow, term]
      });
    } else if (day === "Future") {
      this.setState({
        Future: [...this.state.Future, term]
      });
    }
  }

  deleteEntry(index, day) {
    if (day === "Today") {
      let filteredList = this.state.Today.filter((elem, i) => {
        if (i === index) {
          return false;
        }
        return true;
      });
      this.setState({
        Today: filteredList
      });
    } else if (day === "Tomorrow") {
      let filteredList = this.state.Tomorrow.filter((elem, i) => {
        if (i === index) {
          return false;
        }
        return true;
      });
      this.setState({
        Tomorrow: filteredList
      });
    } else if (day === "Future") {
      let filteredList = this.state.Future.filter((elem, i) => {
        if (i === index) {
          return false;
        }
        return true;
      });
      this.setState({
        Future: filteredList
      });
    } else {
      console.log("Something went wrong when removing the item");
    }
  }

  render() {
    return (
      <div>
        <Header nam={this.state.username} />
        <Textbox updateEntry={this.updateEntry} />
        <hr />
        <div className="grid">
          <DisplayToday
            items={this.state.Today}
            deleteItem={this.deleteEntry}
          />
          <DisplayTomorrow
            items={this.state.Tomorrow}
            deleteItem={this.deleteEntry}
          />
          <DisplayFuture
            items={this.state.Future}
            deleteItem={this.deleteEntry}
          />
        </div>
      </div>
    );
  }
}

export default App;
