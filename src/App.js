import React from 'react';
import './App.scss';
import Layout from './components/Layout/Layout'
import Shortener from './containers/Shortener/Shortener'

function App() {
  return (
    <div className="App">
      <Layout>
        <Shortener />
      </Layout>
    </div>
  );
}

export default App;
