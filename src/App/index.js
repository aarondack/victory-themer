import React, { Component } from "react";
import ReactJson from "react-json-view";
import theme from "./theme";
import Charts from "./Charts";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      theme
    };
  }

  onTextChange = edit => {
    this.setState({
      theme: edit.updated_src
    });
  };

  render() {
    const { theme } = this.state;
    return (
      <div className="container">
        <div className="json-editor">
          <ReactJson
            src={theme}
            onEdit={edit => this.onTextChange(edit)}
            theme={"ocean"}
            displayObjectSize={false}
            displayDataTypes={false}
          />
        </div>
        <div className="victory">
          <Charts theme={theme} />
        </div>
      </div>
    );
  }
}

export default App;
