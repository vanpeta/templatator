import React from "react";

import HeaderFooter from './preview-components/HeaderFooter';

export default class Preview extends React.Component {
  render() {
    return (
      <div className="container-fluid col-sm-7" style={{minHeight: '100%', overflow: 'hidden'}}>
        <p>Preview</p>
        <div>
          <HeaderFooter header={this.props.header} updatedFss={this.props.updatedFss}/>
        </div>
      </div>
    )
  }
}
