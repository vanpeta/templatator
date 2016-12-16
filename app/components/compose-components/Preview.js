import React from "react";

import HeaderFooter from './preview-components/HeaderFooter';

export default class Preview extends React.Component {
  render() {
    return (
      <div className="col-sm-4">
        <p>Preview</p>
        <div>
          <HeaderFooter header={this.props.header} />
        </div>
      </div>
    )
  }
}
