import ContactUs from '../ContactUs';
import AboutUs from '../AboutUs';
import NotFound from '../NotFound';
import App from '../App';
import OurDevelopers from '../OurDevelopers';
import { Navigate } from 'react-router-dom';

const RootRedirect = () => <Navigate to="/" />;

export const routes = [
  {
    path: '/index.html',
    element: <RootRedirect />,
  },
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <AboutUs />,
      },
      {
        path: '/developers',
        element: <OurDevelopers />,
      },
      {
        path: '/contact-us',
        element: <ContactUs />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];
