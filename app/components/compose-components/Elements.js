import React from 'react';

import FreeShippingBanner from './elements-components/FreeShippingBanner';
import Headers from './elements-components/Headers';
import Images from './elements-components/Images';

export default class Elements extends React.Component {
  render () {
    return (
      <div className="col-sm-3 col-sm-offset-1">
        <p>Elements</p>
        <div>
          <li className="list-group-item">
            <FreeShippingBanner
              update={this.props.update.bind(this)}
              fssBanner={this.props.fssBanner.bind(this)} />
          </li>
          <li className="list-group-item">
            <Headers
              header={this.props.header}
              previewHeader={this.props.previewHeader.bind(this)} />
          </li>
          <li className="list-group-item">
            <Images

               />
          </li>
          <li className="list-group-item">CTAs</li>
        </div>
      </div>
    )
  }
}
