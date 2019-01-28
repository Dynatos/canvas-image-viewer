import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageInMenu from "./ImageInMenu";

export default class ImageMenuWrapper extends Component {
  
  render() {
    
    const { setCurrentCanvasImage, currentCanvasImage, menuImages, deleteImageInMenu } = this.props;
    
    return (
      <div id="image-menu" className="image-menu-wrapper">
        
        {menuImages.map((currentObject, index) => { // uses the menuImages array, whose value comes from
          // the caller's state, to call a map. The map callback takes each object in menuImages and creates an
          // <ImageInMenu/> component with properties assigned appropriately
          
          if (!currentObject.isDeleted) {
            return (
              <ImageInMenu key={'image-menu-item-number-' + index} index={index}
                           setCurrentCanvasImage={() => { setCurrentCanvasImage(index); }}
                           currentCanvasImage={currentCanvasImage} deleteImageInMenu={deleteImageInMenu}
              />
            );
          }
        })}
        
      </div>
    );
  }
}

ImageMenuWrapper.propTypes = {
  setCurrentCanvasImage: PropTypes.func.isRequired,
  currentCanvasImage: PropTypes.number.isRequired,
  menuImages: PropTypes.array.isRequired,
  deleteImageInMenu: PropTypes.func.isRequired
};
