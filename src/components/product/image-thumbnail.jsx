import React, { Component } from 'react';

import URLSanitizer from '../../services/url-sanitizer';

class ProductImageThumb extends Component {

  render() {
    let imageUrl = URLSanitizer.makeAbsolute(this.props.imageUrl);

    return (
      <div className="col-sm-4 col-xs-4 thumbnail product-image-thumbnail">
        <span className="product-thumbnail-holder">
          <img className="product-preview-image product-thumbs"
               alt={'productName'}
               src={ imageUrl }
               onMouseOver={()=> this.props.onMouseOverThumbnail(this.props.imageNo)}
               onMouseOut={this.props.onMouseOutThumbnail}
               onClick={()=> this.props.onClickThumbnail(this.props.imageNo)}>
          </img>
        </span>
      </div>
    );
  };
};

export default ProductImageThumb;
