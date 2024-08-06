import { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';

export default function ContactUs() {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [budget, setBudget] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [firstNameError, setFirstNameError] = useState<string>('');
  const [lastNameError, setLastNameError] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [phoneNumberError, setPhoneNumberError] = useState<string>('');
  const [budgetError, setBudgetError] = useState<string>('');
  const [endDateError, setEndDateError] = useState<string>('');

  const validateFirstName = (): void => {
    if (!!firstName.match(/[a-zA-Z.]{3,50}/g)) {
      setFirstNameError(
        'Please enter a first name between 3 and 50 characters'
      );
    }
  };

  const validateLastName = (): void => {
    if (!!lastName.match(/[a-zA-Z.]{3,50}/g)) {
      setLastNameError('Please enter a last name between 3 and 50 characters');
    }
  };

  const validatePhoneNumber = (): void => {
    if (!!phoneNumber.match(/([0-9]{10}|[0-9]{3}-[0-9]{3}-[0-9]{4})/g)) {
      setPhoneNumberError('Please enter a valid phone number');
    }
  };

  const validateEmailAddress = (): void => {
    if (
      !!email.match(
        /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g
      )
    ) {
      setEmailError('Please enter a valid email address');
    }
  };

  const validateBudget = (): void => {
    if (!!budget) {
      setBudgetError('Please enter a valid budget');
    }
  };

  const validateEndDate = () => {
    if (!!endDate.match(/[0-9]{2}\/[0-9]{2}\/([0-9{2}]|[0-9]{4})/g)) {
      setEndDateError('Please enter a valid estimated end date');
    }
  };

  const onSubmit = () => {
    if (
      firstNameError ||
      lastNameError ||
      emailError ||
      phoneNumberError ||
      budgetError ||
      endDateError
    ) {
      return;
    }

    try {
      // send email
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box sx={{ margin: '25px', padding: '15px' }}>
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
              onChange={(e) => setFirstName(e.target.value)}
              onBlur={() => validateFirstName()}
            />
            <TextField
              label="Last name"
              variant="standard"
              error={!!lastNameError}
              onChange={(e) => setLastName(e.target.value)}
              onBlur={() => validateLastName()}
            />
            <TextField
              label="Email address"
              variant="standard"
              error={!!emailError}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => validateEmailAddress}
            />
            <TextField
              label="Phone number"
              variant="standard"
              helperText="Ex. 123-456-7890 or 1234567890"
              error={!!phoneNumberError}
              onChange={(e) => setPhoneNumber(e.target.value)}
              onBlur={() => validatePhoneNumber()}
            />
            <Select
              value={budget}
              label="Budget"
              error={!!budgetError}
              onChange={(e) => setBudget(e.target.value)}
              onBlur={() => validateBudget()}
            >
              <MenuItem value={500}>$500 - $1500</MenuItem>
              <MenuItem value={1500}>$1500 - $2500</MenuItem>
              <MenuItem value={2500}>$2500+</MenuItem>
            </Select>
            <TextField
              label="Estimated End Date"
              variant="standard"
              helperText="Ex. 01/01/24 or 01/01/2024"
              error={!!endDateError}
              onChange={(e) => setEndDate(e.target.value)}
              onBlur={() => validateEndDate()}
            />
            <Button variant="contained" onClick={onSubmit}>
              Send
            </Button>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
}
