import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DeveloperCard from './DeveloperCard';
import UserBadge from '../../common/Badge/UserBadge';

export default function DeveloperCardLayout({ data, onBookmark, onClick }) {
  const { name, SocialUrl, UserOccupation } = data;

  return (
    // home_card, sns_card, profile_card 가 들어 갈 수 있다.
    <DeveloperCard>
      <DeveloperCard.Body onClick={onClick}>
        <DeveloperCard.Text>
          <DeveloperCard.Name>{name || `Name`}</DeveloperCard.Name>
          <DeveloperCard.Job>
            {(UserOccupation?.length > 0 &&
              UserOccupation[0]?.Occupation?.type) ||
              `Job`}
          </DeveloperCard.Job>
          <UserBadge grade="white">White</UserBadge>
        </DeveloperCard.Text>
        <DeveloperCard.Image data={data} alt="card_cover_image" />
      </DeveloperCard.Body>
      <Divider />
      <DeveloperCard.Toolbar
        socialUrl={SocialUrl || []}
        onBookmark={onBookmark}
      />
    </DeveloperCard>
  );
}

DeveloperCardLayout.defaultProps = {
  data: {
    title: 'Title',
    content:
      'Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text',
    hashtag: '#hashtag',
    provider: 'Text',
    url: '/',
    SocialUrl: [
      {
        type: 'BLOG',
        url: '',
      },
      {
        type: 'GITHUB',
        url: '',
      },
      {
        type: 'LINKEDIN',
        url: '',
      },
      {
        type: 'FACEBOOK',
        url: '',
      },
      {
        type: 'TWITTER',
        url: '',
      },
    ],
  },
  onClick: () => {},
  onBookmark: () => {},
};

DeveloperCardLayout.propTypes = {
  data: PropTypes.object,
  onClick: PropTypes.func,
  onBookmark: PropTypes.func,
};

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: #434853;
`;
