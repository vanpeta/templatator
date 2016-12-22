import React from 'react';

import Elements from './compose-components/Elements';
import Preview from './compose-components/Preview';


export default class Compose extends React.Component {
  constructor() {
    super();
    this.state = {
      updatedFss: {copy: "ON ORDERS $XX+", visible: false},
      header: {
        copy: ''
      }
    };
  }

  updatingFss(copy) {
    this.setState({updatedFss: {
      copy: copy,
      visible: true
    }})
  }
  activateFss(b) {
    this.setState({updatedFss: {
      visible: b,
      copy: "ON ORDERS $XX+"
    }})
  }

  previewHeader(header) {
    this.setState({
      header: {
        saved: false,
        copy: header.copy,
        color: header.color,
        size: header.size,
        fontWeight: header.fontWeight,
        alignment: header.alignment
      }
    });
  }

  render() {
    return (
      <div className="text-center">
        <h2 className="col-sm-8 col-sm-offset-2">Compose</h2>
        <div className="row">
          <Elements
            previewHeader={this.previewHeader.bind(this)}
            header={this.state.header}
            update={this.updatingFss.bind(this)}
            fssBanner={this.activateFss.bind(this)} />
          <Preview
            style={{height: "100%"}}
            header={this.state.header}
            updatedFss={this.state.updatedFss}
          />
        </div>
      </div>
    )
  }
}

