import { useState } from 'react';
import closeIcon from '../../assets/images/close.svg';
import '../../assets/styles/components/cards/ButtonRemove.css';
import { Modal } from './Modal';
interface Props {
  contactId: number;
}
export const ButtonRemove = ({ contactId }: Props) => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <button className="button-remove" onClick={openModal}>
        <img src={closeIcon} alt="remove" />
        REMOVE
      </button>
      {showModal ? (
        <Modal contactId={contactId} closeModal={closeModal} action="remove" />
      ) : null}
    </>
  );
};
