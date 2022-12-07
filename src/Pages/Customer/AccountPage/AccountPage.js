import React from 'react';
import {
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
// import { ReactComponent as AniliteLoader } from "../Media/AniliteLoader.svg";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Edit, Visibility, VisibilityOff } from '@mui/icons-material';
import {
  CustomContainedButton,
  CustomTextButton,
} from '../../../Components/Button/CustomButton';
import { Container } from '../../../Components/Container';

var getCookies = function () {
  const allCookies = document.cookie;
  console.log(allCookies);
};

const DetailEntry = ({ label, value, setValue, disabled }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        width: '100%',
      }}
    >
      <Typography variant='body2'>{label}: </Typography>
      <TextField
        size='small'
        type='text'
        value={value}
        disabled={disabled}
        InputLabelProps={{
          sx: { color: 'primary.main' },
        }}
        sx={{
          input: { color: 'white' },
          width: '50%',
        }}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

function AccountPage({ user, setUser }) {
  const [username, setUsername] = React.useState(user.username);
  const [email, setEmail] = React.useState(user.email);
  const [phoneNumber, setPhoneNumber] = React.useState(user.phoneNumber);
  const [address, setAddress] = React.useState(user.address);
  const [editable, setEditable] = React.useState(false);

  const navigate = useNavigate();
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
        <Typography variant='h4' color='primary'>
          Tell me about myself!
        </Typography>

        <CustomTextButton
          style={{ marginLeft: 'auto', marginRight: '10%' }}
          onClick={() => setEditable(true)}
        >
          Edit
          <Edit />
        </CustomTextButton>
        <div
          style={{
            width: '80%',
            padding: 2,
            marginLeft: 'auto',
            marginRight: 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            gap: 20,
            border: '0.7px solid white',
            borderRadius: 20,
            padding: 20,
          }}
        >
          <DetailEntry
            label={'Name'}
						value={username}
						setValue={setUsername}
            disabled={!editable}
          />
          <DetailEntry
            label={'Email'}
						value={email}
						setValue={setEmail}
            disabled={!editable}
          />
          <DetailEntry
            label={'Phone Number'}
						value={phoneNumber}
						setValue={setPhoneNumber}
            disabled={!editable}
          />
          <DetailEntry
            label={'Address'}
						value={address}
						setValue={setAddress}
            disabled={!editable}
          />
        </div>

        <CustomTextButton
          disabled={!editable}
          variant='body2'
          sx={{ color: 'primary.main' }}
					onClick={() => setUser({
						...user,
						username,
						email,
						phoneNumber,
						address
					})}
        >
          Save
        </CustomTextButton>
        <CustomTextButton
          variant='body2'
          color='secondary'
          onClick={() => navigate('/reset-password')}
        >
          Change Password
        </CustomTextButton>
      </div>
    </Container>
  );
}

export default AccountPage;
