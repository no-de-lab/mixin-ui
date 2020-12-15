import PropTypes from 'prop-types';
import React from 'react';
import styled, { css as styledCss } from 'styled-components';
import { badgeColor } from './styles/badgeColor';

export default function UserBadge({ onClick, grade, children }) {
  return (
    <S.Wrap grade={grade} onClick={onClick}>
      {children}
    </S.Wrap>
  );
}

UserBadge.defaultProps = {
  grade: 'white',
  onClick: () => {},
};

UserBadge.propTypes = {
  children: PropTypes.string.isRequired,
  grade: PropTypes.string,
  onClick: PropTypes.func,
};

const S = {};

S.Wrap = styled.div`
  width: 2.5rem;
  height: 1rem;
  background: #131313;
  font-size: 0.625rem;
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) => styledCss`
        ${badgeColor(props.grade)}
    `}
`;
