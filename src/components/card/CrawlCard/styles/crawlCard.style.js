import styled, { css as styledCss } from 'styled-components';
import css from '../../../../utils/style/css';

const S = {};

S.Container = styled.div`
  width: 19.3rem;
  height: 24.563rem;
  background: #141322;
  box-sizing: border-box;
  &:hover {
    outline: solid 1px #aa00ff;
    .toolbar {
      outline: solid 1px #aa00ff;
    }
  }
  & * {
    box-sizing: border-box;
    text-decoration: none;
  }
  ${css.media('mobile')`
    width: 100%;
  `}
`;

S.Body = styled.div`
  padding: 1.25rem;
  height: 20.65rem;
`;

S.Name = styled.div`
  display: flex;
  justify-content: space-around;
  & > div {
    height: 2rem;
    width: 2rem;
  }
`;

S.Text = styled.div`
  height: 2.5rem;
`;
// height: 12.938rem;

S.Title = styled.div`
  height: 3rem;
`;

S.Category = styled.div`
  padding: 0.5rem 0;
  height: 2.5rem;
`;

S.CategoryItem = styled.span`
  height: 1.25rem;
  padding: 0.1875rem 0.375rem;
  margin-right: 0.5rem;
  border-radius: 1px;
  background-color: #212121;
  font-family: NunitoSans;
  font-size: 0.625rem;
  line-height: 1.4;
  letter-spacing: 0.0313rem;
  text-align: center;
  color: #616161;
`;

S.Image = styled.div`
  background-image: ${(props) => props.src && `url(${props.src})`};
  background-position: center;
  background-size: cover;
  background-repeat: none;
  margin-top: 1rem;
  width: 100%;
  ${(props) =>
    !props.content
      ? styledCss`
    height: 11.75rem;`
      : props.src
      ? styledCss`
        height: 9rem;
        `
      : styledCss`
          height: 0px;
        `};
`;
S.Toolbar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 3.875rem;
  padding: 1rem 1.25rem;
  justify-content: space-between;
`;
S.Toolbar.Ref = styled.div`
  display: flex;
  .card_ref_img {
    width: 1.5rem;
    height: 1.5rem;
    background-color: #0f0e1c;
    margin-right: 0.7rem;
  }
  .card_ref_title {
    width: 9rem;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5rem;
    letter-spacing: normal;
    text-align: left;
    color: #434853;
  }
`;

S.Toolbar.Icon = styled.div`
  display: flex;
  justify-content: space-between;
  height: 1.5rem;
  width: 6rem;
  & > img {
    width: 1.5rem;
    height: 1.5rem;
  }
  .comment_wrap:hover .comment {
    fill: #aa00ff;
  }
  .share_wrap:hover g path {
    stroke: #aa00ff;
  }
  .bookmark_wrap:hover .bookmark {
    fill: #aa00ff;
  }
`;
export default S;
