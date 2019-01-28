import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageMenuItem from "./ImageMenuItem";
import ImageMenuItemBoxChild from "./ImageMenuItemBoxChild";

export default class ImageMenuWrapper extends Component {
  
  createImageMenuChildrenBoxes(childBoxCoordinateArray) {
  
    return childBoxCoordinateArray.map((currentArray, index) => {
      return (
        <ImageMenuItemBoxChild coordinateArray={currentArray} key={"image-menu-box-item-" + index} />
      )
    })
    
  }
  
  render() {
    
    const { setCurrentCanvasImage, currentCanvasImage, menuImages, deleteImageInMenu } = this.props;
    
    return (
      <div id="image-menu" className="image-menu-wrapper">
        
        {menuImages.map((currentObject, index) => { // uses the menuImages array, whose value comes from
          // the caller's state, to call a map. The map callback takes each object in menuImages and creates an
          // <ImageInMenu/> component with properties assigned appropriately
          
          if (!currentObject.isDeleted) {
            
            return (
              <ImageMenuItem key={'image-menu-item-number-' + index} index={index}
                             setCurrentCanvasImage={() => { setCurrentCanvasImage(index); }}
                             currentCanvasImage={currentCanvasImage} deleteImageInMenu={deleteImageInMenu}
                             childArray={this.createImageMenuChildrenBoxes(currentObject.childImageBoxCoordinateArray)}
              />
            )
            
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
