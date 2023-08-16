// pages/_app.tsx
import "../core/styles/global.css";
import Layout from "../core/components/Layout";
import { Provider } from "react-redux";
import store from "../core/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
