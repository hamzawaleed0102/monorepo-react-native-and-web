import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { rootStore } from '@ricult/store';
import HomePage from './screens/HomePage';
import DetailsPage from './screens/DetailsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/:card',
    element: <DetailsPage />,
  },
]);

export function App() {
  return (
    <Provider store={rootStore}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
