import React, { Component } from "react";

import "./styles/App.css";

/* eslint-disable react/no-multi-comp, react/no-unused-state */
class App extends Component {
  state = {
    on: false,
    input: "",
    mainColor: "blue",
    buttonState: "No!",
    title: ''
  };
  handleClick = () => {
    this.setState({ buttonState: "Yes!" });
  };

  handleInputChange = (event) => {
    const value = event.currentTarget && event.currentTarget.value;
    this.setState({ title: value || '' });
  };

  handleStrings = (string) => {
    return !!string;
  };
  render() {
    const { mainColor, buttonState, title } = this.state;
    return (
      <div>
        <h1 className={mainColor}>Welcome to React</h1>
        <h2>{title}</h2>
        <input name="text" type="test" onChange={this.handleInputChange} />
        <p className="button-state">{buttonState}</p>
        <button onClick={this.handleClick} />
      </div>
    );
  }
}

export class Link extends Component {
  render() {
    const { hide, address } = this.props;
    if (!hide) {
      return <a href={address} />;
    }
    return null;
  }
}

export default App;
