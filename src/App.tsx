import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import GroupsIcon from '@mui/icons-material/Groups';
import { Box } from '@mui/material';

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
          label: 'Our developers',
          icon: <GroupsIcon />,
          to: '/developers',
        },
        {
          label: 'Contact us',
          icon: <LocalPhoneIcon />,
          to: '/contact-us',
        },
      ]}
    >
      <Box sx={{ padding: '35px' }}>
        <Outlet />
      </Box>
      <Footer />
    </Navigation>
  );
}
