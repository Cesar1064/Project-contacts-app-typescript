import closeIcon from '../../assets/images/close.svg';
import '../../assets/styles/cards/ButtonRemove.css';

export const ButtonRemove = () => {
  return (
    <button className="button-remove">
      <img src={closeIcon} alt="remove" />
      REMOVE
    </button>
  );
};
