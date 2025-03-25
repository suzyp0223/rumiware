import { Routes, Route } from 'react-router-dom';
import { memo } from 'react';

import Error from '../error/Error';
import Index from '../index/Index';
// import ProductsMain from '../'

const Router = (): JSX.Element => {
  return (
    <Routes>
      <Route path='*' element={<Error />} />
      {/* Index 수정할것 250325화 */}
      <Route path='/' element={<Index />} />

      {/* <Route path='' element={< />} /> */}
    </Routes>
  );
};

export default memo(Router);