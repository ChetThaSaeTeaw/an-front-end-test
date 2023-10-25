import './App.css';

import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

// Components
import Loading from './components/Loading/Loading';

// pages
const Homepage = lazy(() => import("./pages/Home/Home"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
    </Suspense>
  )
}

export default App
