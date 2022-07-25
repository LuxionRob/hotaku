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
      <Content className='relative flex justify-center'>
        { children }
        <div className='absolute inset-0 bg bg-slate-900 -z-10 h-[2000px]' />
      </Content>
    </Layout>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired, 
}

export default DefaultLayout