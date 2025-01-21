const Button = ({ propsColor, propsText, propsOnClick }) => {
  return (
    <button
      onClick={propsOnClick}
      style={{ backgroundColor: propsColor }}
      className="btn"
    >
      {propsText}
    </button>
  );
};

export default Button;
