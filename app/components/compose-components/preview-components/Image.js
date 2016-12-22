import React from "react";

import * as imageActions from "../../../actions/Actions";

export default class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isHovered: false};
  }
  deleteImage(id) {
    imageActions.deleteHeader(id)
  }
  editImage (id) {
    imageActions.editHeader (id)
  }
  handleMouseEnter() {
    this.setState({isHovered: true});
  }
  handleMouseLeave() {
    this.setState({isHovered: false});
  }
  render() {
    return (
      <tr>
        <td align="center" valing="top">
          <img  width="100%" style={{display: 'block'}} src={this.props.image.src} alt={this.props.image.alt} />
        </td>
      </tr>
    );
  }
}
