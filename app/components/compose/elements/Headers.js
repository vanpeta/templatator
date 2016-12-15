import React from 'react';

export default class Headers extends React.Component {
  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }
  render() {
    return (
      <div>
        <p>Headers</p><br />
        <input value={this.props.title} onChange={this.handleChange.bind(this)} />
      </div>
    )
  }
};
