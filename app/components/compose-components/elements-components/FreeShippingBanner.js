import React from 'react';

import * as imageActions from "../../../actions/Actions"
var fss = {}

export default class FreeShippingBanner extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      active: false,
    }
  }
  handleClick() {
    if (this.props.selected == 'fss') {
      var e = false;
      this.props.updateSelected(e);
    }
    else {
      var e = 'fss'
      this.props.updateSelected(e)
    }
  }
  handleFssActivation() {
    var b
    if (this.state.active) {
      this.setState({active: false})
      var b = false
      this.props.fssBanner(b)
    }
    else {
      this.setState({active: true})
      var b = true
      this.props.fssBanner(b)
    }
  }
  updateFss(e) {
    var copy = e.target.value;
    this.props.updateFss(copy)
  }
  render() {
    const isSelected = this.props.selected;
    let fssSwitcher = null;
    const isActive = this.state.active;
    let fssText = null;
    if (isActive) {
      fssText = (
        <div>
          <label for="fss-text">Update
            <input
            id="fss-text"
            placeholder="ON ORDERS $XX+"
            onChange={this.updateFss.bind(this)}/>
          </label>
        </div>
      )
    }
    if (isSelected == 'fss') {
      if (this.state.active) {
      var checked = true
      } else {
        checked = false
      }
      fssSwitcher = (
        <div>
          <div>
            OFF
            <label for="fss" className="switch">
              <input
                id="fss"
                type="checkbox"
                checked={checked}
                onChange={this.handleFssActivation.bind(this)} />
              <div className="slider round" />
            </label>
            ON
          </div>
          {fssText}
        </div>
      )
    }
    return (
      <div>
        <div
          onClick={() => {this.handleClick()}}
          style={{cursor: 'pointer'}}>
            Free Shipping Banner
        </div>
        <div>
          {fssSwitcher}
        </div>
      </div>
    )
  }
};
