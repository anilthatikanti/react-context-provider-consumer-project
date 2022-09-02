// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const toggleContent = () => {
        onToggleShowContent()
      }
      const toggleLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }
      const toggleRightNavbar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="Controller-bg">
          <h1 className="HEADING">Layout</h1>
          <div className="inputContainer">
            <input
              id="showContent"
              type="checkbox"
              className="input"
              checked={showContent}
              onChange={toggleContent}
            />
            <label className="label" htmlFor="showContent">
              Content
            </label>
          </div>
          <br />
          <div className="inputContainer">
            <input
              id="leftNavbar"
              type="checkbox"
              className="input"
              checked={showLeftNavbar}
              onChange={toggleLeftNavbar}
            />
            <label className="label" htmlFor="leftNavbar">
              Left Navbar
            </label>
          </div>
          <br />
          <div className="inputContainer">
            <input
              id="rightNavbar"
              type="checkbox"
              className="input"
              checked={showRightNavbar}
              onChange={toggleRightNavbar}
            />
            <label className="label" htmlFor="rightNavbar">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationController
