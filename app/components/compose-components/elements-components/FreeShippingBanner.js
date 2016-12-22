import React from 'react';

import * as imageActions from "../../../actions/Actions"
var fss = {}

export default class FreeShippingBanner extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      selected: false,
      active: false,
    }
  }
  handleClick() {
    if (this.state.selected) {
      this.setState({selected: false})
      this.setState({active: false})
    }
    else {
      this.setState({selected: true})
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
    this.props.update(copy)
  }
  render() {
    const isSelected = this.state.selected;
    let fssSwitcher = null;
    if (isSelected) {
      fssSwitcher = (
        <div>
          OFF
          <label for="fss" className="switch">
            <input
              id="fss"
              type="checkbox"
              onChange={this.handleFssActivation.bind(this)} />
            <div className="slider round" />
          </label>
          ON
        </div>
      )
    }
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
    return (
      <div>
        <div
          onClick={() => {this.handleClick()}}
          style={{cursor: 'pointer'}}>
            Free Shipping Banner
        </div>
        <div>
          {fssSwitcher}
          {fssText}
        </div>
      </div>
    )
  }
};
