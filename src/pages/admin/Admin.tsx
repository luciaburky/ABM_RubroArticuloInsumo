import Alert from "react-bootstrap/Alert";
import * as React from 'react';
import Spinner from "react-bootstrap/Spinner";

import useRubros from "./hooks/useRubros";

const RubrosTable = React.lazy(() => import('./components/RubrosTable'));

const Admin: React.FC = () => {
  // Utils
  const { data, error, loading } = useRubros();

  // Render
  if (error) {
    return (
      <Alert variant="danger">
        {error?.message || 'Algo falló mientras buscaba los rubros de artículo insumo.'}
      </Alert>
    );
  }

  return loading
    ? (
      <div style={{ alignItems: 'center', display: 'flex', height: '100vh', justifyContent: 'center', width: '100wh' }}>
        <Spinner animation="border" />
      </div>
    )
    : (
      <React.Suspense fallback={<Spinner animation="border" />}>
        <RubrosTable rubros={data} />
      </React.Suspense>
    )
};

export default Admin;