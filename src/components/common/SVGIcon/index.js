import React from 'react';
import PropTypes from 'prop-types';

const getViewBox = (name) => {
  // add new svg icon
  switch (name) {
    case 'white_badge':
      return '0 0 40 16';
    case 'comment':
    case 'share':
    case 'bookmark':
      return '0 0 22 22';
    default:
      return '0 0 24 24';
  }
};

const getPath = (name, props) => {
  const { focused } = props;
  switch (name) {
    case 'white_badge': {
      return (
        <>
          <rect fill="#131313" width="40" height="16" rx="1" />
          <text
            fill="#8e8e8e"
            fontSize="10px"
            fontFamily="BlenderPro-Book, Blender Pro;"
            letterSpacing="0.08em"
            transform="translate(20 11)"
          >
            <tspan x="-17" y="0.8">
              WHITE
            </tspan>
          </text>
        </>
      );
    }
    case 'comment':
      if (focused) {
        return (
          <>
            <path fill="none" d="M0,0H22V22H0Z" />
            <g fill="none" transform="translate(2.5 1)">
              <path stroke="none" d="M-.5,16V2h18V16H2.5l-3,3Z" />
              <path
                stroke="none"
                fill="#585858"
                d="M 0.4996004104614258 16.58599662780762 L 1.792800426483154 15.29303073883057 L 2.085680484771729 15.00020027160645 L 2.499840497970581 15.00020027160645 L 8.766900062561035 15.00020027160645 L 16.49959945678711 15.00020027160645 L 16.49959945678711 2.999800205230713 L 0.4996004104614258 2.999800205230713 L 0.4996004104614258 16.00020027160645 L 0.4996004104614258 16.58599662780762 M -0.5003995895385742 18.99990081787109 L -0.5003995895385742 16.00020027160645 L -0.5003995895385742 1.999800324440002 L 17.49959945678711 1.999800324440002 L 17.49959945678711 16.00020027160645 L 8.766900062561035 16.00020027160645 L 2.499840497970581 16.00020027160645 L -0.5003995895385742 18.99990081787109 Z"
              />
            </g>
          </>
        );
      }
      return (
        <>
          <path fill="none" d="M0,0H22V22H0Z" />
          <g fill="none" transform="translate(2.5 1)">
            <path stroke="none" d="M-.5,16V2h18V16H2.5l-3,3Z" />
            <path
              stroke="none"
              fill="#585858"
              className="comment"
              d="M 0.4996004104614258 16.58599662780762 L 1.792800426483154 15.29303073883057 L 2.085680484771729 15.00020027160645 L 2.499840497970581 15.00020027160645 L 8.766900062561035 15.00020027160645 L 16.49959945678711 15.00020027160645 L 16.49959945678711 2.999800205230713 L 0.4996004104614258 2.999800205230713 L 0.4996004104614258 16.00020027160645 L 0.4996004104614258 16.58599662780762 M -0.5003995895385742 18.99990081787109 L -0.5003995895385742 16.00020027160645 L -0.5003995895385742 1.999800324440002 L 17.49959945678711 1.999800324440002 L 17.49959945678711 16.00020027160645 L 8.766900062561035 16.00020027160645 L 2.499840497970581 16.00020027160645 L -0.5003995895385742 18.99990081787109 Z"
            />
          </g>
        </>
      );
    case 'share':
      if (focused) {
        return (
          <>
            <path id="패스_438" data-name="패스 438" d="M0,0H22V22H0Z" />
            <g transform="translate(-1.221 -1.221)">
              <path
                className="cls-2"
                d="M7.08,0,0,7.08"
                transform="translate(8.46 8.46)"
              />
              <path
                className="cls-3"
                d="M16.95,14.12l2.83-2.83V7.05L16.95,4.22H12.71L9.88,7.05"
              />
              <path
                className="cls-3"
                d="M14.12,16.95l-2.83,2.83H7.05L4.22,16.95V12.71L7.05,9.88"
              />
            </g>
          </>
        );
      }
      return (
        <>
          <path fill="none" d="M0,0H22V22H0Z" />
          <g transform="translate(-1.221 -1.221)">
            <path
              stroke="#585858"
              fill="#fff"
              className="share"
              d="M7.08,0,0,7.08"
              transform="translate(8.46 8.46)"
            />
            <path
              fill="none"
              stroke="#585858"
              className="share"
              strokeMiterlimit="10"
              d="M16.95,14.12l2.83-2.83V7.05L16.95,4.22H12.71L9.88,7.05"
            />
            <path
              fill="none"
              stroke="#585858"
              className="share"
              strokeMiterlimit="10"
              d="M14.12,16.95l-2.83,2.83H7.05L4.22,16.95V12.71L7.05,9.88"
            />
          </g>
        </>
      );
    case 'bookmark':
      if (focused) {
        return (
          <>
            <path fill="none" d="M0,0H22V22H0Z" />
            <g fill="#aa00ff" transform="translate(5 3)">
              <path stroke="none" d="M0,0H12.5V16.5L6.362,10.616,0,16.5Z" />
              <path
                className="bookmark"
                fill="#aa00ff"
                stroke="none"
                d="M 1 1 L 1 14.21286582946777 L 5.682590007781982 9.88169002532959 L 6.373849868774414 9.242300033569336 L 7.053609848022461 9.893909454345703 L 11.5 14.15616798400879 L 11.5 1 L 1 1 M 0 0 L 12.5 0 L 12.5 16.5 L 6.361609935760498 10.61581039428711 L 0 16.5 L 0 0 Z"
              />
            </g>
          </>
        );
      }
      return (
        <>
          <path fill="none" d="M0,0H22V22H0Z" />
          <g fill="none" transform="translate(5 3)">
            <path stroke="none" d="M0,0H12.5V16.5L6.362,10.616,0,16.5Z" />
            <path
              className="bookmark"
              fill="#585858"
              stroke="none"
              d="M 1 1 L 1 14.21286582946777 L 5.682590007781982 9.88169002532959 L 6.373849868774414 9.242300033569336 L 7.053609848022461 9.893909454345703 L 11.5 14.15616798400879 L 11.5 1 L 1 1 M 0 0 L 12.5 0 L 12.5 16.5 L 6.361609935760498 10.61581039428711 L 0 16.5 L 0 0 Z"
            />
          </g>
        </>
      );
    default:
      return <path />;
  }
};

const SVGIcon = ({
  name,
  style,
  fill,
  viewBox,
  w,
  h,
  className,
  onClick,
  focused,
}) => (
  <svg
    width={w}
    style={style}
    height={h}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox || getViewBox(name)}
    xmlnsXlink="http://www.w3.org/1999/xlink"
    onClick={onClick}
  >
    {getPath(name, { fill, focused })}
  </svg>
);

SVGIcon.defaultProps = {
  style: {},
  fill: '#514944',
  viewBox: '',
  w: '100%',
  h: '100%',
  className: '',
  onClick: () => {},
  focused: false,
};

SVGIcon.propTypes = {
  name: PropTypes.string.isRequired,
  style: PropTypes.object,
  fill: PropTypes.string,
  viewBox: PropTypes.string,
  w: PropTypes.string,
  h: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  focused: PropTypes.bool,
};

getPath.defaultProps = {
  focused: false,
  fill: '#514944',
};

getPath.propTypes = {
  focused: PropTypes.bool,
  fill: PropTypes.string,
};

export default SVGIcon;
