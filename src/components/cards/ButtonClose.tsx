import closeIcon from '../../assets/images/close.svg';
import '../../assets/styles/components/cards/ButtonClose.css';
import { useState } from 'react';
import { Modal } from './Modal';

interface Props {
  contactId: number;
}
export const ButtonClose = ({ contactId }: Props) => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <button className="button-close" onClick={openModal}>
        <img src={closeIcon} alt="close" />
      </button>
      {showModal ? (
        <Modal contactId={contactId} closeModal={closeModal} action="remove" />
      ) : null}
    </>
  );
};
