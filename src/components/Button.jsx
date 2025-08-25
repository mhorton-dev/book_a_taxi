import PropTypes from "prop-types";

export default function Button({ label, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700"
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
};
