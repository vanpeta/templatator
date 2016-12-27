import React from 'react';

import * as imageActions from "../../../actions/Actions"
var fss = {}

export default class Preheader extends React.Component {
  constructor (props) {
    super(props);
  }
  handleClick() {
    if (this.props.selected == 'preheader') {
      var e = false;
      this.props.updateSelected(e);
    }
    else {
      var e = 'preheader'
      this.props.updateSelected(e)
    }
  }

  updatePreheader(e) {
    var copy = e.target.value;
    this.props.updatePreheader(copy)
  }
  render() {
    const isSelected = this.props.selected;
    let preHeaderCopy = null;
    if (isSelected == "preheader") {
      preHeaderCopy = (
        <div>
          <label for={'copy'}>copy:</label>
          <textarea
          id={'label'}
          onChange={this.updatePreheader.bind(this)} />
        </div>
      )
    }
    return (
      <div>
        <div
          onClick={() => {this.handleClick()}}
          style={{cursor: 'pointer'}}>
            Preheader
        </div>
        <div>
          {preHeaderCopy}
        </div>
      </div>
    )
  }
};
