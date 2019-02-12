import Document, {Head,Main,NextScript} from 'next/document';
import { ServerStyleSheet} from 'styled-components';
import { render } from 'react-dom';
//collects styles to load to server before render
export default class MyDocument extends Document{
    static getInitialProps({renderPage}){
        const sheet = new ServerStyleSheet();
        const page = renderPage(App => props =>
            sheet.collectStyles(<App {...props}/>))
        const styleTags = sheet.getStyleElement()
        return { ...page, styleTags}
    }


render() {
    return(
        <html>
            <Head>
                {this.props.styleTags}
            </Head>
            <body>
                <Main/>
                <NextScript/>
            </body>
        </html>
    )
}
}