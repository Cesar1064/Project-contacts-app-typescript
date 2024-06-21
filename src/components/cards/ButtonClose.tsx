import closeIcon from '../../assets/images/close.svg';
import '../../assets/styles/cards/ButtonClose.css';

export const ButtonClose = () => {
  return (
    <button className="button-close">
      <img src={closeIcon} alt="close" />
    </button>
  );
};
