import App, {Container} from 'next/app';
import Page from '../components/Page';
//next js automatically wraps your shit in <App>.
//This is a customized App extending App from next/app
//

class MyApp extends App {
    render(){

        const { Component  }= this.props;
            //Component will be the page that is being rendered
        return(
            <Container>
                <Page>

                <Component/>
                </Page>

            </Container>
        )
    }
}

export default MyApp;
