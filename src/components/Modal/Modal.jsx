import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, Modal } from './Modal.module.jsx';

const ModalRoot = document.querySelector('#ModalRoot');

const ModalComponent = ({ image, onClose }) => {
  useEffect(() => {
    const keyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', keyDown);

    return () => {
      window.removeEventListener('keydown', keyDown);
    };
  }, [onClose]);

  const onOverlayClose = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const { largeImageURL } = image;

  return createPortal(
    <Overlay onClick={onOverlayClose}>
      <Modal>
        <img src={largeImageURL} alt="img" />
      </Modal>
    </Overlay>,
    ModalRoot
  );
};

ModalComponent.propTypes = {
  image: PropTypes.object,
  onClose: PropTypes.func,
};

export default ModalComponent;