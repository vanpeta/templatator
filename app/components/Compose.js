import React from 'react';

import Elements from './compose-components/Elements';
import Preview from './compose-components/Preview';


export default class Compose extends React.Component {
  constructor() {
    super();
    this.state = {
      header: {
        copy: 'newTest'
      }
    };
  }

  createHeader(header) {
    this.setState({
      header: {
        copy: header.copy,
        color: header.color
      }
    });
  }

  render() {
    return (
      <div className="text-center">
        <h2 className="col-sm-8 col-sm-offset-2">Compose</h2>
        <div className="row">
          <Elements
            createHeader={this.createHeader.bind(this)}
            header={this.state.header} />
          <Preview
            header={this.state.header}
          />
        </div>
      </div>
    )
  }
}

