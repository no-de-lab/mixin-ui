import React, { useCallback, useEffect, useState } from 'react';
import throttle from 'lodash/throttle';
import styled from 'styled-components';
import { Document } from '../../../../utils/constant';

export default function GoTopButton() {
  const [visible, setVisible] = useState(false);

  const goToTop = useCallback(() => {
    Document.body.scrollTop = 0;
    Document.documentElement.scrollTop = 0;
  });

  const onToggleButton = useCallback(
    throttle(() => {
      const scrollY =
        ((window?.scrollY + window?.innerHeight) / Document.body.clientHeight) *
        100;
      if (scrollY >= 50) {
        if (!visible) setVisible(true);
      } else {
        setVisible(false);
      }
    }, 250),
    [visible],
  );

  useEffect(() => {
    window?.addEventListener('scroll', onToggleButton);

    return () => {
      window?.removeEventListener('scroll', onToggleButton);
    };
  });

  return (
    <>
      <S.Button onClick={goToTop} visible={visible}>
        맨 위로 이동
      </S.Button>
    </>
  );
}

const S = {};

S.Button = styled.button`
  position: fixed;
  bottom: 0;
  right: 0;
  transition: all 0.5s ease-in;
  opacity: ${(props) => (props.visible ? '1' : '0')};
`;
