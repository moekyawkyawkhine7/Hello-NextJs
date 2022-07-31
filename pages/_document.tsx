import Document, { Html, Head, Main, NextScript } from "next/document";

export default class CustomDocument extends Document {
    // you can control all of your application of meta tag or any other stuff.
    render() {
        return (
            <Html>
                <Head>
                    <meta property="custom" content="Hello" />
                </Head>
                <body>
                    <Main />
                </body>
                <NextScript />
            </Html>
        )
    }
}