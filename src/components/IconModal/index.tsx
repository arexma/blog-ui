import React, { useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import { GlobalContext } from '../../GlobalContext/context';
import styles from './IconModal.module.scss';

export const IconModal = () => {
  const { profileButton, setProfileButton } = useContext(GlobalContext);

  return (
    <div className="modal show" style={{ display: 'block', position: 'initial' }}>
      <Modal.Dialog>
        <Modal.Header className={styles['modal-header']}>
          <Modal.Title>About Us</Modal.Title>
          <Button onClick={() => setProfileButton!(!profileButton)} variant="secondary">
            Close
          </Button>
        </Modal.Header>
        <Modal.Body>We are not nice people</Modal.Body>
      </Modal.Dialog>
    </div>
  );
};
