import Layout from "@/layouts/Layout";
import "../styles/globals.css";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";

function MyApp({Component, pageProps}) {
  const router = useRouter();
  const isIndexOr404 = router.pathname === "/" || pageProps?.statusCode === 404;

  return (
    <div className="bg-white dark:bg-slate-900 min-h-screen">
      {isIndexOr404 ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </div>
  );
}

export default MyApp;
