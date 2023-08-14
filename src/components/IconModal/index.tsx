import React, { useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import { GlobalContext } from '../../GlobalContext/context';
import styles from './IconModal.module.scss';

interface IconModalProps {
  clicked: boolean;
  setClicked: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  body: string;
}
export const IconModal = (props: IconModalProps) => {
  return (
    <Modal show={props.clicked} onHide={() => props.setClicked(!props.clicked)}>
      <Modal.Header className={styles['modal-header']}>
        <Modal.Title>{props.title}</Modal.Title>
        <Button onClick={() => props.setClicked(!props.clicked)} variant="secondary">
          Close
        </Button>
      </Modal.Header>
      <Modal.Body>{props.body}</Modal.Body>
    </Modal>
  );
};
