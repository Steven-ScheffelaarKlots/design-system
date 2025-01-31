import React from "react";
import { useStyles } from "./style";
import PropTypes from "prop-types";

const Button = ({ children, ...props }) => {
  const classes = useStyles();

  return (
    <button className={classes.button} {...props}>
      {props.label || children}
    </button>
  );
};

Button.propTypes = {
  /** Is the button disabled */
  disabled: PropTypes.bool,
  /** Button click function */
  onClick: PropTypes.func,
  /** Button text, can also pass in as children */
  label: PropTypes.string,
};

Button.defaultProps = {
  onClick: undefined,
};

export default Button;
