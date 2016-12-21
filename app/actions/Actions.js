import dispatcher from "../dispatcher";

export function createHeader(header) {
  dispatcher.dispatch({
    type: "CREATE_HEADER",
    header: header
  });
}

export function deleteHeader (id) {
  dispatcher.dispatch({
    type: "DELETE_HEADER",
    id: id
  });
}

export function createImage(image) {
  dispatcher.dispatch({
    type: "CREATE_IMAGE",
    image: image
  });
}

export function deleteImage (id) {
  dispatcher.dispatch({
    type: "DELETE_IMAGE",
    id: id
  });
}

