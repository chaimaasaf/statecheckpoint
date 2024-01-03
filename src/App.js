import React, { Component } from "react";
import "./App.css";
class App extends Component {
  state = {
    person: {
      fullName: "chaima issaoui",
      bio: "i student developer js",
      imgSrc: "./image.png",
      profession: "Developer student",
    },
    shows: true,
    mountTime: 0,
  };
  toggleShow = () => {
    this.setState((prevState) => ({ shows: !prevState.shows }));
  };
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({ mountTime: prevState.mountTime + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.toggleShow}>Toggle Profile</button>
        {this.state.shows && <div>{}</div>}
        <p>Time since mount: {this.state.mountTime} seconds</p>
      </div>
    );
  }
}

export default App;
