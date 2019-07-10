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
            {this.props.values.map((obj, index) => (
              <tr key={index}>
                {obj.value
                  ? Object.keys(obj.value).map((key, index) => {
                      return <td key={index}>{obj.value[key]}</td>;
                    })
                  : null}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Answers;
