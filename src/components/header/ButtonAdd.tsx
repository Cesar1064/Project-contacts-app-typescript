import React from 'react';
import Add from '../../assets/images/add.svg';
import '../../assets/styles/components/header/ButtonAdd.css';

interface Props {
  dropdownForm: () => void;
}

export const ButtonAdd: React.FC<Props> = ({ dropdownForm }) => {
  return (
    <button className="button-add-contact" onClick={dropdownForm}>
      <img src={Add} alt="" />
      <span>NEW</span>
    </button>
  );
};
