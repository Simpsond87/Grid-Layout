/**
*
* Grid
*
*/

import React from 'react';

import './style.css';
import './styleM.css';

export default class Grid extends React.PureComponent {

  constructor(){
    super();
    this.state = {
      images: ['road.jpg', 'blue.jpg', 'mist.jpg', 'mountain.jpg', 'purple.jpg', 'railroad.jpg', 'tree.jpg', 'waterfall.jpg']
    }
  }

  render() {
    return (
      <div>
        <div className="grid">
          {this.state.images.map((image, index) => (
          <div className="gridItem" key={index}>
            <img src={require('../../images/'+image)} className="gridImage" />
          </div>
        ))}
        </div>
      </div>
    );
  }
}

Grid.contextTypes = {
  router: React.PropTypes.object
};
