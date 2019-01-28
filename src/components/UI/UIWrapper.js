import React, { Component } from 'react';
import ImageMenuWrapper from "./ImageMenu/ImageMenuWrapper";
import KonvaCanvasWrapper from "./KonvaCanvasWrapper";
import ConsoleAndButtonMenuWrapper from "./ConsoleAndButtonMenu/ConsoleAndButtonMenuWrapper";

import '../../styles/styles.css'; // webpack allows this to work, may need updating if the final app is not a webpack bundle

export default class UIWrapper extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menuImages: [], // storage place for objects with all information required to render menu image elements
      currentCanvasImage: -1, // default -1 for <Canvas/> component's componentDidMount() call
    };
  }
  
  // used for default state setup for each image when they are uploaded.
  // this function is handed as props and is used as the callback when an image is uploaded
  pushUploadedImageDataToState(filePath, imageDOMObject, dimensions, childImageBoxCoordinateArray = [[20, 20, 80, 80], [50, 50, 150, 150], [320, 320, 480, 620]]) {
    this.setState({
      menuImages: [
        ...this.state.menuImages,
        {
          filePath: filePath, // file system path of uploaded image
          imageDOMObject: imageDOMObject, // <image/> html element with image 'src', for drawing image on canvas
          dimensions: dimensions, // x/y dimensions of image, used for sizing canvas
          isDeleted: false, // used to determine if this element should rendered in menu images
          
          childImageBoxCoordinateArray: Array.isArray(childImageBoxCoordinateArray) ? childImageBoxCoordinateArray : [],
          // refuse non array arguments to prevent potential errors
        }
      ]
    });
  }

  // sets the 'isDeleted' property to true, this property is used in determining which image menu items to render
  deleteImageInMenu(index) {
    let newState = this.state.menuImages;
    newState[index].isDeleted = true;

    this.setState({
      menuImages: [...newState]
    });
  }
  
  // called with the index of the element in the menuImages array that was clicked
  setCurrentCanvasImage(index) {
    this.setState({
      currentCanvasImage: index
    });
  }
  
  pushFetchedImageBoxesToState(index, imageBoxes) {
    if (imageBoxes === [] || !Array.isArray(imageBoxes)) {
      alert("received empty array or non-array in pushFetchedImageBoxesToState");
    }
    let newState = this.state.menuImages; // mutable version of currentState
    newState[index].childImageBoxCoordinateArray = (Array.isArray(imageBoxes)) ? imageBoxes : [];
    // ternary statement above to mitigate errors caused by imageBoxes not being an array
    
    this.setState({
      menuImages: newState
    });
  }

  render() {

    return (
      <div className="user-interface-wrapper" >

        <ImageMenuWrapper menuImages={this.state.menuImages}
                          currentCanvasImage={this.state.currentCanvasImage}
                          setCurrentCanvasImage={this.setCurrentCanvasImage.bind(this)}
                          deleteImageInMenu={this.deleteImageInMenu.bind(this)}
        />

        <KonvaCanvasWrapper currentCanvasImage={this.state.currentCanvasImage}
                            menuImages={this.state.menuImages}
        />

        <ConsoleAndButtonMenuWrapper menuImages={this.state.menuImages}
                                     currentCanvasImage={this.state.currentCanvasImage}
                                     pushUploadedImageDataToState={this.pushUploadedImageDataToState.bind(this)}
                                     pushFetchedImageBoxesToState={this.pushFetchedImageBoxesToState.bind(this)}
        />

      </div>
    );
  }
}
