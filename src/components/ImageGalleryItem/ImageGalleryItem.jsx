import Modal from '../Modal';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem, Image } from './ImageGalleryItem.module.jsx';

class MyImageGalleryItem extends Component {
  state = {
    shownModal: false,
  };
  onModal = () => {
    this.setState(({ shownModal }) => ({ shownModal: !shownModal }));
  };
  render() {
    const { item } = this.props;
    const { webformatURL } = item;
    return (
      <ImageGalleryItem>
        <Image
          onClick={this.onModal}
          className="ImageGalleryItem-image"
          src={webformatURL}
          alt="img"
        />
        {this.state.shownModal && <Modal onClose={this.onModal} image={item} />}
      </ImageGalleryItem>
    );
  }
}

MyImageGalleryItem.propTypes = {
  item: PropTypes.object,
};

export default MyImageGalleryItem;
