import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Layout from './Components/Layout/Layout';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./scss/style.scss";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Layout>
  <App/>
 </Layout>
);