/* eslint-disable react/prop-types */
function Button({ children, onClick }) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}
export default Button;
