import "../styles/globals.scss";
import Layout from "../comps/Layout/Layout"
import { StylesProvider } from "@material-ui/core/styles";
import  { AuthProvider } from "../comps/context/AuthContext";
// import App from 'next/app'

function MyApp({ Component, pageProps }) {
return(
<AuthProvider>
<StylesProvider injectFirst>
<Layout>
	<Component {...pageProps} />
	</Layout>
</StylesProvider>
</AuthProvider>	
)
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp