import './Language.css'
function Language() {
  return (
    <div className="language-container">
              <div>
                <p>Spanish - Native</p>
                <progress max="100" value="100" />
              </div>
              <div>
                <p>English - B2</p>
                <progress max="100" value="67" />
              </div>
            </div>
  )
}
export default Language