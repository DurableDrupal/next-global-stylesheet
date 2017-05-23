import Layout from '../components/layout'
import stylesheet from 'styles/contact.scss'

export default () => (
  <Layout title='Contact us'>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <p>Contact</p>
  </Layout>
)
