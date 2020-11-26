import React from 'react';
import PropTypes from 'prop-types';

export const Test = ({ header, body }) => {
    return (
        <div>
            <div>지금 배포한 거입니다.</div>
            <h1>{header}</h1>
            {body}
        </div>
    );
};

Test.defaultProps = {
    header: 'header',
    body: 'body',
};

Test.propTypes = {
    header: PropTypes.string,
    body: PropTypes.string,
};
