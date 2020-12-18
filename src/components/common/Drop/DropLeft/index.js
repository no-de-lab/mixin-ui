import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Document } from '../../../../utils/constant';

export default function DropLeft({ render, setVisible, visible }) {
  // Nav바에서 조작 가능하게 하기 위해 toggleFilter props 사용
  const toggle = useCallback(() => {
    setVisible(false);
  }, [visible]);

  const noneEvent = useCallback((e) => e.stopPropagation(), []);

  const escapeKey = (e) => {
    if (e.key === 'Escape') {
      toggle();
    }
  };

  useEffect(() => {
    if (visible) window.addEventListener('keydown', escapeKey);
    else if (!visible) window.removeEventListener('keydown', escapeKey);
    return () => {
      window.removeEventListener('keydown', escapeKey);
    };
  }, [visible]);

  return createPortal(
    <S.Overlay onClick={toggle} visible={visible}>
      <S.Wrap visible={visible} onClick={noneEvent}>
        {render}
      </S.Wrap>
    </S.Overlay>,
    Document.body,
  );
}

DropLeft.defaultProps = {
  render: <div>Render</div>,
  setVisible: () => {},
  visible: false,
};

DropLeft.propTypes = {
  render: PropTypes.node,
  setVisible: PropTypes.func,
  visible: PropTypes.bool,
};

const S = {};

S.Wrap = styled.div`
  overflow: auto;
  padding: 1.25rem;
  position: fixed;
  z-index: 300;
  top: 0;
  width: 28.125rem;
  height: 100%;
  box-shadow: 0 0 18px 0 rgba(200, 203, 203, 0.4);
  background-color: #070714;
  color: #c8cbcb;
  transition: all 0.3s ease-in-out;
  right: ${(props) => (props.visible ? '0rem' : '-32.125rem')};
`;

S.Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: ${(props) => (props.visible ? '100vw' : '0rem')};
  height: 100vh;
`;
