import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  onSearchSubmit(term) {
    axios.get("https://api.usplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization:
          "Client-ID ec7eadecce5e7879854f9a687b0fdea87790c4766acee6c6d257b5da82c06b08"
      }
    });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
