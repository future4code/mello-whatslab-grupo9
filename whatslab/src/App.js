import React from "react";
import "./App.css";

import { TextViewer } from "./components/TextViewer/TextViewer";

class App extends React.Component {
  render() {
    return (
      <div>
        <TextViewer />
      </div>
    );
  }
}

export default App;
