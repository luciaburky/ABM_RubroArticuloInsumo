import * as React from 'react';

import DataLayer from '../../../services/data-layer';
import RubroArticuloInsumo from '../../../types/rubroArticuloInsumo';

type UseRubrosState = {
  data: RubroArticuloInsumo[];
  error: any;
  loading: boolean;
};

const initialState: UseRubrosState = {
  data: [],
  error: null,
  loading: true,
};

const useRubros = () => {
  // State
  const [state, setState] = React.useState<UseRubrosState>(initialState);

  // Effects
  React.useEffect(function fetchRubro() {
    DataLayer.fetch.rubroArticuloInsumo()
      .then((data: RubroArticuloInsumo[]) => setState({ data, error: null, loading: false }))
      .catch((error: any) => setState({ data: [], error, loading: false }));
  }, [setState]);

  return state;
};

export default useRubros;