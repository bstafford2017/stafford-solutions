import { useTheme } from '@mui/material/styles';
import { Box, Button, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const list: { title: string; description: string }[] = [
  {
    title: 'What we do?',
    description:
      'We design and create exceptional user experiences through relevant and secure technologies.',
  },
  {
    title: 'How we do it?',
    description:
      'We complete our mission statement by employing the best engineers to perfect high quality software for large enterprises.',
  },
  {
    title: 'What technologies do we use?',
    description:
      'We use a variety of technologies all across our industry. From scablable high volumne servers running on the cloud to deployable mobile applications. You want it? We create it!',
  },
  {
    title: 'Do you specialize in any technologies?',
    description:
      ' We specialize in create robust web applications in Javascript and Typescript on the AWS platform.',
  },
];

export default function AboutUs() {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <>
      <Typography
        variant="h3"
        component="h1"
        sx={{ paddingLeft: '25px', paddingTop: '25px' }}
      >
        About us
      </Typography>
      <Grid container>
        {list.map((item) => (
          <Grid
            item
            key={item.title}
            sx={{ padding: theme.spacing(5) }}
            xs={12}
            md={6}
          >
            <Box>
              <Typography variant="h4" sx={{ borderBottom: '3px solid #333' }}>
                {item.title}
              </Typography>
              <Typography variant="subtitle1">{item.description}</Typography>
            </Box>
          </Grid>
        ))}
        <Button
          variant="contained"
          sx={{ margin: '25px' }}
          onClick={() => navigate('/contact-us')}
        >
          Build now!
        </Button>
      </Grid>
    </>
  );
}
