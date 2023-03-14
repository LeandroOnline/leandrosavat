import "./Language.css";
function Language() {
  return (
    <div className="language-container">
      <p className="text">Spanish - Native</p>
      <progress max="100" value="100" />
      <p className="text">English - B2</p>
      <progress max="100" value="67" />
    </div>
  );
}
export default Language;
