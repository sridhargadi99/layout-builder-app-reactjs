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

      const onChangeContent = () => onToggleShowContent()

      const onChangeLeftNavbar = () => onToggleShowLeftNavbar()

      const onChangeRightNavbar = () => onToggleShowRightNavbar()

      return (
        <nav className="nav-container">
          <h1 className="nav-heading-style">Layout</h1>
          <ul className="nav-list-container">
            <li className="nav-list-style">
              <input
                id="contentId"
                type="checkbox"
                className="input-style"
                checked={showContent}
                onChange={onChangeContent}
              />
              <label htmlFor="contentId" className="label-style">
                Content
              </label>
            </li>
            <li className="nav-list-style">
              <input
                id="leftNavbarId"
                type="checkbox"
                className="input-style"
                checked={showLeftNavbar}
                onChange={onChangeLeftNavbar}
              />
              <label htmlFor="leftNavbarId" className="label-style">
                Left Navbar
              </label>
            </li>
            <li className="nav-list-style">
              <input
                id="rightNavbarId"
                type="checkbox"
                className="input-style"
                checked={showRightNavbar}
                onChange={onChangeRightNavbar}
              />
              <label htmlFor="rightNavbarId" className="label-style">
                Right Navbar
              </label>
            </li>
          </ul>
        </nav>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
