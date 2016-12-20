import React from 'react';

var block = {}

export default class Blocks extends React.Component {

  handleCopy(e) {
    const copy = e.target.value;
    block.copy = copy;
    this.props.createBlock(block);
  }
  handleColor(e) {
    const color = e.target.value;
    block.color = color;
    this.props.createBlock(block);
  }
  handleSize(e) {
    const size = e.target.value;
    block.size = size;
    this.props.createBlock(block);
  }
  handleFontWeight(e) {
    const fontWeight = e.target.value;
    block.fontWeight = fontWeight;
    this.props.createBlock(block);
  }
  handleAlignment(e) {
    const alignment = e.target.value;
    block.alignment = alignment;
    this.props.createBlock(block);
  }
  render() {
    return (
      <div>
        <p id="blocks" onClick={this.props.elementSelected}>Blocks of Text</p><br />
        <form className="text-left">
          <div>
            <label for={'copy'}>Copy</label>
            <input
              id={'copy'}
              placeholder={'copy'}
              value={this.props.block.copy}
              onChange={this.handleCopy.bind(this)} />
          </div>
          <div>
            <label for={'color'}>Color</label>
            <input
              id={'color'}
              type={'color'}
              value={this.props.block.color}
              onChange={this.handleColor.bind(this)} />
          </div>
          <div>
            <label for={'size'}>Size</label>
            <input
              id={'size'}
              placeholder={'40'}
              type={'number'}
              value={this.props.block.size}
              onChange={this.handleSize.bind(this)} />
          </div>
          <div>
            <label for={'fontWeight'}>Font weight</label>
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
        </form>
      </div>
    );
  }
};
