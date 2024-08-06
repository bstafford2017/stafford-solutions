import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

export default function App() {
  return (
    <Navigation
      title="Stafford Solutions LLC"
      list={[
        {
          label: 'About us',
          icon: <LocalLibraryIcon />,
          to: '/',
        },
        {
          label: 'Contact us',
          icon: <LocalPhoneIcon />,
          to: '/contact-us',
        },
      ]}
    >
      <Outlet />
    </Navigation>
  );
}
