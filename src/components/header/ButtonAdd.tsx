import React from 'react';
import Add from '../../assets/images/add.svg';
import '../../assets/styles/components/header/ButtonAdd.css';

interface Props {
  dropdownForm: () => void;
  dropdownMenu: () => void;
}

export const ButtonAdd: React.FC<Props> = ({ dropdownForm, dropdownMenu }) => {
  const dropdownFunction = () => {
    dropdownMenu();
    dropdownForm();
  };

  return (
    <button className="button-add-contact" onClick={dropdownFunction}>
      <img src={Add} alt="" />
      <span>NEW</span>
    </button>
  );
};
