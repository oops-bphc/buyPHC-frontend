import React from 'react';
import {
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
// import { ReactComponent as AniliteLoader } from "../Media/AniliteLoader.svg";
import { Link } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { CustomContainedButton } from '../../Components/Button/CustomButton';
import { Container } from '../../Components/Container';
import axios from "axios";

const RegistrationField = ({label, placeholder, setValue, multiline}) => {
  return (
    <TextField
      label={label}
      placeholder={placeholder}
      size='small'
      type='text'
			multiline={multiline ? true : false}
      InputLabelProps={{
        sx: { color: 'primary.main' },
      }}
      sx={{ input: { color: 'white' }, width: { xs: '90%', md: '70%' } }}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

function Register() {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
	const [address, setAddress] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const [credentialError, setCredentialError] = React.useState(false);


	const handleSubmit = async () => {
		await axios.post(
			`${process.env.REACT_APP_ROOT_URL}/customer`,
			{username, password, phoneNumber, email, address, wallet: 1000}
		).catch(console.error);
	};
	
  return (
    <Container>
      <div
        className='loginWrapper'
        style={{
          width: '50%',
          marginLeft: 'auto',
          marginRight: 'auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: 20,
        }}
      >
        <Typography variant='h4' color='primary' sx={{ pt: 2 }}>
          Register
        </Typography>

        <div
          style={{
            width: '100%',
            padding: 2,
            marginLeft: 'auto',
            marginRight: 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            gap: 20,
          }}
        >
					<RegistrationField
						label={'Email'}
						placeholder={'Enter email address'}
						setValue={setEmail}
					/>
					<RegistrationField
						label={'Username'}
						placeholder={'Enter username'}
						setValue={setUsername}
					/>
					<RegistrationField
						label={'Phone Number'}
						placeholder={'Enter phone number'}
						setValue={setPhoneNumber}
					/>
          <TextField
            id='loginPassword'
            label='Password'
            size='small'
            InputLabelProps={{
              sx: { color: 'primary.main' },
            }}
            sx={{ input: { color: 'white' }, width: { xs: '90%', md: '70%' } }}
            type={showPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={() => setShowPassword((password) => !password)}
                    edge='end'
                    color='secondary'
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={credentialError ? true : false}
            helperText={credentialError ? 'Invalid Email/Password' : ''}
            onChange={(e) => setPassword(e.target.value)}
          />

					<RegistrationField
						label={'Address'}
						placeholder={'Enter address'}
						setValue={setAddress}
						multiline
					/>

          <CustomContainedButton
            disabled={credentialError ? true : false}
						onClick={handleSubmit}
          >
            Submit
          </CustomContainedButton>
        </div>
        <Typography variant='body2' color='secondary'>
          Already a user?
        </Typography>
        <Link to='/login'>
          <Button variant='body2' sx={{ color: 'primary.main' }}>
            Login
          </Button>
        </Link>
      </div>
    </Container>
  );
}

export default Register;
