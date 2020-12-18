import React from 'react';
import PropTypes from 'prop-types';

const getViewBox = (name) => {
  // add new svg icon
  switch (name) {
    case 'comment':
    case 'share':
    case 'bookmark':
      return '0 0 22 22';
    case 'linkedin':
    case 'twitter':
    case 'blog':
    case 'facebook':
    case 'write':
    case 'notify':
      return '0 0 24 24';
    case 'github':
      return '0 0 40 40';
    case 'search':
      return '0 0 52 52';
    case 'avatar':
      return '0 0 60 60';
    default:
      return '0 0 24 24';
  }
};

const getPath = (name, props) => {
  const { focused } = props;
  switch (name) {
    case 'search':
      return (
        <>
          <path fill="none" d="M0,0H52V52H0Z" />
          <g transform="translate(4.918 21.984) rotate(-45)">
            <path
              fill="#fff"
              stroke="#dcdcdc"
              d="M0,0V12.834"
              transform="translate(12.834 25.666)"
            />
            <path
              stroke="#dcdcdc"
              strokeMiterlimit="10"
              fill="none"
              d="M7.514,0,0,7.514v10.64l7.514,7.514h10.64l7.514-7.514V7.514L18.154,0Z"
            />
          </g>
        </>
      );
    case 'notify':
      return (
        <>
          <path fill="none" d="M0,0H24V24H0Z" />
          <g transform="translate(19435 21294)">
            <g
              strokeMiterlimit="10"
              fill="none"
              transform="translate(-19431 -21291)"
            >
              <path stroke="none" d="M11.107.5H4.893L.5,4.41V15.5h15V4.41Z" />
              <path
                fill="#dcdcdc"
                stroke="none"
                d="M 5.273745536804199 1.5 L 1.499600410461426 4.858362197875977 L 1.499600410461426 14.5 L 14.49960136413574 14.5 L 14.49960136413574 4.858318328857422 L 10.72609710693359 1.5 L 5.273745536804199 1.5 M 4.893240928649902 0.5 L 11.10665130615234 0.5 L 15.49960136413574 4.409609794616699 L 15.49960136413574 15.5 L 0.4996004104614258 15.5 L 0.4996004104614258 4.409609794616699 L 4.893240928649902 0.5 Z"
              />
            </g>
            <path
              stroke="#dcdcdc"
              fill="none"
              d="M-19428.008-21272.6h18"
              transform="translate(-3.994 -0.402)"
            />
            <path
              stroke="#dcdcdc"
              fill="none"
              d="M-19422-21287.594v-2"
              transform="translate(-1 -2.906)"
            />
            <path
              stroke="#dcdcdc"
              fill="none"
              d="M-19423.486-21284.619l-1.584,1.563v4.061"
              transform="translate(-1.93 -1.881)"
            />
          </g>
        </>
      );
    case 'write':
      return (
        <>
          <path fill="none" d="M12,0A12,12,0,1,1,0,12,12,12,0,0,1,12,0Z" />
          <path
            fill="#dcdcdc"
            stroke="#dcdcdc"
            strokeMiterlimit="10"
            d="M14.642.5H6.358L.5,6.358v8.285L6.358,20.5h8.285L20.5,14.643V6.358Z"
            transform="translate(1.5 1.5)"
          />
          <g transform="translate(-1268.914 28775.346) rotate(45)">
            <g fill="none" transform="translate(-19437 -21246)">
              <path d="M0,0H10V3H0Z" />
              <path
                stroke="none"
                fill="#191919"
                d="M 1 1 L 1 2 L 9 2 L 9 1 L 1 1 M 0 0 L 10 0 L 10 3 L 0 3 L 0 0 Z"
              />
            </g>
            <path
              fill="#191919"
              stroke="none"
              d="M1.5,0,3,3H0Z"
              transform="translate(-19440 -21243) rotate(-90)"
            />
          </g>
        </>
      );
    case 'avatar':
      return (
        <>
          <path fill="#131313" d="M30,0A30,30,0,1,1,0,30,30,30,0,0,1,30,0Z" />
          <g transform="translate(14.871 12.348)">
            <path
              fill="none"
              stroke="#2f2f2f"
              strokeMiterlimit="10"
              strokeWidth="0.75px"
              d="M24.13,15.692V9.438L19.692,5H13.438L9,9.438v6.254l4.438,4.438h6.254Z"
              transform="translate(-1.435 -5)"
            />
            <path
              fill="none"
              stroke="#2f2f2f"
              strokeMiterlimit="10"
              strokeWidth="0.75px"
              d="M6,26.608V16.522L11.043,14"
              transform="translate(-6 8.695)"
            />
            <path
              fill="none"
              stroke="#2f2f2f"
              strokeMiterlimit="10"
              strokeWidth="0.75px"
              d="M21.043,26.608V16.522L16,14"
              transform="translate(9.217 8.695)"
            />
          </g>
        </>
      );
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
            <g fill="#none" transform="translate(5 3)">
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
    case 'github':
      if (focused) {
        return (
          <path
            {...props}
            fill="#c8cbcb"
            d="M20,0A20.148,20.148,0,0,0,0,20.305,20.253,20.253,0,0,0,15.151,40a2.78,2.78,0,0,1-.15-.964V35.583H12.5A3.4,3.4,0,0,1,9.35,33.857c-.65-1.218-.751-3.1-2.4-4.265-.5-.406-.1-.812.449-.762a5.254,5.254,0,0,1,2.7,2.081,2.542,2.542,0,0,0,2.65,1.32,19.863,19.863,0,0,0,2.8-.2,6.273,6.273,0,0,1,2.65-3.3C11.5,27.915,8.3,24.565,8.3,20a8.446,8.446,0,0,1,2.25-5.483c-.449-1.574-1.05-4.823.2-6.092A7.062,7.062,0,0,1,16,10.908a15.188,15.188,0,0,1,4.849-.812,14.95,14.95,0,0,1,4.849.812,7.06,7.06,0,0,1,5.249-2.487c1.2,1.218.65,4.517.15,6.092A8.287,8.287,0,0,1,33.3,20c0,4.569-3.151,7.92-9.8,8.63,1.85.964,3.151,3.705,3.151,5.736v4.624c0,.152-.049.3-.049.456A20.206,20.206,0,0,0,40,20.305,20.148,20.148,0,0,0,20,0Z"
          />
        );
      }
      return (
        <path
          {...props}
          fill="#434853"
          d="M20,0A20.148,20.148,0,0,0,0,20.305,20.253,20.253,0,0,0,15.151,40a2.78,2.78,0,0,1-.15-.964V35.583H12.5A3.4,3.4,0,0,1,9.35,33.857c-.65-1.218-.751-3.1-2.4-4.265-.5-.406-.1-.812.449-.762a5.254,5.254,0,0,1,2.7,2.081,2.542,2.542,0,0,0,2.65,1.32,19.863,19.863,0,0,0,2.8-.2,6.273,6.273,0,0,1,2.65-3.3C11.5,27.915,8.3,24.565,8.3,20a8.446,8.446,0,0,1,2.25-5.483c-.449-1.574-1.05-4.823.2-6.092A7.062,7.062,0,0,1,16,10.908a15.188,15.188,0,0,1,4.849-.812,14.95,14.95,0,0,1,4.849.812,7.06,7.06,0,0,1,5.249-2.487c1.2,1.218.65,4.517.15,6.092A8.287,8.287,0,0,1,33.3,20c0,4.569-3.151,7.92-9.8,8.63,1.85.964,3.151,3.705,3.151,5.736v4.624c0,.152-.049.3-.049.456A20.206,20.206,0,0,0,40,20.305,20.148,20.148,0,0,0,20,0Z"
        />
      );
    case 'linkedin':
      if (focused) {
        return (
          <path
            {...props}
            fill="#c8cbcb"
            d="M19.025,7.025a12,12,0,1,0,12,12A12,12,0,0,0,19.025,7.025Zm-3.2,17.8H13.189V16.314h2.635ZM14.493,15.2a1.571,1.571,0,1,1,1.558-1.571A1.564,1.564,0,0,1,14.493,15.2Zm11.2,9.627H23.075V20.358c0-1.225-.465-1.91-1.435-1.91-1.055,0-1.606.712-1.606,1.91v4.468H17.508V16.314h2.527v1.146A2.969,2.969,0,0,1,22.6,16.055c1.8,0,3.1,1.1,3.1,3.382v5.39Z"
            transform="translate(-7.025 -7.025)"
          />
        );
      }
      return (
        <path
          {...props}
          fill="#434853"
          d="M19.025,7.025a12,12,0,1,0,12,12A12,12,0,0,0,19.025,7.025Zm-3.2,17.8H13.189V16.314h2.635ZM14.493,15.2a1.571,1.571,0,1,1,1.558-1.571A1.564,1.564,0,0,1,14.493,15.2Zm11.2,9.627H23.075V20.358c0-1.225-.465-1.91-1.435-1.91-1.055,0-1.606.712-1.606,1.91v4.468H17.508V16.314h2.527v1.146A2.969,2.969,0,0,1,22.6,16.055c1.8,0,3.1,1.1,3.1,3.382v5.39Z"
          transform="translate(-7.025 -7.025)"
        />
      );
    case 'twitter':
      if (focused) {
        return (
          <path
            {...props}
            fill="#c8cbcb"
            d="M12,24A12,12,0,0,1,3.515,3.515a12,12,0,0,1,16.97,16.97A11.921,11.921,0,0,1,12,24ZM4.2,17.155h0a9.015,9.015,0,0,0,4.869,1.426,8.66,8.66,0,0,0,6.711-2.945,9.348,9.348,0,0,0,2.328-6.092c0-.146,0-.281-.009-.411a6.438,6.438,0,0,0,1.587-1.646,6.394,6.394,0,0,1-1.824.5,3.181,3.181,0,0,0,1.4-1.758A6.338,6.338,0,0,1,17.24,7a3.18,3.18,0,0,0-5.413,2.9A9.046,9.046,0,0,1,5.279,6.581a3.18,3.18,0,0,0,.983,4.241,3.179,3.179,0,0,1-1.439-.4v.041A3.183,3.183,0,0,0,7.37,13.578a3.135,3.135,0,0,1-.837.112,3.2,3.2,0,0,1-.6-.056A3.176,3.176,0,0,0,8.9,15.84,6.336,6.336,0,0,1,4.957,17.2,6.408,6.408,0,0,1,4.2,17.155Z"
          />
        );
      }
      return (
        <path
          {...props}
          fill="#434853"
          d="M12,24A12,12,0,0,1,3.515,3.515a12,12,0,0,1,16.97,16.97A11.921,11.921,0,0,1,12,24ZM4.2,17.155h0a9.015,9.015,0,0,0,4.869,1.426,8.66,8.66,0,0,0,6.711-2.945,9.348,9.348,0,0,0,2.328-6.092c0-.146,0-.281-.009-.411a6.438,6.438,0,0,0,1.587-1.646,6.394,6.394,0,0,1-1.824.5,3.181,3.181,0,0,0,1.4-1.758A6.338,6.338,0,0,1,17.24,7a3.18,3.18,0,0,0-5.413,2.9A9.046,9.046,0,0,1,5.279,6.581a3.18,3.18,0,0,0,.983,4.241,3.179,3.179,0,0,1-1.439-.4v.041A3.183,3.183,0,0,0,7.37,13.578a3.135,3.135,0,0,1-.837.112,3.2,3.2,0,0,1-.6-.056A3.176,3.176,0,0,0,8.9,15.84,6.336,6.336,0,0,1,4.957,17.2,6.408,6.408,0,0,1,4.2,17.155Z"
        />
      );
    case 'blog':
      if (focused) {
        return (
          <path
            {...props}
            fill="#c8cbcb"
            d="M12,24a12.006,12.006,0,1,1,8.486-3.516A11.91,11.91,0,0,1,12,24ZM10.336,13.668h3.332V17.83a.835.835,0,0,0,.832.836H17a.835.835,0,0,0,.832-.836V12h1.416a.418.418,0,0,0,.395-.271.4.4,0,0,0-.119-.453L12.561,5A.837.837,0,0,0,12,4.787.824.824,0,0,0,11.443,5L4.475,11.273A.415.415,0,0,0,4.75,12H6.166V17.83A.835.835,0,0,0,7,18.666H9.5a.837.837,0,0,0,.838-.836V13.668Z"
          />
        );
      }
      return (
        <path
          {...props}
          fill="#434853"
          d="M12,24a12.006,12.006,0,1,1,8.486-3.516A11.91,11.91,0,0,1,12,24ZM10.336,13.668h3.332V17.83a.835.835,0,0,0,.832.836H17a.835.835,0,0,0,.832-.836V12h1.416a.418.418,0,0,0,.395-.271.4.4,0,0,0-.119-.453L12.561,5A.837.837,0,0,0,12,4.787.824.824,0,0,0,11.443,5L4.475,11.273A.415.415,0,0,0,4.75,12H6.166V17.83A.835.835,0,0,0,7,18.666H9.5a.837.837,0,0,0,.838-.836V13.668Z"
        />
      );
    case 'facebook':
      if (focused) {
        return (
          <path
            {...props}
            fill="#c8cbcb"
            d="M12,24A12,12,0,0,1,3.515,3.515,12,12,0,1,1,20.485,20.485,11.922,11.922,0,0,1,12,24ZM7.566,9.218v2.923H9.461v8.418h3.48V12.086h2.3l.208-2.877H12.882c0-.017.005-1.3,0-1.651a.86.86,0,0,1,.96-.858h1.6V3.812H12.758C11.75,3.812,9.4,4.1,9.4,6.782c0,.528,0,1.038,0,1.578,0,.279,0,.563,0,.857Z"
          />
        );
      }
      return (
        <path
          {...props}
          fill="#434853"
          d="M12,24A12,12,0,0,1,3.515,3.515,12,12,0,1,1,20.485,20.485,11.922,11.922,0,0,1,12,24ZM7.566,9.218v2.923H9.461v8.418h3.48V12.086h2.3l.208-2.877H12.882c0-.017.005-1.3,0-1.651a.86.86,0,0,1,.96-.858h1.6V3.812H12.758C11.75,3.812,9.4,4.1,9.4,6.782c0,.528,0,1.038,0,1.578,0,.279,0,.563,0,.857Z"
        />
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
