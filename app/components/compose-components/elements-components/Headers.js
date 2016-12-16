import React from 'react';

export default class Headers extends React.Component {
  handleChange(e) {
    const copy = e.target.value;
    this.props.createHeader(copy);
  }
  render() {
    return (
      <div>
        <p>Headers</p><br />
        <input
          id={'copy'}
          placeholder={'copy'}
          value={this.props.header.copy}
          onChange={this.handleChange.bind(this)} />
      </div>
    )
  }
};
