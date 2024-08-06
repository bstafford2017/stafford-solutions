import ContactUs from '../ContactUs';
import AboutUs from '../AboutUs';
import NotFound from '../NotFound';
import App from '../App';

export const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <AboutUs />,
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
