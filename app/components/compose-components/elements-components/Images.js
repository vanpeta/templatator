import React from 'react';

import * as imageActions from "../../../actions/Actions"
var image = {}

export default class Images extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      selected: false
    }
  }

  createImage() {
    image.saved = true;
    image.type = "image",
    console.log(image.src);
    imageActions.createNewElement(image);
    image = {
      selected: this.state.selected,
      src: undefined,
      alt: undefined
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
    if (this.state.selected) {
      this.setState({selected: false})
    }
    else {
      this.setState({selected: true})
    }
  }

  render() {
    const isSelected = this.state.selected;
    let controlsForm = null;
    if (isSelected) {
      controlsForm = (
        <form className="text-left">
          <div>
            <label for={'url'}>url</label>
            <input
              id={'url'}
              placeholder={'url'}
              onChange={this.handleSrc.bind(this)} />
          </div>
          <div>
            <label for={'alt'}>alt</label>
            <input
              id={'alt'}
              placeholder={"if the image doesn't load, display this"}
              onChange={this.handleAlt.bind(this)} />
          </div>
          <button onClick={this.createImage.bind(this)}>Save</button>
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
