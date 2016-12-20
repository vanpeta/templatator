import React from 'react';

import Headers from './elements-components/Headers';

export default class Elements extends React.Component {

  render () {
    return (
      <div className="col-sm-3 col-sm-offset-1">
        <p>Elements</p>
        <div>
          <li className="list-group-item"><Headers header={this.props.header} createHeader={this.props.createHeader.bind(this)} />
          </li>
          <li className="list-group-item">Blocks of Text</li>
          <li className="list-group-item">Images</li>
          <li className="list-group-item">CTAs</li>
        </div>
      </div>
    )
  }
}
