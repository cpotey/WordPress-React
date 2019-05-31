import React from 'react';
import App, { Container } from 'next/app';
import Router from "next/router";
import NProgress from "nprogress";
import Layout from '../components/Layout.js'

import axios from 'axios';

    // display a loader a the top of our page
    Router.onRouteChangeStart = url => {
        NProgress.start();
    };
    Router.onRouteChangeComplete = () => NProgress.done();
    Router.onRouteChangeError = () => NProgress.done();

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    const siteData = await axios.get(`https://blog.connorpote.co.uk/wp-json`)

    return { pageProps,siteData: siteData.data.name };
    // console.log(this)
  }
  render() {
    const { Component, pageProps, siteData } = this.props;

    return (
      <Container>
        <Layout title={siteData}>
        <Component {...pageProps} />
        </Layout>
      </Container>
    );
  }
}

export default MyApp;