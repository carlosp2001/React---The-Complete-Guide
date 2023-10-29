import React from 'react';

import styles from './Button.module.css';

//import styled from "styled-components";
//
//const ButtonStyled = styled.button`
//  width: 100%;
//  font: inherit;
//  padding: 0.5rem 1.5rem;
//  border: 1px solid #8b005d;
//  color: white;
//  background: #8b005d;
//  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//  cursor: pointer;
//
//  @media (min-width: 768px) {
//    width: auto;
//  }
//
//  .button:focus {
//  outline: none;
//  }
//
//.button:hover,
//.button:active {
//  background: #ac0e77;
//  border-color: #ac0e77;
//  box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//}
//
//`
//
//const Button = props => {
//  return (
//    <ButtonStyled type={props.type} onClick={props.onClick}>
//      {props.children}
//    </ButtonStyled>
//  );
//};
//

const Button = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};
export default Button;
