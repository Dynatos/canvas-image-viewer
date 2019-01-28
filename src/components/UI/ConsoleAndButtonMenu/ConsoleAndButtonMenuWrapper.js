import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import fetch from 'fetch'; // broke app
import Console from "./Console";
//import ButtonForCanvasActions from "./ButtonForCanvasActions";

// const dummyData = [
//   'first text',
//   'second text',
//   'final text'
// ];

/*
- this.setState({myChildren: myChildren.concat(newShit)})
- render() {
  return <SomeElement>{this.state.myChildren}</SomeElement>
}
 */

export default class ConsoleAndButtonMenuWrapper extends Component {

  // createButtonAction(currentArrayElement, index) {
  //   return function() {
  //     console.log('Button number ', index, ' pressed!', ' text = ', currentArrayElement);
  //   };
  // }
  //
  // renderDummyData(that) {
  //   dummyData.map(function dummyDataCallback(currentArrayElement, index) {
  //     return (
  //       <ButtonForCanvasActions key={'canvas-action-button-' + index}
  //                               handleClick={that.createButtonAction(currentArrayElement, index)}
  //       />
  //     );
  //   });
  // }


  handleUpload(e, pushUploadedImageDataToStateCallback) {
    if (e) e.preventDefault(); // stops page refresh
    const reader = new FileReader(); // required to interpret uploaded image
    const imageInputElement = e.target.querySelector('input[name="upload-image-input"]'); // contains file path
    const filePath = imageInputElement.files[0]; // is the file path
    const dimensions = {};
    const imageDOMObject = new Image();
    reader.addEventListener('load', (event) => {
      const pictureURL = event.target.result;
      imageDOMObject.onload = () => {
        dimensions.width = imageDOMObject.width;
        dimensions.height = imageDOMObject.height;
        pushUploadedImageDataToStateCallback(filePath, imageDOMObject, dimensions, /* childImageBoxCoordinateArray = [] */);
        // pushes the file path to state for reference when drawing the image on the canvas
      };
      imageDOMObject.src = pictureURL;
    });
    reader.readAsDataURL(filePath); // turns URL encoded image into a displayable image
    return false; // stops page refresh
  }

  render() {

    const { pushUploadedImageDataToState,
      //menuImages, currentCanvasImage
    } = this.props;

    return (
      <div className="console-and-button-wrapper">
        <Console />

        <div className="button-for-canvas-action-button-wrapper">

          <form onSubmit={(e) => {
            if (typeof e.target.querySelector('input[name="upload-image-input"]').files[0] === 'undefined') {
              e.preventDefault();
              alert('no image selected');
              return false;
            }
            this.handleUpload(e, pushUploadedImageDataToState);
          }}>
            <input type="file" name="upload-image-input" id="upload-image-input" />
            <input type="submit" id="upload-image-submit" title="Upload" />
          </form>

        </div>

      </div>
    );
  }
}

ConsoleAndButtonMenuWrapper.propTypes = {
  pushUploadedImageDataToState: PropTypes.func.isRequired,
  menuImages: PropTypes.array.isRequired,
  currentCanvasImage: PropTypes.number.isRequired
};
