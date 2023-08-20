/* eslint-disable react/prop-types */
function Button({ children, onClick }) {
  return (
    <button type="button" className="button" onClick={onClick}>
      {children}
    </button>
  );
}
export default Button;
