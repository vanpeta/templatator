import React from 'react';

import Elements from './Elements';
import Preview from './Preview';


export default class Compose extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'hola',
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
      <div className="text-center">
        <h2 className="col-sm-8 col-sm-offset-2">Compose</h2>
        <div className="row">
          <Elements changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
          <Preview title={this.state.title} changeTitle={this.changeTitle.bind(this)} />
        </div>
      </div>
    )
  }
}

