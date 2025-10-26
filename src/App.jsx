import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './component/layout/Layout.jsx';
import Beginning from './component/beginning/Beginning';
import About from './component/about/About.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Portfolio from './component/portfolio/Portfolio';
import Contact from './component/contact/Contact';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';

const router = createBrowserRouter([
  
  {

    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'beginning',
        element: <Beginning />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'portfolio',
        element: <Portfolio />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      { path: '', element: <Beginning /> } // Default route

    ]


  },

]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
