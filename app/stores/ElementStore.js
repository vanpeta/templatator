import React from 'react';
import { EventEmitter } from 'events';

import dispatcher from "../dispatcher";
import Header from "../components/compose-components/preview-components/Header";
import NewImage from "../components/compose-components/preview-components/Image";

class ElementStore extends EventEmitter {
  constructor() {
    super();
    this.elements = [];
  }
  createHeader(header) {
    var newHeader
    const id = Date.now()
    this.elements.map((element) => {
      newHeader =  <Header key={id} header={header} />
    });
    this.elements.push(newHeader);
    this.emit("change")
  }
  deleteHeader (id) {
    var newLst = this.elements.filter((val) => {
      return val.id != id;
    });
    this.elements = newLst;
    this.emit("change");
  }

  createImage(image) {
    var newImage
    const id = Date.now()
    this.elements.map((element) => {
      newImage = <NewImage key={id} image={image} />
    });
    this.elements.push(newImage);
    this.emit("change")
  }

  handleActions(action) {
    switch(action.type) {
      case "CREATE_HEADER": {
        this.createHeader(action.header);
      }
    }
    switch(action.type) {
      case "CREATE_IMAGE": {
        this.createImage(action.image);
      }
    }
    switch(action.type) {
      case "DELETE_HEADER":{
        this.deleteHeader(action.id)
      }
    }
  }

  getAll() {
    return this.elements;
  }
}

const elementStore = new ElementStore;
dispatcher.register(elementStore.handleActions.bind(elementStore))
//elementStore.on("change", someHandler);

export default elementStore;
