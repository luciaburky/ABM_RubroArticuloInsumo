import { BrowserRouter } from 'react-router-dom';
import * as React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Footer from './components/Footer/Footer';

const Header = React.lazy(() => import('./components/Header/Header'));
const Admin = React.lazy(() => import('./pages/admin/Admin'));

function App() {
  return (
    <React.Suspense fallback={<Spinner animation="border" />}>
      <BrowserRouter>
        <Header />
        <Admin />
        <Footer />
      </BrowserRouter>
    </React.Suspense>
  )
}

export default App;
