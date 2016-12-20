import { EventEmitter } from 'events';

import dispatcher from "../dispatcher";

class ElementStore extends EventEmitter {
  constructor() {
    super();
    this.elements = [
      {
        id: '123',
        copy: 'from the store',
        color: "#000000",
        size: 30,
        fontWeight: "bold",
        aligment: "center"
      },
      {
        id: '113',
        copy: 'from the store 2',
        color: "#ff0000",
        size: 30,
        fontWeight: "bold",
        aligment: "center"
      }
    ];
  }
    createHeader(header) {
      console.log(header);
      const id = Date.now()
      this.elements.push({
        id: id,
        copy: header.copy,
        color: header.color,
        size: header.size,
        fontWeight: header.fontWeight,
        alignment: header.alignment
      });
      this.emit("change")
  }

  handleActions(action) {
    switch(action.type) {
      case "CREATE_HEADER": {
        this.createHeader(action.header);
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
