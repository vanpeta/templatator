import React from "react";

import HeaderFooter from './HeaderFooter';

export default class Preview extends React.Component {
  render() {
    return (
      <div className="col-sm-4">
        <p>Preview</p>
        <div>
          <HeaderFooter title={this.props.title} />
        </div>
      </div>
    )
  }
}
