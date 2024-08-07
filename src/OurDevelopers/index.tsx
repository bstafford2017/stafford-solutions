import { useTheme } from '@mui/material/styles';
import { Box, Button, Grid, List, ListItem, Typography } from '@mui/material';

export default function OurDevelopers() {
  return (
    <>
      <Typography
        variant="h3"
        component="h1"
        sx={{ paddingLeft: '25px', paddingTop: '25px' }}
      >
        Our developers
      </Typography>
      <Grid container>
        <Grid item xs={12} md={6}>
          <img
            style={{
              borderRadius: '15px',
              marginTop: '25px',
              border: '2px solid #333',
              width: '100%',
              height: 'auto',
            }}
            src="https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/274665396_5190147497665012_453686274030750986_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=ubOifLXcKB4Q7kNvgGNnNsa&_nc_ht=scontent-ord5-2.xx&cb_e2o_trans=q&oh=00_AYAeT3oxEp-mRatekBoG-vWE3UKX8njslIFeYWxdfGCeqA&oe=66B8929B"
            alt="Picture of Benjamin Stafford"
          />
        </Grid>
        <Grid item xs={12} md={6} sx={{ paddingLeft: '25px' }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{ paddingTop: '25px', fontStyle: 'bold' }}
          >
            Benjamin Stafford
          </Typography>
          <Typography variant="subtitle1" sx={{ fontStyle: 'italic' }}>
            Founder, CEO of Stafford Solutions LLC
          </Typography>
          <Typography variant="body1" sx={{ paddingTop: '15px' }}>
            Benjamin Stafford grew up in Kasson, MN - a small town outside of
            Rochester, MN. In 2020, he graduated from the University of North
            Dakota with a Bachelors of Science in Computer Science and a minor
            in Mathematics. After college, he persued accepted a position at
            Securian Finacial as an software engineer where he worked the
            external customer portal site for the RMT (Retail Market Technology)
            division. Securian AWS migration in 2021 enabled his success as a
            cloud developer. This initative allowed him to focus on building
            microservice REST architecture on the AWS platform.
          </Typography>
          <Typography variant="body1" sx={{ paddingTop: '15px' }}>
            Ben is known for his relentless focus on implementing innovative
            technologies to improve the user experience. His key accomplishments
            include implementing the first production-grade GraphQL in RMT and
            introducing microfrontend architecture at Securian Financial.
          </Typography>
          <Typography variant="body1" sx={{ paddingTop: '15px' }}>
            During 2024, Ben started Stafford Solutions LLC where he dedicates
            his time on sofware engineering consulting.
          </Typography>
          <Typography variant="body1" sx={{ paddingTop: '15px' }}>
            Technical skills:
          </Typography>
          <List>
            <ListItem>- React JS</ListItem>
            <ListItem>- TypeScript / JavaScript</ListItem>
            <ListItem>- REST Services</ListItem>
            <ListItem>- GraphQL Architecture</ListItem>
            <ListItem>- AWS Services</ListItem>
            <ListItem>- WCAG Standards</ListItem>
          </List>
        </Grid>
      </Grid>
    </>
  );
}
