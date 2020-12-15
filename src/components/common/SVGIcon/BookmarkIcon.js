import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SVGIcon from './index';

export default function BookmarkIcon({ focus, onClick, ...props }) {
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    setFocused(focus);
  }, [focus]);

  const clickBookmark = () => {
    setFocused(!focused);
    if (onClick) {
      onClick();
    }
  };

  return (
    <S.BookmarkIconWrap className="bookmark_wrap">
      <SVGIcon
        name="bookmark"
        focused={focused}
        onClick={clickBookmark}
        w="24px"
        h="24px"
        {...props}
      />
    </S.BookmarkIconWrap>
  );
}

const S = {};

S.BookmarkIconWrap = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;
  &:hover .bookmark {
    fill: #df78ef;
  }
`;

BookmarkIcon.defaultProps = {
  focus: false,
  onClick: () => {},
};

BookmarkIcon.propTypes = {
  focus: PropTypes.bool,
  onClick: PropTypes.func,
};
