import React, { useMemo } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Paragraph from '../../common/Paragraph';
import SVGIcon from '../../common/SVGIcon';

export default function UserCard({ data, onNotify, onWrite }) {
  const style = useMemo(() => ({
    marginTop: '0.8rem',
  }));
  return (
    <S.Wrap>
      <SVGIcon name="avatar" w="80px" h="80px" />
      <S.IconWrap style={style}>
        <SVGIcon name="write" w="24px" h="24px" onClick={onWrite} />
        <SVGIcon name="notify" w="24px" h="24px" onClick={onNotify} />
      </S.IconWrap>
      <Paragraph color="white" size="medium" style={style}>
        {data?.name}
      </Paragraph>
      <Paragraph color="gray" size="small" style={style}>
        {data?.email}
      </Paragraph>
    </S.Wrap>
  );
}

UserCard.defaultProps = {
  data: {
    imgUrl: '',
    name: 'NAME',
    email: 'Email@gmail.com',
  },
  onNotify: () => {},
  onWrite: () => {},
};

UserCard.propTypes = {
  data: PropTypes.object,
  onNotify: PropTypes.func,
  onWrite: PropTypes.func,
};

const S = {};

S.Wrap = styled.div`
  background: #191919;
  display: flex;
  height: 22.625rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

S.IconWrap = styled.div`
  display: flex;
  width: 4rem;
  justify-content: space-between;
`;
