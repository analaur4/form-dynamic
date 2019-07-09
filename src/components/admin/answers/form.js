import React, { Component } from "react";
import axios from "axios";
import Answers from "./answers";

const url = "http://localhost:3003/form";
const URL = "http://localhost:3003/features";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: [],
      features: []
    };

    this.read();
  }

  read() {
    axios.get(`${url}`).then(resp => this.setState({ values: resp.data }));
    axios.get(`${URL}`).then(resp => this.setState({ features: resp.data }));
  }

  componentDidMount() {
    this.read();
  }

  render() {
    return (
      <div className="form">
        <Answers values={this.state.values} features={this.state.features} />
      </div>
    );
  }
}

export default Form;
