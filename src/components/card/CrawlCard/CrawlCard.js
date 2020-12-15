import React from 'react';
import PropTypes from 'prop-types';
import S from './styles/crawlCard.style';
import Paragraph from '../../common/Paragraph';
import SVGIcon from '../../common/SVGIcon';
import BookmarkIcon from '../../common/SVGIcon/BookmarkIcon';

export default function CrawlCard({ children, ...props }) {
  return <S.Container {...props}>{children}</S.Container>;
}

CrawlCard.Body = function CrawlCardBody({ children, ...props }) {
  return <S.Body {...props}>{children}</S.Body>;
};

CrawlCard.Title = function CrawlCardTitle({ children, ...props }) {
  return (
    <S.Title>
      <Paragraph {...props} line={2} size="large">
        {children}
      </Paragraph>
    </S.Title>
  );
};

CrawlCard.Text = function CrawlCardText({ children, line, ...props }) {
  return (
    <>
      {children && (
        <S.Text>
          <Paragraph size="medium" line={line} color="gray" {...props}>
            {children}
          </Paragraph>
        </S.Text>
      )}
    </>
  );
};

CrawlCard.Image = function CrawlCardImage({
  src,
  alt,
  content,
  type,
  ...props
}) {
  return (
    <>
      {src && (
        <S.Image
          content={content}
          src={src || 'https://source.unsplash.com/random'}
          {...props}
        />
      )}
    </>
  );
};

CrawlCard.Category = function CrawlCardCategory({ category }) {
  return (
    <>
      <S.Category>
        {category?.length > 0 &&
          category?.map((item) => <S.CategoryItem>{item}</S.CategoryItem>)}
      </S.Category>
    </>
  );
};

CrawlCard.Toolbar = function CrawlCardToolbar({
  children,
  url,
  id,
  provider,
  isBookmarked,
  onBookmark,
  onShare,
  onComment,
  ...props
}) {
  // TODO: 서버에서 해당 url이 bookmark 리스트에 있는지 없는지 확인한 값으로 초기값설정!
  return (
    <S.Toolbar className="toolbar" {...props}>
      <S.Toolbar.Ref>
        <img
          className="card_ref_img"
          src={
            provider === 'DEVTO'
              ? `https://dev-to.s3.us-east-2.amazonaws.com/favicon.ico`
              : `https://static.velog.io/favicon.ico`
          }
          alt="ref_img"
        />
        <div className="card_ref_title">
          <a href={url} rel="noopener noreferrer" target="_blank">
            <Paragraph size="medium" color="gray">
              {children}
            </Paragraph>
          </a>
        </div>
      </S.Toolbar.Ref>
      <S.Toolbar.Icon>
        <div className="comment_wrap" onClick={onComment}>
          <SVGIcon name="comment" w="24px" h="24px" />
        </div>
        <div className="share_wrap" onClick={onShare}>
          <SVGIcon name="share" w="24px" h="24px" url={url} />
        </div>
        <BookmarkIcon name="bookmark" w="24px" h="24px" onClick={onBookmark} />
      </S.Toolbar.Icon>
    </S.Toolbar>
  );
};

CrawlCard.Image.defaultProps = {
  src: '',
  content: '',
};

CrawlCard.propTypes = {
  children: PropTypes.node.isRequired,
};

CrawlCard.Body.propTypes = {
  children: PropTypes.node.isRequired,
};

CrawlCard.Title.propTypes = {
  children: PropTypes.node.isRequired,
};

CrawlCard.Text.propTypes = {
  children: PropTypes.node.isRequired,
  line: PropTypes.number.isRequired,
};
CrawlCard.Image.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string,
  content: PropTypes.string,
  type: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

CrawlCard.Category.propTypes = {
  category: PropTypes.array.isRequired,
};

CrawlCard.Toolbar.propTypes = {
  url: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  provider: PropTypes.string.isRequired,
  isBookmarked: PropTypes.bool.isRequired,
  onBookmark: PropTypes.func.isRequired,
  onShare: PropTypes.func.isRequired,
  onComment: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
