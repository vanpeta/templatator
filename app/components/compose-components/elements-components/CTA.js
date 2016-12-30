import React from 'react';

import * as ctaActions from "../../../actions/Actions"

export default class Cta extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      type: "cta",
      saved: false,
      selected: this.props.selected,
      copy: this.props.copy,
      color: this.props.color || '#000000',
      size: this.props.size,
      fontWeight: this.props.fontWeight,
      bgColor: this.props.bgColor || '#ffffff',
      borderColor: this.props.borderColor,
      buttonSize: this.props.buttonSize,
      height: this.props.height,
      alignment: this.props.alignment,
      href: this.props.href,
      label: this.props.label,
      link: this.props.link
    }
  }
  handleClick() {
    if (this.props.selected == 'cta') {
      var e = false;
      this.props.updateSelected(e);
    }
    else {
      var e = 'cta'
      this.props.updateSelected(e)
    }
  }

  updateCta() {

  }

  handleCopy(e) {
    const copy = e.target.value;
    this.state.copy = copy;
    this.state.selected = this.props.selected
    this.props.previewCta(this.state);
  }
  handleColor(e) {
    const color = e.target.value;
    this.state.color = color;
    this.state.selected = this.props.selected
    this.props.previewCta(this.state);
  }
  handleSize(e) {
    const size = e.target.value;
    this.state.size = size;
    this.state.selected = this.props.selected
    this.props.previewCta(this.state);
  }
  handleBgColor(e) {
    const bgColor = e.target.value;
    this.state.bgColor = bgColor;
    this.state.selected = this.props.selected
    this.props.previewCta(this.state);
  }
  handleBorderColor(e) {
    const borderColor = e.target.value;
    this.state.borderColor = borderColor;
    this.state.selected = this.props.selected
    this.props.previewCta(this.state);
  }
  handleButtonSize(e) {
    const buttonSize = (e.target.value/2);
    this.state.buttonSize = buttonSize;
    this.state.selected = this.props.selected
    this.props.previewCta(this.state);
  }
  handleButtonHeight (e) {
    const height = (e.target.value+1);
    this.state.height = height;
    this.state.selected = this.props.selected;
    this.props.previewCta(this.state);
  }
  handleHref(e) {
    const href = e.target.value;
    this.state.href = href;
    this.state.selected = this.props.selected;
    this.props.previewCta(this.state);
  }

  createCta() {
    this.state.saved = true;
    this.state.type = "cta",
    console.log(this.state.src);
    ctaActions.createNewElement(this.state);
    this.state = {
      selected: this.props.selected,
      copy: undefined,
      color: undefined,
      size: undefined,
      fontWeight: undefined,
      bgColor: undefined,
      src: undefined,
      alt: undefined,
      href: undefined,
      label: undefined
    }
    this.props.previewCta(this.state);
  }

  deleteCta (id) {
    ctaActions.deleteCta(id)
  }

  render() {
    const isSelected = this.props.selected;
    let ctaControls = null;
    if (isSelected == "cta") {
      ctaControls = (
        <form style={{marginTop: '10px'}}>
          <div>
            <label for={'copy'}>Copy:</label>
            <input
            id={'label'}
            onChange={this.handleCopy.bind(this)} />
          </div>
          <div>
            <label for={'size'}>Font Size:</label>
            <input
            id={'size'}
            type={'number'}
            onChange={this.handleSize.bind(this)} />
          </div>
          <div>
            <label for={'color'}>Font Color:</label>
            <input
            id={'color'}
            type={'color'}
            onChange={this.handleColor.bind(this)} />
          </div>
          <div>
            <label for={'bgcolor'}>Background Color:</label>
            <input
            id={'bgcolor'}
            type={'color'}
            onChange={this.handleBgColor.bind(this)} />
          </div>
          <div>
            <label for={'bordercolor'}>Border Color:</label>
            <input
            id={'bordercolor'}
            type={'color'}
            onChange={this.handleBorderColor.bind(this)} />
          </div>
          <div>
            <label for={'button-size'}>Button Size:</label>
            <input
            id={'button-size'}
            type={'range'}
            onChange={this.handleButtonSize.bind(this)} />
          </div>
          <div>
            <label for={'button-size'}>Button Height:</label>
            <input
            id={'button-height'}
            type={'range'}
            onChange={this.handleButtonHeight.bind(this)} />
          </div>
          <div>
            <label for={'url'}>Goes to:</label>
            <input
              id={'url'}
              placeholder={'url'}
              onChange={this.handleHref.bind(this)} />
          </div>
          <button onClick={this.createCta.bind(this)} className={'btn btn-primary'}>Save</button>
        </form>
      )
    }
    return (
      <div>
        <div
          onClick={() => {this.handleClick()}}
          style={{cursor: 'pointer'}}>
            CTA
        </div>
        <div>
          {ctaControls}
        </div>
      </div>
    )
  }
};
