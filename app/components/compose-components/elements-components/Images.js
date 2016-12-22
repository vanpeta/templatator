import React from 'react';

import * as imageActions from "../../../actions/Actions"
var image = {}

export default class Images extends React.Component {

  createImage() {
    imageActions.createImage(image)
  }

  handleUrl(e) {
    const url = e.target.value;
    image.url = url;
    imageActions.createImage(image)
  }

  render() {
    return (
      <div>
        <p>Images</p><br />
        <form className="text-left">
          <div>
            <label for={'url'}>url</label>
            <input
              id={'url'}
              placeholder={'url'}
              onChange={this.handleUrl.bind(this)} />
          </div>
          <button onClick={this.createImage.bind(this)}>Save</button>
        </form>
      </div>
    )
  }
}
