import React from 'react';

import Headers from './Headers';

export default class Elements extends React.Component {

  render () {
    return (
      <div className="col-sm-4 col-sm-offset-2">
        <p>Elements</p>
        <div>
          <li className="list-group-item"><Headers title={this.props.title} changeTitle={this.props.changeTitle.bind(this)} /></li>
          <li className="list-group-item">Blocks of Text</li>
          <li className="list-group-item">Images</li>
          <li className="list-group-item">CTAs</li>
        </div>
      </div>
    )
  }
}
