import Head from 'next/head';
//Stateless functional component
const Meta = () =>(
    <Head>
        <meta name ="viewport" content="width-device-width,initial-scale=1"/>
        <meta charSet="utf-8"/>
        <link rel="shortcut icon" href="/static/favicon.png"/>
        <link rel="stylesheet" type="text/css"/>
        <title>Hackuva Store!</title>
    </Head>
)

export default Meta;