import React from 'react';

import * as imageActions from "../../../actions/Actions"
var image = {}

export default class Images extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      link: false
    }
  }

  createImage() {
    image.saved = true;
    image.type = "image",
    console.log(image.src);
    imageActions.createNewElement(image);
    image = {
      selected: this.props.selected,
      src: undefined,
      alt: undefined,
      href: undefined,
      label: undefined
    }
    this.props.previewImage(image);
  }

  deleteImage (id) {
    imageActions.deleteImage(id)
  }

  handleSrc(e) {
    const src = e.target.value;
    image.src = src;
    image.selected = this.state.selected
    this.props.previewImage(image);
  }

  handleAlt(e) {
    const alt = e.target.value;
    image.alt = alt;
    image.selected = this.state.selected
    this.props.previewImage(image);
  }
  handleClick() {
    if (this.props.selected == 'image') {
      var e = false;
      this.props.updateSelected(e);
      image.selected= e;
      this.props.previewImage(image)
    }
    else {
      var e = 'image'
      this.props.updateSelected(e)
    }
  }
  handleMakeLink() {
    if (this.state.link) {
      this.setState({link: false})
    }
    else {
      this.setState({link: true})
    }
  }
  handleHref(e) {
    const href = e.target.value;
    image.href = href;
    image.selected = this.state.selected
    this.props.previewImage(image);
  }
  handleLabel(e) {
    const label = e.target.value;
    image.label = label;
    image.selected = this.state.selected
    this.props.previewImage(image);
  }

  render() {
    const isSelected = this.props.selected;
    const isALink = this.state.link;
    let linkOptions = null;
    if (isALink) {
      linkOptions = (
        <div>
          <div>
            <label for={'href'}>url to drive to:</label>
            <input id={'href'}
            placeholder={'url'}
            onChange={this.handleHref.bind(this)} />
          </div>
          <div>
            <label for={'label'}>Tracking Label:</label>
            <input id={'label'}
            placeholder={'label'}
            onChange={this.handleLabel.bind(this)} />
          </div>
        </div>
      )
    }
    let controlsForm = null;
    if (isSelected == 'image') {
      if (this.state.link) {
      var checked = true
      } else {
        checked = false
      }
      controlsForm = (
        <form className="text-left" style={{marginTop: '10px'}}>
          <div>
            <label for={'url'}>Load Image From:</label>
            <input
              id={'url'}
              placeholder={'url'}
              onChange={this.handleSrc.bind(this)} />
          </div>
          <div>
            <label for={'alt'}>Alternative Text:</label>
            <textarea
              id={'alt'}
              placeholder={"if the image doesn't load display this"}
              onChange={this.handleAlt.bind(this)} />
          </div>
          <div>
          Make this a link:<br />
            <div>
              NO
              <label for="fss" className="switch">
                <input
                  id="fss"
                  checked={checked}
                  type="checkbox"
                  onChange={this.handleMakeLink.bind(this)} />
                <div className="slider round" />
              </label>
              YES
            </div>
          </div>
          {linkOptions}
          <button onClick={this.createImage.bind(this)} className={'btn btn-primary'}>Save</button>
        </form>
        )
    }
    return (
      <div>
        <div
          onClick={() => {this.handleClick()}}
          style={{cursor: 'pointer'}}>
            Image
        </div>
        {controlsForm}
      </div>
    )
  }
}
