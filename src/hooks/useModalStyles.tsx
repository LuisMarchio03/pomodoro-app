import React, { ReactNode } from "react";

type ModalType = ReactNode;

export function useModalStyles() {

  const buttonClose: ModalType = {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    cursor: 'pointer', 

    background: 'transparent',
    border: '0',

    fontSize: '2rem',
    color: '#e73939',
  }

  const mainModal: ModalType = {
    margin: '3rem 0', 
    textAlign: 'center',
  } 

  const heading: ModalType = {
    margin: '2rem 0', 
  } 

  const heading2: ModalType = {
    margin: '1rem 0', 
  } 

  const formStyle: ModalType = {
    margin: '1rem 0', 
  } 

  const formSelectStyle: ModalType = {
    width: '200px',
    height: '50px',

    background: '#dddddd',
    border: '0',
    borderRadius: '15px',

    padding: '2%',
  } 

  const footerModal: ModalType = {
    display: 'flex',
    justifyContent: 'center',

    marginTop: '3rem',
  }

  const footerModalButton: ModalType = {
    width: '150px',
    height: '45px',

    border: '0',
    borderRadius: '50px', 

    fontSize: '1rem',
    color: '#ffffff',
    background: '#d84b13',

    cursor: 'pointer',
  } 

  return { buttonClose, mainModal, heading, heading2, formStyle, formSelectStyle, footerModal, footerModalButton };
}