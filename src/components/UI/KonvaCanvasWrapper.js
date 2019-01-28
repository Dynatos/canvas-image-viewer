import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Konva from 'konva';
import { Stage, Layer, Rect, Text, Image } from 'react-konva';


export default class KonvaCanvasWrapper extends Component {

  render() {

    const { currentCanvasImage, menuImages } = this.props;
    const currentCanvasImageObject = menuImages[currentCanvasImage];

    if (currentCanvasImage !== -1) {
      return (
        <div id="canvas-container" className="canvas-wrapper">
          <Stage width={currentCanvasImageObject.dimensions.width} height={currentCanvasImageObject.dimensions.height} >
            <Layer>
              <Image image={currentCanvasImageObject.imageDOMObject} width={currentCanvasImageObject.dimensions.width}
                     height={currentCanvasImageObject.dimensions.height} x={0} y={0} />
            </Layer>
            <Layer>
              {currentCanvasImageObject.childImageBoxObjects.map((e, i) => {
                return (
                  <Rect
                    key={"menu-image-" + currentCanvasImage + "-box-" + i}
                    x={e[0]}
                    y={e[1]}
                    width={e[2] - e[0]}
                    height={e[3] - e[1]}
                    stroke="red"
                  />
                );
              })}
            </Layer>
          </Stage>
        </div>
      );
    }

    return (
      <div id="canvas-container" className="canvas-wrapper">
        <Stage width={window.innerWidth} height={window.innerHeight} />
      </div>
    );
  }
}

KonvaCanvasWrapper.propTypes = {
  currentCanvasImage: PropTypes.number.isRequired,
  menuImages:PropTypes.array.isRequired
};
