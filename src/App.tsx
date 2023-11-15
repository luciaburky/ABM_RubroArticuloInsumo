import { BrowserRouter } from 'react-router-dom';
import * as React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import './App.css';

const Header = React.lazy(() => import('./components/Header/Header'));
const Router = React.lazy(() => import('./components/Router'));
const Footer = React.lazy(() => import('./components/Footer/Footer'));

function App() {
  return (
    <React.Suspense fallback={<Spinner animation="border" />}>
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </React.Suspense>
  )
}

export default App;
