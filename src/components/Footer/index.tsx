import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { useNavigate } from 'react-router-dom';

const LINKEDIN_URL = 'https://www.linkedin.com/in/benjamin-t-stafford/';
const GITHUB_URL = 'https://github.com/bstafford2017';
const EMAIL = 'b.stafford2017@gmail.com';

export default function Footer() {
  return (
    <BottomNavigation showLabels>
      <BottomNavigationAction
        label="LinkedIn"
        icon={<LinkedInIcon />}
        onClick={() =>
          window.open(LINKEDIN_URL, '_blank', 'noopener,noreferrer')
        }
      />
      <BottomNavigationAction
        label="Github"
        icon={<GitHubIcon />}
        onClick={() => window.open(GITHUB_URL, '_blank', 'noopener,noreferrer')}
      />
      <BottomNavigationAction
        label="Email"
        icon={<EmailIcon />}
        onClick={() =>
          window.location.assign(
            'mailto:ben@staffordsolutionsllc.com?subject=Let%27s%20get%20in%20touch%21'
          )
        }
      />
    </BottomNavigation>
  );
}
