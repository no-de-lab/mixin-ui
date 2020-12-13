import React from 'react';
import PropTypes from 'prop-types';
import styled, { css as styledCss } from 'styled-components';
import { paragraphSize } from './styles/paragraphSize';
import { paragraphColor } from './styles/paragraphColor';

export default function Paragraph({ children, size, color, ...props }) {
  return (
    <S.Paragraph {...props} color={color} size={size}>
      {children}
    </S.Paragraph>
  );
}

Paragraph.defaultProps = {
  color: 'white',
  size: 'medium',
  line: 1,
};

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['white', 'gray', 'black']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  line: PropTypes.number,
};

const S = {};

S.Paragraph = styled.p`
  width: 100%;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  font-family: NunitoSans;
  letter-spacing: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  overflow-wrap: break-word;
  word-wrap: break-word;
  display: -webkit-box;
  margin: 0;
  padding: 0;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${(props) => props.line};
  ${(props) => styledCss`
        ${paragraphSize(props.size)}
        ${paragraphColor(props.color)}
    `}
`;
