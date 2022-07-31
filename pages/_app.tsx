import './globals.css';  // Global css file cannot be imported in any file unless it is _app file.
// You can only import in _app.tsx.

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
