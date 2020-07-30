import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

import { PrimaryButton } from './Buttons';
import { Illustrations, CloseIcon } from '../assets';

import { typeScale } from '../utils';

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme.formElementBackground};
  color: ${(props) => props.theme.textOnFormElementBackground};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 16px;
  background: ${(props) => props.theme.formElementBackground};
`;

const SignUpHeader = styled.h3`
  font-size: ${typeScale.header3};
`;

const SignUpText = styled.p`
  font-size: ${typeScale.paragraph};
  max-width: 70%;
  text-align: center;
`;

const CloseModalButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  position: absolute;
  right: 40px;
  top: 40px;
  width: 24px;
  height: 24px;
  padding: 0;
`;

export const SignUpModal = ({ showModal, setShowModal }) => {
  const animation = useSpring({
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0)` : `translateY(-200%)`,
  });

  return (
    <animated.div style={animation}>
      <ModalWrapper>
        <img src={Illustrations.SignIn} alt='Sign up for an account!' />
        <SignUpHeader>Sign Up</SignUpHeader>
        <SignUpText>
          Sign up today to get access to all of our content and features!
        </SignUpText>
        <PrimaryButton onClick={() => console.log('You signed up!')}>
          Sign Up
        </PrimaryButton>
        <CloseModalButton
          arial-label='Close Modal'
          onClick={() => setShowModal(false)}
        >
          <CloseIcon />
        </CloseModalButton>
      </ModalWrapper>
    </animated.div>
  );
};
// https://forms.office.com/Pages/ResponsePage.aspx?id=esnHU-FlN0CyoN_1X1f9rKDct9M7NE1JpjYqv2Mp7nNUQU1ZUFdLWFlHVjUwVjZJTUVUQUdFSFZTMS4u
