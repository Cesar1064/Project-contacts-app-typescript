import deleteIcon from '../../assets/images/delete.svg';
import '../../assets/styles/components/cards/ButtonDelete.css';
import { useState } from 'react';
import { Modal } from './Modal';

interface Props {
  contactId: number;
}

export const ButtonDelete = ({ contactId }: Props) => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <button className="button-delete" onClick={openModal}>
        <img src={deleteIcon} alt="delete" />
      </button>
      {showModal ? (
        <Modal contactId={contactId} closeModal={closeModal} action="delete" />
      ) : null}
    </>
  );
};
