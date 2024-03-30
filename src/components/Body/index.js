// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-container">
          {showLeftNavbar && (
            <div className="left-navbar-container">
              <div className="left-navbar-sub-container">
                <h1 className="heading-style">Left Navbar Menu</h1>
                <ul className="left-navbar-list-container">
                  <li className="left-navbar-list-style">Item 1</li>
                  <li className="left-navbar-list-style">Item 2</li>
                  <li className="left-navbar-list-style">Item 3</li>
                  <li className="left-navbar-list-style">Item 4</li>
                </ul>
              </div>
            </div>
          )}

          {showContent && (
            <div className="middle-container">
              <h1 className="heading-style">Content</h1>
              <p className="middle-description-style">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, set do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim venim.
              </p>
            </div>
          )}

          {showRightNavbar && (
            <div className="right-navbar-container">
              <h1 className="heading-style">Right Navbar</h1>
              <div className="right-navbar-card-container">
                <div className="right-navbar-add-container">
                  <p className="right-navbar-add-content-style">Ad 1</p>
                </div>
                <div className="right-navbar-add-container">
                  <p className="right-navbar-add-content-style">Ad 2</p>
                </div>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
