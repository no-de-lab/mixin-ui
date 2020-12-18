import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css as styledCss } from 'styled-components';
import { createPortal } from 'react-dom';
import css from '../../../utils/style/css';
import { Document } from '../../../utils/constant';

export default function Modal({ visible, setVisible, render, full }) {
  const toggle = useCallback(() => {
    setVisible(!visible);
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

  return visible
    ? createPortal(
        <>
          <S.Overlay />
          <S.Container onClick={toggle}>
            <S.Wrap onClick={noneEvent} full={full}>
              {render}
            </S.Wrap>
          </S.Container>
        </>,
        Document.body,
      )
    : null;
}

Modal.defaultProps = {
  setVisible: () => {},
  render: <div>Render</div>,
  full: false,
};

Modal.propTypes = {
  setVisible: PropTypes.func,
  visible: PropTypes.bool.isRequired,
  render: PropTypes.node,
  full: PropTypes.bool,
};

const S = {};

S.Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: rgba(20, 19, 34, 0.1);
  backdrop-filter: blur(50px);
`;

S.Container = styled.div`
  position: fixed;
  z-index: 1050;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

S.Wrap = styled.div`
  z-index: 1060;
  background: #171819;
  color: white;
  position: absolute;
  border-radius: 3px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 24px 0 rgba(137, 123, 111, 0.25);
  border: solid 1px #413d39;
  background-color: #0f0f10;

  ${(props) =>
    props.full &&
    styledCss`
      width: 100%;
      height: 100%;
   `};

  display: flex;
  justify-content: center;
  align-items: center;
  ${css.media('mobile')`
    width: 100%;
    height: 100%;`}
`;
