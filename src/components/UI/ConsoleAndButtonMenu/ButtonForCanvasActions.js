import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ButtonForCanvasActions extends Component {
  
  render() {
    
    const { callback, submitPlaceHolderText } = this.props;
    
    return (
      <div className="canvas-action-button">
        <form onSubmit={(e) => {
          if (e) e.preventDefault();
          callback();
          return false;
        }}>
          <input type="submit" placeholder={submitPlaceHolderText || 'Submit'} />
        </form>
      </div>
    );
  }
}

ButtonForCanvasActions.propTypes = {
  callback: PropTypes.func.isRequired,
  submitPlaceHolderText: PropTypes.string,
};
