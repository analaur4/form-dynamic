import React, { Component } from "react";

class CreateForm extends Component {
  render() {
    return (
      <div className="App">
        <form>
          <label>Nome: </label>
          <input type="text" onChange={this.props.changeName} />

          <label>Formato: </label>
          <select onChange={this.props.changeFormat}>
            <option value="text">Texto</option>
            <option value="number">Número</option>
            <option value="boolean">Booleano</option>
          </select>

          <button onClick={this.props.saveData}>Salvar</button>
        </form>
      </div>
    );
  }
}

export default CreateForm
