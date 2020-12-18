import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SVGIcon from '../../SVGIcon';
import TextInput from '../TextInput';

export default function SearchBar({ onChange, onSearch, value, placeholder }) {
  // 엔터시 submit 막기
  const keyDownEnter = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', keyDownEnter, true);
    return () => {
      document.removeEventListener('keydown', keyDownEnter, true);
    };
  }, []);

  return (
    <>
      <S.Wrap>
        <TextInput
          type="text"
          className="search_input"
          name="search"
          id="search"
          placeholder={placeholder || 'Search'}
          onChange={onChange}
          value={value}
        />
        <S.IconWrap onClick={onSearch}>
          <SVGIcon name="search" w="52px" h="52px" />
        </S.IconWrap>
      </S.Wrap>
    </>
  );
}

SearchBar.defaultProps = {
  placeholder: '',
  value: null,
  onChange: () => {},
  onSearch: () => {},
};

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onSearch: PropTypes.func,
};

const S = {};

S.Wrap = styled.div`
  position: relative;
`;

S.IconWrap = styled.div`
  position: absolute;
  top: 55%;
  right: 1rem;
  transform: translateY(-50%);
`;
