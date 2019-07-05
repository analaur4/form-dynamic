import React, { Component } from "react";

class GetForm extends Component {
  render() {
    return (
      <div>
        {this.props.features.map((input, index) => (
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

export default GetForm
