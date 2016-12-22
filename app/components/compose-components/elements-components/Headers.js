import React from 'react';

import * as HeaderActions from "../../../actions/Actions"
var header = {}

export default class Headers extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      selected: false
    }
  }
  createHeader() {
    header.saved = true;
    HeaderActions.createHeader(header);
    header = {
      selected: this.state.selected,
      copy: undefined,
      color: undefined,
      size: undefined,
      fontWeight: undefined,
      alignment: undefined
    }
    this.props.previewHeader(header);
  }
  deleteHeader (id) {
    HeaderActions.deleteHeader(id)
  }
  handleCopy(e) {
    const copy = e.target.value;
    header.copy = copy;
    header.selected = this.state.selected
    this.props.previewHeader(header);
  }
  handleColor(e) {
    const color = e.target.value;
    header.color = color;
    header.selected = this.state.selected
    this.props.previewHeader(header);
  }
  handleSize(e) {
    const size = e.target.value;
    header.size = size;
    header.selected = this.state.selected
    this.props.previewHeader(header);
  }
  handleFontWeight(e) {
    const fontWeight = e.target.value;
    header.fontWeight = fontWeight;
    header.selected = this.state.selected
    this.props.previewHeader(header);
  }
  handleAlignment(e) {
    const alignment = e.target.value;
    header.alignment = alignment;
    header.selected = this.state.selected
    this.props.previewHeader(header);
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
                value={this.props.header.color}
                onChange={this.handleColor.bind(this)} />
            </div>
            <div>
              <label for={'size'}>size</label>
              <input
                id={'size'}
                placeholder={'10'}
                type={'number'}
                value={this.props.header.size}
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
            <button onClick={this.createHeader.bind(this)}>Save</button>
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
