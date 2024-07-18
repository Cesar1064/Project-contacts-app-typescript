import deleteIcon from '../../assets/images/delete.svg';
import { useAppDispatch } from '../../hooks/useStore';
import { deleteContactById } from '../../store/contactList/slice';
import '../../assets/styles/components/cards/ButtonDelete.css';

interface Props {
  contactId: number;
}

export const ButtonDelete = ({ contactId }: Props) => {
  const dispatch = useAppDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContactById(contactId));
  };

  return (
    <button className="button-delete" onClick={handleDeleteContact}>
      <img src={deleteIcon} alt="delete" />
    </button>
  );
};
