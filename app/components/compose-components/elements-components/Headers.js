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
        </form>
      </div>
    )
  }
};
