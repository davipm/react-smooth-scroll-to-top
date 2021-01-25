import React from "react";

import Global from "./styles/global";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <main id="app">
      <div className="box item-1" id="item1">
        <h1>React.js Smooth Scroll Top</h1>
        <h3>Scroll the page</h3>
        <a
          href="https://github.com/davi-94/react-smooth-scroll-to-top"
          target="_blank"
          rel="noreferrer noopener"
        >
          Github Repository <i className="fa fa-github" aria-hidden="true" />
        </a>
      </div>
      <div className="box item-2" id="item2" />
      <div className="box item-3" id="item3" />

      {/* scroll to top component */}
      <ScrollToTop />

      <Global />
    </main>
  );
}
