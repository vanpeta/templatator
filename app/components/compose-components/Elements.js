import React from 'react';

import FreeShippingBanner from './elements-components/FreeShippingBanner';
import Texts from './elements-components/Texts';
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
            <Texts
              element={this.props.element}
              previewText={this.props.previewText.bind(this)} />
          </li>
          <li className="list-group-item">
            <Images
              element={this.props.element}
              previewImage={this.props.previewImage.bind(this)} />
          </li>
          <li className="list-group-item">CTAs</li>
        </div>
      </div>
    )
  }
}
