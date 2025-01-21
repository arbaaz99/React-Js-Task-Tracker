import Button from "./Button";

const Header = ({ propsTitle, propsOnToggleShowAdd, propsShowAdd }) => {
  return (
    <header className="header">
      <h1>{propsTitle}</h1>
      <Button
        propsColor={propsShowAdd ? "red" : "green"}
        propsText={propsShowAdd ? "Close" : "Add"}
        propsOnClick={propsOnToggleShowAdd}
      />
    </header>
  );
};

//Default props
// Header.defaultProps = {
//   propsTitle: "testing from default props",
// };

//Styling in-line
// const styling = {
//   color: "red",
//   backgroundColor: "wheat",
// };

export default Header;
