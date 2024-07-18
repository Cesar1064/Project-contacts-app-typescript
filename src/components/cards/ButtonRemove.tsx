import closeIcon from '../../assets/images/close.svg';
import '../../assets/styles/components/cards/ButtonRemove.css';
import { useAppDispatch } from '../../hooks/useStore';
import { removeToFavorites } from '../../store/contactList/slice';
interface Props {
  contactId: number;
}
export const ButtonRemove = ({ contactId }: Props) => {
  const dispatch = useAppDispatch();

  const handleRemoveToFavorite = () => {
    dispatch(removeToFavorites(contactId));
  };
  return (
    <button className="button-remove" onClick={handleRemoveToFavorite}>
      <img src={closeIcon} alt="remove" />
      REMOVE
    </button>
  );
};
