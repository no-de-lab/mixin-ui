import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import S from './styles/developerCard.style';
import Paragraph from '../../common/Paragraph';
import SVGIcon from '../../common/SVGIcon';
import BookmarkIcon from '../../common/SVGIcon/BookmarkIcon';

export default function DeveloperCard({ children, ...props }) {
  return <S.Container {...props}>{children}</S.Container>;
}

DeveloperCard.Body = function DeveloperCardBody({ children, ...props }) {
  return <S.Body {...props}>{children}</S.Body>;
};

DeveloperCard.Name = function DeveloperCardName({
  children,
  developerId,
  ...props
}) {
  return (
    <S.Name {...props}>
      <Paragraph size="medium" color="white">
        {children}
      </Paragraph>
    </S.Name>
  );
};

DeveloperCard.Job = function DeveloperCardJob({ children, ...props }) {
  return (
    <S.Job {...props}>
      <Paragraph size="small" color="gray">
        {children}
      </Paragraph>
    </S.Job>
  );
};

DeveloperCard.Text = function DeveloperCardText({ children, ...props }) {
  return (
    <>
      <S.Text {...props}>{children}</S.Text>
    </>
  );
};

DeveloperCard.Image = function DeveloperCardImage({ data, alt, ...props }) {
  return (
    <>
      {data?.imgUrl ? (
        <S.Image src={data?.imgUrl} {...props} />
      ) : (
        <S.Avatar>
          <SVGIcon name="avatar" />
        </S.Avatar>
      )}
    </>
  );
};

DeveloperCard.Toolbar = function CardToolbar({ socialUrl, onBookmark }) {
  // TODO: 서버에서 해당 url이 bookmark 리스트에 있는지 없는지 확인한 값으로 초기값설정!
  const style = useMemo(() => ({ marginRight: '0.7rem' }));
  return (
    <S.Toolbar>
      <S.Toolbar.Ref>
        <S.Toolbar.Icon>
          {socialUrl.map((url) => (
            <a
              className="social_icon"
              href={url?.url}
              rel="noopener noreferrer"
              target="_blank"
            >
              <SVGIcon
                name={url?.type.toLowerCase()}
                w="24px"
                h="24px"
                style={style}
              />
            </a>
          ))}
        </S.Toolbar.Icon>
      </S.Toolbar.Ref>
      <BookmarkIcon name="bookmark" w="24px" h="24px" onClick={onBookmark} />
    </S.Toolbar>
  );
};

DeveloperCard.Image.defaultProps = {
  data: null,
};

DeveloperCard.propTypes = {
  children: PropTypes.node.isRequired,
};

DeveloperCard.Body.propTypes = {
  children: PropTypes.node.isRequired,
};

DeveloperCard.Name.propTypes = {
  children: PropTypes.node.isRequired,
  isBookmarked: PropTypes.bool.isRequired,
  developerId: PropTypes.number.isRequired,
};

DeveloperCard.Job.propTypes = {
  children: PropTypes.node.isRequired,
};

DeveloperCard.Text.propTypes = {
  children: PropTypes.node.isRequired,
};

DeveloperCard.Image.propTypes = {
  alt: PropTypes.string.isRequired,
  data: PropTypes.object,
};

DeveloperCard.Toolbar.propTypes = {
  socialUrl: PropTypes.array.isRequired,
  onBookmark: PropTypes.func.isRequired,
};
