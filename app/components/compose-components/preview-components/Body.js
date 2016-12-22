import React from "react";

import ElementStore from "../../../stores/ElementStore";
import Header from "./Header";
import Image from "./Image";
import Element from "./Element";

export default class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    elements: ElementStore.getAll()
    };
  }
  componentWillMount() {
    ElementStore.on('change', () => {
      this.setState({
        elements: ElementStore.getAll(),
      })
    });
  }
  render() {
    const textSaved = this.props.header.saved;
    const textIsSelected = this.props.header.selected;
    const imageSaved = this.props.image.saved;
    const imageIsSelected = this.props.image.selected;
    console.log(this.props.image)
    let currentElement = null;
    if (!imageSaved && imageIsSelected) {
      console.log('inside imagesaved false')
      currentElement = (
        <Image image={this.props.image} />
      )
      console.log(currentElement)
    }
    if (!textSaved && textIsSelected) {
      console.log('inside textsaved false')
      currentElement = (
        <Header header={this.props.header} />
      )
      console.log(currentElement)
    }


    const { elements } = this.state;
    const ElementsComponents = elements.map((element) => {
      return <Header key={element.id} header={element} />
    });

    return (
      <table width="100%" border="0" cellSpacing="0" cellPadding="0">
        <tbody>
          {ElementsComponents}
          {currentElement}
        </tbody>
      </table>
    );
  }
};



