import { FC, useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router';

import Home from 'components/pages/Home';
import SampleBase from 'components/pages/SampleBase';
// import AllCharacters from 'containers/templates/AllCharacters';
import EnhancedDefaultItemList from 'containers/templates/DefaultItemList';
import './App.css';

const App: FC = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [hash, pathname]);

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="datas" element={<SampleBase />}>
          {/* <Route path="/" element={<AllCharacters />} /> */}
          <Route path=":code" element={<EnhancedDefaultItemList />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />;
      </Routes>
    </div>
  );
};

export default App;
