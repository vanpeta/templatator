import React from 'react';

import FreeShippingBanner from './elements-components/FreeShippingBanner';
import Texts from './elements-components/Texts';
import Images from './elements-components/Images';
import Preheader from './elements-components/Preheader';
import Cta from './elements-components/CTA';

export default class Elements extends React.Component {
  render () {
    return (
      <div className="col-sm-3 col-sm-offset-1">
        <p>Elements</p>
        <div>
          <li className="list-group-item">
            <Preheader
              updatePreheader={this.props.updatePreheader.bind(this)}
              selected={this.props.selected}
              updateSelected={this.props.updateSelected.bind(this)} />
          </li>
          <li className="list-group-item">
            <FreeShippingBanner
              selected={this.props.selected}
              updateSelected={this.props.updateSelected.bind(this)}
              updateFss={this.props.updateFss.bind(this)}
              fssBanner={this.props.fssBanner.bind(this)} />
          </li>
          <li className="list-group-item">
            <Texts
              selected={this.props.selected}
              updateSelected={this.props.updateSelected.bind(this)}
              element={this.props.element}
              previewText={this.props.previewText.bind(this)} />
          </li>
          <li className="list-group-item">
            <Images
              selected={this.props.selected}
              updateSelected={this.props.updateSelected.bind(this)}
              element={this.props.element}
              previewImage={this.props.previewImage.bind(this)} />
          </li>
          <li className="list-group-item">
            <Cta
              selected={this.props.selected}
              updateSelected={this.props.updateSelected.bind(this)} />
          </li>
          <li className="list-group-item">
            Legal
          </li>

        </div>
      </div>
    )
  }
}
