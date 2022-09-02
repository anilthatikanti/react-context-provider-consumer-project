// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import Header from '../Header'
import Footer from '../Footer'
import Body from '../Body'
import './index.css'

const Layout = () => (
  <div className="layout-bg">
    <Header />
    <Body />
    <Footer />
  </div>
)

export default Layout
