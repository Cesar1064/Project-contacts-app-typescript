import closeIcon from '../../assets/images/close.svg';
import { useAppDispatch } from '../../hooks/useStore';

import '../../assets/styles/components/cards/ButtonClose.css';
import { removeToFavorites } from '../../store/contactList/slice';

interface Props {
  contactId: number;
}
export const ButtonClose = ({ contactId }: Props) => {
  const dispatch = useAppDispatch();

  const handleRemoveToFavorite = () => {
    dispatch(removeToFavorites(contactId));
  };
  return (
    <button className="button-close" onClick={handleRemoveToFavorite}>
      <img src={closeIcon} alt="close" />
    </button>
  );
};
