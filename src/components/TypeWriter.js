import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { media } from "../styles/mixins";

const Text = styled.span`
  font-size: 1.5rem;

  ${media.sm`
    font-size: 2rem;
  `}

  ${media.md`
    font-size: 3rem;
  `}
`;

const CONSTANTS = {
  DELETING_SPEED: 30,
  TYPING_SPEED: 150,
};

const TypeWriter = ({ messages, heading }) => {
  const [state, setState] = useState({
    text: "",
    message: "",
    isDeleting: false,
    loopNum: 0,
    typingSpeed: CONSTANTS.TYPING_SPEED,
  });

  useEffect(() => {
    let timer;
    const handleType = () => {
      setState(currentState => ({
        ...currentState,
        text: getCurrentText(currentState),
        typingSpeed: getTypingSpeed(currentState),
      }));
      timer = setTimeout(handleType, state.typingSpeed);
    };
    handleType();
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.isDeleting]);

  useEffect(() => {
    let timer;
    if (!state.isDeleting && state.text === state.message) {
      if (state.loopNum !== messages.length) {
        const changeToDeleting = () => {
          setState(currentState => ({
            ...currentState,
            isDeleting: true,
          }));
        };

        timer = setTimeout(changeToDeleting, 1000); // time to display full message
      }
    } else if (state.isDeleting && state.text === "") {
      const changeToTyping = () => {
        setState(currentState => ({
          ...currentState,
          isDeleting: false,
          loopNum: currentState.loopNum + 1,
          message: getMessage(currentState, messages),
        }));
      };

      timer = setTimeout(changeToTyping, 500); // wait time before starting again
    }

    return () => clearTimeout(timer);
  }, [state.text, state.message, state.isDeleting, messages, state.loopNum]);

  const getCurrentText = currentState =>
    currentState.isDeleting
      ? currentState.message.substring(0, currentState.text.length - 1)
      : currentState.message.substring(0, currentState.text.length + 1);

  const getMessage = (currentState, data) =>
    data[Number(currentState.loopNum) % Number(data.length)];

  const getTypingSpeed = currentState =>
    currentState.isDeleting ? CONSTANTS.TYPING_SPEED : CONSTANTS.DELETING_SPEED;

  return <Text>{state.text}</Text>;
};

export default TypeWriter;
