import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/global.css';
import RootLayout from '../app/layout';
import React from 'react';

function MyApp({ Component, pageProps }) {
  // Pass the component to the custom layout as a prop
  const Layout = Component['Layout'] || React.Fragment;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;