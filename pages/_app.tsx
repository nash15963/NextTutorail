import { AppProps } from "next/app";


function MyApp({ Component, pageProps }:AppProps) {
  return (
    <>
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;