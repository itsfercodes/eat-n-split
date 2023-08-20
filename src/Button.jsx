/* eslint-disable react/prop-types */
function Button({ children }) {
  return (
    <button type="button" className="button">
      {children}
    </button>
  );
}
export default Button;
