import React from 'react';

import Elements from './compose-components/Elements';
import Preview from './compose-components/Preview';


export default class Compose extends React.Component {
  constructor() {
    super();
    this.state = {
      updatedFss: {copy: "ON ORDERS $XX+", visible: false},
      element: {},
    };
  }

  updatingFss(copy) {
    this.setState({updatedFss: {
      copy: copy,
      visible: true
    }})
  }
  activateFss(b) {
    this.setState({updatedFss: {
      visible: b,
      copy: "ON ORDERS $XX+"
    }})
  }

  previewText(text) {
    this.setState({
      element: {
        type: "text",
        saved: false,
        selected: text.selected,
        copy: text.copy,
        color: text.color,
        size: text.size,
        fontWeight: text.fontWeight,
        alignment: text.alignment
      }
    });
  }

  previewImage(image) {
    this.setState({
      element: {
        type: "image",
        saved: false,
        selected: image.selected,
        src: image.src,
        alt: image.alt
      }
    })
  }

  render() {
    return (
      <div className="text-center">
        <h2 className="col-sm-8 col-sm-offset-2">Compose</h2>
        <div className="row">
          <Elements
            previewText={this.previewText.bind(this)}
            element={this.state.element}
            previewImage={this.previewImage.bind(this)}
            update={this.updatingFss.bind(this)}
            fssBanner={this.activateFss.bind(this)} />
          <Preview
            style={{height: "100%"}}
            element={this.state.element}
            updatedFss={this.state.updatedFss}
          />
        </div>
      </div>
    )
  }
}

