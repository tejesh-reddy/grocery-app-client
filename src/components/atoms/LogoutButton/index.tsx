import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@material-ui/core";

type LogoutButtonProps = {
  tokenHandler: () => any
}

export const LogoutButton = (props: LogoutButtonProps) => {
    const { logout } = useAuth0();
    return (
      <Button
        variant='contained'
        color='secondary'
        onClick={() =>{
          props.tokenHandler()
          logout({
            returnTo: window.location.origin,
          })
        }}
      >
        Log Out
      </Button>
    );
  };
  