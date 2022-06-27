import PropTypes from "prop-types";

function Error({ message }) {
  return <div className="error">{message}</div>;
}

Error.propTypes = {
  message: PropTypes.string,
};
Error.defaultProps = {
  message: "An error has ocurred",
};

export default Error;
