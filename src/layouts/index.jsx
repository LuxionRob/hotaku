import './style.scss'
import { Layout } from 'antd'
import PropTypes from 'prop-types'
import Navbar from '../components/navbar'

const { Header, Content } = Layout

const DefaultLayout = ({ children }) => {
  return (
    <Layout>
      <Header>
        <Navbar />
      </Header>
      <Content>
        { children }
      </Content>
    </Layout>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired, 
}

export default DefaultLayout