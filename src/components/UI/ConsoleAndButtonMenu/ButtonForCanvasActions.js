import React, { Component } from 'react';

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
