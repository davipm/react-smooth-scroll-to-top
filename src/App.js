import React from 'react';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <main id="app">
      <div className="box item-1" id="item1">
        <h1>React Smooth Scroll Top</h1>
        <a href="#top">Github Repository <i className="fa fa-github" aria-hidden="true"></i></a>
      </div>
      <div className="box item-2" id="item2"></div>
      <div className="box item-3" id="item3"></div>
      <ScrollToTop />
    </main>
  );
}

export default App;
