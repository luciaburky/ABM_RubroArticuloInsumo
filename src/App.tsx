import { BrowserRouter, Router } from 'react-router-dom';
import * as React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Footer from './components/Footer/Footer';
import Router from './components/Router';

const Header = React.lazy(() => import('./components/Header/Header'));

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
