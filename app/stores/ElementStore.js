import { EventEmitter } from 'events';

import dispatcher from "../dispatcher";

class ElementStore extends EventEmitter {
  constructor() {
    super();
    this.elements = [];
  }
  createHeader(header) {
    const id = Date.now()
    this.elements.push({
      saved: header.saved,
      id: id,
      copy: header.copy,
      color: header.color,
      size: header.size,
      fontWeight: header.fontWeight,
      alignment: header.alignment
    });
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
    const id = Date.now()
    this.elements.push({
      saved: image.saved,
      id: id,
      src: image.src
    })
    this.emit("change")
  }

  handleActions(action) {
    switch(action.type) {
      case "CREATE_HEADER": {
        this.createHeader(action.header);
      }
    }
    switch(action.type) {
      case "DELETE_HEADER":{
        this.deleteHeader(action.id)
      }
    }
    switch(action.type) {
      case "CREATE_IMAGE": {
        this.createImage(action.image);
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
