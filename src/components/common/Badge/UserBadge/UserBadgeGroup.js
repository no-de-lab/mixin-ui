import React from 'react';
import styled from 'styled-components';
import UserBadge from '.';

export default function UserBadgeGroup() {
  return (
    <S.Wrap>
      <UserBadge grade="white">WHITE</UserBadge>
      <UserBadge grade="green">GREEN</UserBadge>
      <UserBadge grade="blue">BLUE</UserBadge>
      <UserBadge grade="red">RED</UserBadge>
      <UserBadge grade="gold">GOLD</UserBadge>
    </S.Wrap>
  );
}

const S = {};

S.Wrap = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
