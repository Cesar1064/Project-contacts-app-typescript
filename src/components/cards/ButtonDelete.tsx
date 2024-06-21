import deleteIcon from '../../assets/images/delete.svg';
import '../../assets/styles/cards/ButtonDelete.css';

export const ButtonDelete = () => {
  return (
    <button className="button-delete">
      <img src={deleteIcon} alt="delete" />
    </button>
  );
};
