import React from 'react';

import * as ctaActions from "../../../actions/Actions"
var cta = {}

export default class Cta extends React.Component {
  constructor (props) {
    super(props);
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
    cta.copy = copy;
    cta.selected = this.props.selected
    this.props.previewCta(cta);
  }

  createCta() {
    cta.saved = true;
    cta.type = "cta",
    console.log(cta.src);
    ctaActions.createNewElement(cta);
    cta = {
      selected: this.props.selected,
      copy: undefined,
      color: undefined,
      size: undefined,
      fontWeight: undefined,
      bgcolor: undefined,
      src: undefined,
      alt: undefined,
      href: undefined,
      label: undefined
    }
    this.props.previewCta(cta);
  }

  deleteCta (id) {
    ctaActions.deleteCta(id)
  }

  render() {
    const isSelected = this.props.selected;
    let ctaControls = null;
    if (isSelected == "cta") {
      ctaControls = (
        <form>
          <div>
            <label for={'copy'}>copy:</label>
            <input
            id={'label'}
            onChange={this.handleCopy.bind(this)} />
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
