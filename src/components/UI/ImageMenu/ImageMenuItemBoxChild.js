import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ImageMenuItemBoxChild extends Component {
  
  render() {
    
    const { coordinateArray } = this.props;
    
    return (
      <div className="menu-image-box-child">
        Child box top left coordinate: {coordinateArray[0]}
        <br/>
        Width: {coordinateArray[2] - coordinateArray[0]}
        <br/>
        Height: {coordinateArray[3] - coordinateArray[1]}
      </div>
    );
  }
}

ImageMenuItemBoxChild.propTypes = {
  coordinateObject: PropTypes.array.isRequired
};
