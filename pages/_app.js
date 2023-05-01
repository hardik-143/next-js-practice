import Layout from "@/components/Layout";
import store from "@/store/store";
import "@/styles/globals.css";
import { Fragment } from "react";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </Fragment>
  );
}
