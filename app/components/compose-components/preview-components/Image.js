import React from "react";

export default class Image extends React.Component {

  render() {
    return (
      <tr>
        <td align="center" valing="top">
          <a href="https://www.gbyguess.ca/en/Account/RegisterLoyalty" _label="CONTENT-mainImage">
            <img  width="100%" style={{display: "block"}} src={this.props.image.url} />
          </a>
        </td>
      </tr>
    );
  }
}
