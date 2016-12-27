import React from 'react';

import Elements from './compose-components/Elements';
import Preview from './compose-components/Preview';


export default class Compose extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: false,
      updatedFss: {copy: "ON ORDERS $XX+", visible: false},
      preheader: "To keep seeing us in your inbox, add noreply@admarketing.guess.com to your address book.",
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

  updatingPreheader(copy) {
    this.setState({
      preheader: copy
    })
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
        alignment: text.alignment,
        href: text.href,
        label: text.label
      }
    });
  }

  updateSelected(e){
    console.log('before update in compose', this.state.selected)
    this.setState({
      selected: e
    },console.log('after update in compose',this.state.selected))
  }

  previewImage(image) {
    this.setState({
      element: {
        type: "image",
        saved: false,
        selected: image.selected,
        src: image.src,
        alt: image.alt,
        href: image.href,
        label: image.label
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
            selected={this.state.selected}
            updateSelected={this.updateSelected.bind(this)}
            element={this.state.element}
            previewImage={this.previewImage.bind(this)}
            updateFss={this.updatingFss.bind(this)}
            updatePreheader={this.updatingPreheader.bind(this)}
            fssBanner={this.activateFss.bind(this)} />
          <Preview
            style={{height: "100%"}}
            element={this.state.element}
            updatedFss={this.state.updatedFss}
            updatedPreheader={this.state.preheader}
          />
        </div>
      </div>
    )
  }
}

