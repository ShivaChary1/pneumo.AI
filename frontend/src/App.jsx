// export default App
import './App.css';
import Navbar from './components/header/Navbar';
import { createBrowserRouter, RouterProvider, Routes, Route } from 'react-router-dom';
import Hero from './components/hero/Hero';
import Info from './components/pneumonia/Info';
import Stats from './components/stats/Stats';
import Error from './components/Error';
import Cause from './components/causes/Cause';
import Cta from './components/CTA/Cta';
import Footer from './components/footer/Footer';
import Getstart from './components/Getstarted/Getstart';
import Design from './components/Design';
import Usage from './components/Usage/Usage';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Design/><Navbar/><Hero/><Stats/><Info/><Cause/><Cta/><Footer/></>
    },
    {
      path: "/trynow",
      element: <><Getstart/> </>
    },
    {
      path: '/getstarted',
      element: <><Design/><Usage/><Footer/></>
    },
    {
      path: "*",
      element: <><Design/><Error/></>
    }
  ]);

  return (
    <>
      <RouterProvider router={router}>
        <Routes>
          {router}
        </Routes>
      </RouterProvider>
    </>
  );
}

export default App;
