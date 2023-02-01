import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <div id="_modal"></div>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
