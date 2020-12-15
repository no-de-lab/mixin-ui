/**
 * 조건1:
 * 사진체크 없을 떄-> 글자라인 10줄
 *
 * 조건2:
 * 설명이 없을 때, 이미지 최대 사이즈
 * 설명이 있을 때, 글자라인 2줄
 */

import React from 'react';
import PropTypes from 'prop-types';
import CrawlCard from './CrawlCard';

export default function CrawlCardLayout({
  onBookmark,
  onShare,
  onComment,
  data,
}) {
  const {
    isBookmarked,
    provider,
    id,
    url,
    thumbnail,
    title,
    content,
    hashtag,
    author,
  } = data;

  return (
    // home_card, sns_card, profile_card 가 들어 갈 수 있다.
    <CrawlCard>
      <CrawlCard.Body>
        <a href={url} rel="noopener noreferrer" target="_blank">
          <CrawlCard.Title>{title}</CrawlCard.Title>
        </a>
        <CrawlCard.Category
          category={
            data?.hashtag?.length > 0
              ? hashtag.split(',').map((tag) => `#${tag} `)
              : []
          }
        />
        <a href={url} rel="noopener noreferrer" target="_blank">
          <CrawlCard.Text line={thumbnail ? 2 : 10}>
            {content || (!thumbnail && title)}
          </CrawlCard.Text>
          <CrawlCard.Image
            src={thumbnail}
            content={content}
            alt="CrawlCard_cover_image"
            url={url}
          />
        </a>
      </CrawlCard.Body>
      <CrawlCard.Toolbar
        url={url}
        id={id}
        provider={provider}
        isBookmarked={isBookmarked}
        onBookmark={onBookmark}
        onShare={onShare}
        onComment={onComment}
      >
        {author || 'Name'}
      </CrawlCard.Toolbar>
    </CrawlCard>
  );
}

CrawlCardLayout.defaultProps = {
  data: {
    title: 'Title Title Title Title Title Title Title Title Title',
    content:
      'Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text',
    hashtag: 'hashtag, hashtag, hashtag',
    thumbnail: '',
    provider: 'Text',
    url: '/',
  },
  onBookmark: () => {},
  onShare: () => {},
  onComment: () => {},
};

CrawlCardLayout.propTypes = {
  data: PropTypes.object,
  onBookmark: PropTypes.func,
  onShare: PropTypes.func,
  onComment: PropTypes.func,
};
