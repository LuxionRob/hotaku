import './style.scss'
import { Layout } from 'antd'
import Navbar from '../components/navbar'

const DefaultLayout = () => {
  return (
    <Layout>
      <Header>
        <Navbar />
      </Header>
      <Content>
        
      </Content>
    </Layout>
  )
}

export default DefaultLayout