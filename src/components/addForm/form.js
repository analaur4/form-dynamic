import React, { Component } from "react";
import axios from "axios";

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
    axios
      .post(`${URL}`, {
        name: this.state.name,
        format: this.state.format
      })
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
        <form>
          <label>Nome: </label>
          <input type="text" onChange={this.changeName} />

          <label>Formato: </label>
          <select onChange={this.changeFormat}>
            <option value="text">Texto</option>
            <option value="number">Número</option>
            <option value="boolean">Booleano</option>
          </select>

          <button onClick={this.saveData}>Salvar</button>
        </form>

        {this.state.features.map((input, index) => (
          <div key={index}>
            <label>{input.name}</label>
            {input.format === "boolean" ? (
              <select>
                <option>Sim</option>
                <option>Não</option>
              </select>
            ) : (
              <input type={input.format} />
            )}
          </div>
        ))}
      </div>
    );
  }
}

export default Form;
