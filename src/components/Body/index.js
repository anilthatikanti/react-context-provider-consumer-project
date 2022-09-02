// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="Body-bg">
          {showLeftNavbar && (
            <ul className="body-nav">
              <h1 className="bodyHeader">Left Navbar Menu</h1>
              <div className="para-box">
                <li className="body-para">Item 1</li>
                <li className="body-para">Item 2</li>
                <li className="body-para">Item 3</li>
                <li className="body-para">Item 4</li>
              </div>
            </ul>
          )}
          {showContent && (
            <div className="body">
              <h1 className="bodyHeader">Content</h1>
              <p className="body-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. ut
                enim ad minim veniam
              </p>
            </div>
          )}
          {showRightNavbar && (
            <div className="body-nav">
              <h1 className="bodyHeader">Right Navbar</h1>
              <div className="para-box">
                <p className="body-para-box">ad 1</p>
                <p className="body-para-box">ad 2</p>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default Body
