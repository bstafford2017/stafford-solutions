import { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { motion } from 'framer-motion';

export default function ContactUs() {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [firstNameError, setFirstNameError] = useState<string>('');
  const [lastNameError, setLastNameError] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [messageError, setMessageError] = useState<string>('');

  const validateFirstName = (): void => {
    if (!firstName.match(/[a-zA-Z. -]{3,50}/g)) {
      setFirstNameError(
        'Please enter a first name between 3 and 50 characters'
      );
    } else {
      setFirstNameError('');
    }
  };

  const validateLastName = (): void => {
    if (!lastName.match(/[a-zA-Z. -]{3,50}/g)) {
      setLastNameError('Please enter a last name between 3 and 50 characters');
    } else {
      setLastNameError('');
    }
  };

  const validateEmailAddress = (): void => {
    if (!email.match(/\w+@\w+\.\w/g)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const validateMessage = (): void => {
    if (!message.match(/[a-zA-Z0-9.!@#$%&*()-_ ]{3,50}/g)) {
      setMessageError(
        'Please enter a valid message between 3 and 50 characters'
      );
    } else {
      setMessageError('');
    }
  };

  const onSubmit = () => {
    if (firstNameError || lastNameError || emailError) {
      return;
    }

    try {
      // send email
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <motion.div
      className="card"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
        y: -15,
        transition: {
          duration: 0.5,
        },
      }}
      viewport={{ once: true }}
    >
      <Box sx={{ padding: '25px' }}>
        <Typography variant="h3" component="h1">
          Contact us
        </Typography>
        <Typography variant="subtitle1">
          Please use this form to contact us!
        </Typography>
        <Grid container>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <TextField
                label="First name"
                variant="standard"
                error={!!firstNameError}
                value={firstName}
                helperText={firstNameError}
                sx={{ padding: '10px 0px' }}
                onChange={(e) => setFirstName(e.target.value)}
                onBlur={() => validateFirstName()}
              />
              <TextField
                label="Last name"
                variant="standard"
                error={!!lastNameError}
                value={lastName}
                helperText={lastNameError}
                sx={{ padding: '10px 0px' }}
                onChange={(e) => setLastName(e.target.value)}
                onBlur={() => validateLastName()}
              />
              <TextField
                label="Email address"
                variant="standard"
                error={!!emailError}
                value={email}
                helperText={emailError}
                sx={{ padding: '10px 0px' }}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => validateEmailAddress()}
              />
              <TextField
                label="Message"
                variant="standard"
                error={!!messageError}
                value={message}
                helperText={messageError}
                sx={{ padding: '10px 0px' }}
                onChange={(e) => setMessage(e.target.value)}
                onBlur={() => validateMessage()}
              />
              <Button
                variant="contained"
                onClick={onSubmit}
                disabled={
                  firstNameError !== '' ||
                  lastNameError !== '' ||
                  emailError !== '' ||
                  messageError !== ''
                }
              >
                Send
              </Button>
            </FormControl>
          </Grid>
        </Grid>
      </Box>
    </motion.div>
  );
}
