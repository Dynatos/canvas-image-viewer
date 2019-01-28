import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ImageMenuItem extends Component {
  
  render() {
    
    const { setCurrentCanvasImage, currentCanvasImage, index, deleteImageInMenu, childArray } = this.props;
    
    return (
      <div className={(currentCanvasImage === index ? "menu-image--active" : "menu-image")}>
        {//sets the className with --active suffix if the state reflects that it is currently visible on the canvas
        }
        
        <input type="image" src={require("../images/x.png")} onClick={() => {
          deleteImageInMenu(index);
        }}
               className={(currentCanvasImage === index ? "menu-image-delete-icon--active":"menu-image-delete-icon")}
        /* sets the className with --active suffix if the state reflects that it is currently visible on the canvas */
        />
        
        <input className="menu-image-submit" type="button" value="Render image"
               onClick={() => {
                 setCurrentCanvasImage(); // calls back to the parent to draw the correct image on the canvas
               }}
        />
        
        {childArray}
        
      </div>
    );
  }
}

ImageMenuItem.propTypes = {
  setCurrentCanvasImage: PropTypes.func.isRequired,
  currentCanvasImage: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  deleteImageInMenu: PropTypes.func.isRequired,
  childArray: PropTypes.array.isRequired,
};
