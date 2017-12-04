import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Image = (props) => {
  const {
    src,
    alt,
    className,
  } = props;

  return (
    <img
      className={classNames([className])}
      alt={alt}
      src={src}
    />
  );
};

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Image;
