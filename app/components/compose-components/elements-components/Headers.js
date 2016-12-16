import React from 'react';

var header = {}

export default class Headers extends React.Component {

  handleCopy(e) {
    const copy = e.target.value;
    header.copy = copy;
    this.props.createHeader(header);
  }
  handleColor(e) {
    const color = e.target.value;
    header.color = color;
    this.props.createHeader(header);
  }
  handleSize(e) {
    const size = e.target.value;
    header.size = size;
    this.props.createHeader(header);
  }
  handleFontWeight(e) {
    const fontWeight = e.target.value;
    header.fontWeight = fontWeight;
    this.props.createHeader(header);
  }
  handleAlignment(e) {
    const alignment = e.target.value;
    header.alignment = alignment;
    this.props.createHeader(header);
  }
  render() {
    return (
      <div>
        <p>Headers</p><br />
        <form className="text-left">
          <div>
            <label for={'copy'}>copy</label>
            <input
              id={'copy'}
              placeholder={'copy'}
              value={this.props.header.copy}
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
                <option value="center" defaultValue>Center</option>
                <option value="left">Left</option>
                <option value="right">Right</option>
            </select>
          </div>
        </form>
      </div>
    )
  }
};
