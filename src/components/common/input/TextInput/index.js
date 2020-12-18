import React from 'react';
import PropTypes from 'prop-types';
import styled, { css as styledCss } from 'styled-components';
import SVGIcon from '../../SVGIcon';

export default function TextInput({
  placeholder,
  value,
  id,
  icon,
  onChange,
  ...props
}) {
  // 주의 ) id가 value 변수명과 동일해야 됨
  return (
    <>
      <S.TextInput autocomplete="off">
        <S.Input
          type="text"
          autocomplete="off"
          id={id}
          onChange={onChange}
          value={value}
          icon={icon}
          {...props}
        />
        <S.Label htmlFor={id} icon={icon}>
          {icon && (
            <SVGIcon focused={Boolean(value)} name={icon} w="24px" h="24px" />
          )}
          <span>{value > 0 ? '' : placeholder}</span>
        </S.Label>
      </S.TextInput>
    </>
  );
}
TextInput.defaultProps = {
  placeholder: '',
  id: `textfield_input`,
  icon: null,
  value: null,
  onChange: () => {},
};

TextInput.propTypes = {
  placeholder: PropTypes.string,
  id: PropTypes.string,
  icon: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

const S = {};

S.TextInput = styled.form`
  position: relative;
  width: 100%;
  & * {
    box-sizing: border-box;
  }
`;

S.Label = styled.label`
  position: absolute;
  padding: 0.6em 0.5em; /* input 요소의 padding 값 만큼 */
  color: #434853;
  cursor: text;
  transition: color 0.5s ease;
  ${(props) =>
    props.icon
      ? styledCss`
          display: flex;
          align-items: center;
          top: 0;
          left: 0;
        `
      : styledCss`
          top: 0.125rem;
          left: 0;
        `}
  & > span {
    margin-left: 0.75rem;
  }
  & > svg {
    margin-left: 0.5rem;
  }
`;

S.Input = styled.input`
  width: 100%;
  height: 2.8125rem;
  background-color: #0f0e1c;
  line-height: normal; /* line-height 초기화 */
  padding: 0.8em 0.5em; /* 여백 설정 */
  font-family: inherit; /* 폰트 상속 */
  border: 1px solid #a0937e10;
  border-radius: 0; /* iSO 둥근모서리 제거 */
  outline-style: none; /* 포커스시 발생하는 효과 제거를 원한다면 */
  -webkit-appearance: none; /* 브라우저별 기본 스타일링 제거 */
  -moz-appearance: none;
  appearance: none;
  padding-left: ${(props) => (props.icon ? '3.125rem' : '1rem')};
  color: #c8cbcb;
  &:focus + label {
    color: transparent;
  }
`;
