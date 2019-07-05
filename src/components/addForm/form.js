import React, { Component } from "react";
import axios from "axios";
import CreateForm from "./createForm";
import GetForm from "./getForm";

const URL = "http://localhost:3003/features";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      format: "",
      features: []
    };

    this.saveData = this.saveData.bind(this);
    this.changeName = this.changeName.bind(this);
    this.changeFormat = this.changeFormat.bind(this);

    this.refresh();
  }

  refresh() {
    axios.get(`${URL}`).then(resp => this.setState({ features: resp.data }));
  }

  saveData() {
    axios.post(`${URL}`, {
      name: this.state.name,
      format: this.state.format
    });
  }

  changeName(e) {
    this.setState({ ...this.state, name: e.target.value });
  }

  changeFormat(e) {
    this.setState({ ...this.state, format: e.target.value });
  }

  componentDidMount() {
    this.refresh();
  }

  render() {
    return (
      <div className="App">
        <CreateForm
          name={this.state.name}
          format={this.state.format}
          saveData={this.saveData}
          changeName={this.changeName}
          changeFormat={this.changeFormat}
        />

        <GetForm features={this.state.features} />
      </div>
    );
  }
}

export default Form;
