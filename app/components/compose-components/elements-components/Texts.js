import React from 'react';

import * as textActions from "../../../actions/Actions";
var text = {};

export default class Text extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      selected: false
    }
  }
  createText() {
    text.saved = true;
    text.type = "text";
    textActions.createNewElement(text);
    text = {
      selected: this.state.selected,
      copy: undefined,
      color: undefined,
      size: undefined,
      fontWeight: undefined,
      alignment: undefined
    }
    this.props.previewText(text);
  }
  deletetext (id) {
    textActions.deletetext(id)
  }
  handleCopy(e) {
    const copy = e.target.value;
    text.copy = copy;
    text.selected = this.state.selected
    this.props.previewText(text);
  }
  handleColor(e) {
    const color = e.target.value;
    text.color = color;
    text.selected = this.state.selected
    this.props.previewText(text);
  }
  handleSize(e) {
    const size = e.target.value;
    text.size = size;
    text.selected = this.state.selected
    this.props.previewText(text);
  }
  handleFontWeight(e) {
    const fontWeight = e.target.value;
    text.fontWeight = fontWeight;
    text.selected = this.state.selected
    this.props.previewText(text);
  }
  handleAlignment(e) {
    const alignment = e.target.value;
    text.alignment = alignment;
    text.selected = this.state.selected
    this.props.previewText(text);
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
        <form className="text-left" style={{marginTop: '10px'}}>
            <div>
              <label for={'copy'}>copy</label>
              <input
                id={'copy'}
                placeholder={'copy'}
                onChange={this.handleCopy.bind(this)} />
            </div>
            <div>
              <label for={'color'}>color</label>
              <input
                id={'color'}
                type={'color'}
                value={this.props.element.color}
                onChange={this.handleColor.bind(this)} />
            </div>
            <div>
              <label for={'size'}>size</label>
              <input
                id={'size'}
                placeholder={'10'}
                type={'number'}
                value={this.props.element.size}
                onChange={this.handleSize.bind(this)} />
            </div>
            <div>
              <label for={'fontWeight'}>font weight</label>
              <select
                id={'fontWeight'}
                onChange={this.handleFontWeight.bind(this)}>
                  <option value="normal" defaultValue>Normal</option>
                  <option value="bold">Bold</option>
              </select>
            </div>
            <div>
              <label for={'alignment'}>Alignment</label>
              <select
                id={'alignment'}
                onChange={this.handleAlignment.bind(this)}>
                  <option value="left" defaultValue>Left</option>
                  <option value="center">Center</option>
                  <option value="right">Right</option>
              </select>
            </div>
            <button onClick={this.createText.bind(this)}>Save</button>
          </form>
        )
    }
    return (
      <div>
        <div
          onClick={() => {this.handleClick()}}
          style={{cursor: 'pointer'}}>
            Text
        </div>
        {controlsForm}
      </div>
    )
  }
};
