import React, { ReactNode } from "react";

type ModalType = ReactNode;

export function useModalStyles() {
  const buttonClose: ModalType = {
    position: 'absolute',
    top: '2rem',
    right: '3rem',
    cursor: 'pointer', 
  }

  const mainModal: ModalType = {
    margin: '6rem 0', 
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
    margin: '1rem 0', 
  } 

  const formOptionStyle: ModalType = {
    margin: '1rem 0', 
  } 

  const footerModalButton: ModalType = {
    margin: '1rem 0', 
  } 

  return { buttonClose, mainModal, heading, heading2, formStyle, formSelectStyle, formOptionStyle, footerModalButton };
}