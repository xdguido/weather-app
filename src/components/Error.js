import PropTypes from "prop-types";

function Error({ message }) {
  return <div>{message}</div>;
}

Error.propTypes = {
  message: PropTypes.string,
};
Error.defaultProps = {
  message: "An error has ocurred",
};

export default Error;
