import React, { Component } from "react";

class Answers extends Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              {this.props.features.map((item, index) => (
                <th key={index}>{item.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {this.props.values.map((input, index) => (
              <tr key={index}>
                <td>{input.value.Marca}</td>
                <td>{input.value.Tamanho}</td>
                <td>{input.value.Montagem}</td>
                <td>{input.value.Vidro}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Answers;
