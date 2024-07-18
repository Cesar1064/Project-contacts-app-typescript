import favoriteIcon from '../../assets/images/favorite.svg';
import { useAppDispatch } from '../../hooks/useStore';
import '../../assets/styles/components/cards/ButtonFavorite.css';
import { addToFavorites } from '../../store/contactList/slice';

interface Props {
  contactId: number;
}

export const ButtonFavorite = ({ contactId }: Props) => {
  const dispatch = useAppDispatch();
  const handleFavoriteContact = () => {
    console.log({ contactId });

    dispatch(addToFavorites(contactId));
  };
  return (
    <button className="button-favorite" onClick={handleFavoriteContact}>
      <img src={favoriteIcon} alt="favorite" />
    </button>
  );
};
