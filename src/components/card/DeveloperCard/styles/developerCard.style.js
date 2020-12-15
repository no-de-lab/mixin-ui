import styled from 'styled-components';
import css from '../../../../utils/style/css';

const S = {};

S.Container = styled.div`
  width: 23.125rem;
  height: 9.875rem;
  background: #141322;
  &:hover {
    box-shadow: 0 0 30px 0 rgba(223, 120, 239, 0.2);
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
  padding: 1rem 1.25rem;
  height: 6.375rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

S.Text = styled.div`
  width: 17.3125rem;
`;

S.Image = styled.div`
  background-image: ${(props) => props.src && `url(${props.src})`};
  background-size: cover;
  background-position: center;
  background-repeat: none;
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 50px;
`;
S.Avatar = styled.div`
  width: 3.75rem;
  height: 3.75rem;
`;

S.Name = styled.div`
  display: flex;
  justify-content: space-around;
  .bookmark_wrap {
    height: 2rem;
    width: 2rem;
  }
  .bookmark_wrap:hover .bookmark {
    fill: #df78ef;
  }
`;
S.Job = styled.div`
  font-family: SpaceMono;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  margin-bottom: 0.7rem;
  line-height: 1.54;
  letter-spacing: normal;
  text-align: left;
  color: #7d89af;
`;
S.Toolbar = styled.div`
  width: 100%;
  height: 3.5rem;
  display: flex;
  padding: 1rem 1.25rem;
  align-items: center;
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
    width: 11rem;
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
  height: 24px;
  & > img {
    width: 1.5rem;
    height: 1.5rem;
  }
  .social_icon:hover > svg > * {
    fill: #c8cbcb;
  }
  .premium_mark {
    width: 1.5rem;
  }
`;

export default S;
