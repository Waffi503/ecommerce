import { Container, Grid, Image, Input} from 'semantic-ui-react';
import Link from 'next/link';

export default function TopBar() {
  return (
    <div className='top-bar'>
        <Container>
            <Grid className='top-bar'> 
                <Grid.Column width={8} className='top-bar__left'>
                   <Logo/>
                </Grid.Column>
                <Grid.Column width={8} className='top-bar__right'>
                    <Input icon='search' placeholder='Search...' className='top-bar__search'/>
                </Grid.Column>
            </Grid>
        </Container>
    </div>
  )
}

function Logo(){
    return (
        <Link href='/'>
            <a>
            <Image src='/logo.png' className='top-bar__logo' alt='loogo'/>
            </a>
        </Link>
    )
}