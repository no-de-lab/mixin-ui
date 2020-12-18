import React from 'react';
import styled from 'styled-components';
import GoTopButton from '.';

export default function GoTopButtonLayout() {
  return (
    <>
      <S.Wrap>
        <span>스크롤을 아래로 내리세요</span>
        <GoTopButton />
      </S.Wrap>
    </>
  );
}

const S = {};

S.Wrap = styled.div`
  height: 130vh;
  width: 100%;
`;
