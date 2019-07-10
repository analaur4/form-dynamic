import React, { Component } from "react";
import axios from "axios";
import GetForm from "./getForm";

const URL = "http://localhost:3003/features";
const url = "http://localhost:3003/form";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      features: [],
      values: {}
    };

    this.saveValue = this.saveValue.bind(this);
    this.changeValue = this.changeValue.bind(this);
    this.removeInput = this.removeInput.bind(this);

    this.refresh();
  }

  refresh() {
    axios.get(`${URL}`).then(resp => this.setState({ features: resp.data }));
  }

  saveValue() {
    axios.post(`${url}`, {
      value: this.state.values
    });
  }

  changeValue(e) {
    let values = this.state.values;
    values[e.target.name] = e.target.value;

    this.setState({ ...this.state, values });
  }

  removeInput(id) {
    axios.delete(`${URL}/${id}`).then(resp => this.refresh());
  }

  componentDidMount() {
    this.refresh();
  }

  render() {
    return (
      <div className="form">
        <GetForm
          features={this.state.features}
          saveValue={this.saveValue}
          changeValue={this.changeValue}
          removeInput={this.removeInput}
        />
      </div>
    );
  }
}

export default Form;
