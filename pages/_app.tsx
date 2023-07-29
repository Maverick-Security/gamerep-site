import "bootstrap/dist/css/bootstrap.min.css";
import "../css/global.css";
import React from "react";

function MyApp({ Component, pageProps }) {
    // Pass the component to the custom layout as a prop
    const Layout = Component["RootLayout"] || React.Fragment;

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
