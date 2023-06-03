import React from 'react';
import PropTypes from 'prop-types';
import { ImageGallery as StyledImageGallery } from './ImageGallery.module.jsx'; // Змінено назву імпортуваного компонента

import ImageGalleryItem from '../ImageGalleryItem';

function ImageGallery({ items }) {
  return (
    <>
      <StyledImageGallery>
        {' '}
        {items.map(item => (
          <ImageGalleryItem key={item.id} item={item} />
        ))}
      </StyledImageGallery>
    </>
  );
}

export default ImageGallery;

ImageGallery.propTypes = {
  items: PropTypes.array,
};
