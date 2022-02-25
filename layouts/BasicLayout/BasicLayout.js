import { Container } from 'semantic-ui-react'
import Header from '../../components/Header'

export default function BasicLayout(props) {
    const { children } = props;
  return (
    <div>
        <Container fluid className='basic-layout'>
          <Header/>
          <Container className='content'>
            {children}
          </Container>
        </Container>
    </div>
  )
}
