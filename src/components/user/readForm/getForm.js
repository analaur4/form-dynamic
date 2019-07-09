import React, { Component } from "react";

class GetForm extends Component {
  render() {
    return (
      <div> 
        {this.props.features.map((input, index) => (
          <div key={index}>
            <label>{input.name}</label>
            {input.format === "boolean" ? (
              <select name={input.name} onChange={this.props.changeValue}>
                <option>Sim</option>
                <option>Não</option>
              </select>
            ) : (
              <input
                name={input.name}
                type={input.format}
                onChange={this.props.changeValue}
              />
            )}
            <button
              name={input.name}
              onClick={() => this.props.removeInput(input.id)}
            >
              X
            </button>
          </div>
        ))}

        <button onClick={this.props.saveValue}>Salvar</button>
      </div>
    );
  }
}

export default GetForm;
