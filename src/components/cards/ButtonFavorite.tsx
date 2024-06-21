import favoriteIcon from '../../assets/images/favorite.svg';
import '../../assets/styles/cards/ButtonFavorite.css';

export const ButtonFavorite = () => {
  return (
    <button className="button-favorite">
      <img src={favoriteIcon} alt="favorite" />
    </button>
  );
};
