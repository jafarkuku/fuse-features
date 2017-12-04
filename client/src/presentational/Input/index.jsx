import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Input = (props) => {
  const {
    name,
    placeholder,
    inputClasses,
    value,
    type,
  } = props;

  const handleOnChange = e => props.onTextChange(e.target.value);

  return (
    <input
      className={classNames([inputClasses])}
      placeholder={placeholder}
      value={value}
      name={name}
      type={type}
      onChange={handleOnChange}
    />
  );
};

Input.propTypes = {
  onTextChange: PropTypes.function.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  inputClasses: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
};

Input.defaultProps = {
  type: PropTypes.string,
};

export default Input;
