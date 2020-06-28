import React from "react";
import { Tracker } from "./Tracker/Tracker";
import { fetchData } from "./api";
import styles from "./App.module.css";

class App extends React.Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data: data });
  }

  render() {
    return (
      <div className={styles.image}>
        <Tracker data={this.state.data}/>
      </div>
    );
  }
}

export default App;
