import React from 'react';
import {withStyles} from '@material-ui/styles';
import {Button, Link} from '@material-ui/core';

const StyledButton = withStyles({
  root: {
    background: '#34bcaf',
    color: '#fff',
    "&:hover": {
      background: '#e8eaee',
      color: '#34bcaf',
    },
    width: '160px',
    borderRadius: 10,
    border: 0,
    fontFamily: '\'Poppins\', sans-serif',
    fontSize: 15,
    fontWeight: 400,
    letterSpacing: '0.25px',
    padding: '17px 15px 11px 15px',
    margin: 15
    // boxShadow: '0 3px 5px 2px #3e4652',
  },
  label: {
    textTransform: 'capitalize',
    textAlign: 'center',

  },
})(Button);

const GetStartedButton = () => {
  return (
    <StyledButton>
      <Link href={"/application"} color="inherit" underline="none">
        Get Started
      </Link>
    </StyledButton>
  )
};

export default GetStartedButton;
