import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import ProductDetailsPage from './pages/ProductDetails';
import Products from './pages/Products';
import RootLayout from './pages/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [ 
    { index: true, path: '/' , element: <HomePage />},
    { path: '/products' , element: <Products />},
    { path: '/products/:productId' , element: <ProductDetailsPage />},
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
