import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Overview } from './pages/Overview';
import { Favorites } from './pages/Favorites';
import { Contacts } from './pages/Contacts';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Overview />,
    },
    {
      path: '/contacts',
      element: <Contacts />,
    },
    {
      path: '/favorites',
      element: <Favorites />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
