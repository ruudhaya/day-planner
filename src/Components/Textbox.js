import React from "react";

export class Textbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aim: "",
      day: "Today"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({ aim: e.target.value });
  }

  handleSelect(e) {
    this.setState({
      day: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateEntry(this.state.aim, this.state.day);
    this.setState({
      aim: ""
    });
  }

  render() {
    return (
      <div className="container">
        <form className="form" onSubmit={this.handleSubmit}>
          <fieldset>
            <label htmlFor="aim"> For Day:</label>
            <select
              value={this.state.day}
              id="day"
              onChange={this.handleSelect}
            >
              <option value="Today">Today</option>
              <option value="Tomorrow">Tomorrow</option>
              <option value="Future">Future</option>
            </select>
          </fieldset>
          <fieldset>
            <label> Your Goal : </label>
            <input
              id="aim"
              value={this.state.aim}
              type="text"
              placeholder="Type your aim and add to list"
              onChange={this.handleChange}
            />
          </fieldset>
          <button>WILL DO</button>
        </form>
        <h2>TextBox</h2>
        <hr />
      </div>
    );
  }
}
