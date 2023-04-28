import React, { Component } from 'react';

class ListExemple extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          id: 1,
          coursLePlusImportant: "React"
        },
        {
          id: 2,
          coursLePlusImportant: "html/css"
        },
        {
          id: 3,
          coursLePlusImportant: "Javascript"
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <h1>Application List</h1>
        {this.state.list.map(item => (
          <div key={item.id}>
            le cours le plus important est le : {item.coursLePlusImportant}
          </div>
        ))}
      </div>
    );
  }
}

export default ListExemple;
