import App, {Container} from 'next/app';
import Page from '../components/Page';
import {ApolloProvider} from 'react-apollo';
import withData from './lib/withData'; //createClient we made
//next js automatically wraps your shit in <App>.
//This is a customized App extending App  from next/app
//

class MyApp extends App {
static async getInitialProps({Component, ctx}){ 
    //next js lifecycle -> runs before render
    let pageProps = {};
    if(Component.getInitialProps){ //if has props
        pageProps = await Component.getInitialProps(ctx);
    }
    //exposes the query to user
    pageProps.query=ctx.query;
    return pageProps;
}

    render(){
            //if you include apollo below you can remove this.props
        const { Component ,pageProps} = this.props;
            //Component will be the page that is being rendered
        return(
            <Container>
                <ApolloProvider client={this.props.apollo}>
                    <Page>
                    <Component {...pageProps}/>
                    </Page>
                </ApolloProvider>

            </Container>
        )
    }
}

export default withData(MyApp); //make apollo client accesible via this.props
