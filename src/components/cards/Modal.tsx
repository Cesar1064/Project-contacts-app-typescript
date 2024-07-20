import '../../assets/styles/components/cards/Modal.css';
import { useAppDispatch } from '../../hooks/useStore';
import {
  deleteContactById,
  removeToFavorites,
} from '../../store/contactList/slice';
interface Props {
  contactId: number;
  closeModal: () => void;
  action: string;
}
export const Modal = ({ contactId, closeModal, action }: Props) => {
  const dispatch = useAppDispatch();

  const handleRemoveToFavorite = () => {
    dispatch(removeToFavorites(contactId));
  };
  const handleDeleteContact = () => {
    dispatch(deleteContactById(contactId));
  };
  return (
    <div className="modal-overlay">
      <button className="close-button" onClick={closeModal}>
        X
      </button>
      <div className="modal">
        {action === 'remove' ? (
          <>
            <span className="modal-message">
              Are you sure you want to remove this contact to favorites?
            </span>
            <div className="modal-buttons">
              <button
                className="modal-button confirm-button"
                onClick={handleRemoveToFavorite}
              >
                Yes
              </button>
              <button
                className="modal-button cancel-button"
                onClick={closeModal}
              >
                No
              </button>
            </div>
          </>
        ) : null}
        {action === 'delete' ? (
          <>
            <span className="modal-message">
              Are you sure you want to delete this contact?
            </span>
            <div className="modal-buttons">
              <button
                className="modal-button confirm-button"
                onClick={handleDeleteContact}
              >
                Yes
              </button>
              <button
                className="modal-button cancel-button"
                onClick={closeModal}
              >
                No
              </button>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};
