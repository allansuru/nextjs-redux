import "../core/styles/global.css";
import Layout from "../core/components/Layout";
import { Provider } from "react-redux";
import store from "../core/store";
import { ToastContainer } from "react-toastify";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <ToastContainer />
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
