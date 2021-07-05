import React from 'react';
import {Button} from '@material-ui/core';
import { useAuth0 } from '@auth0/auth0-react';

export type LoginButtonProps = {}


export const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    return (
      <Button color="primary" variant="contained"
        onClick={() => loginWithRedirect()}
      >
        Log In
      </Button>
    );
  };
  