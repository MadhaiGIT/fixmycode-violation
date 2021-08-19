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
    width: '240px',
    borderRadius: 10,
    border: 0,
    fontFamily: '\'Poppins\', sans-serif',
    fontSize: 20,
    fontWeight: 400,
    lineHeight: 1.2,
    letterSpacing: '0.25px',
    padding: '20px 50px',
    margin: 10,
    // boxShadow: '0 15px 15px 0px #3e4652',
    // shadowOffsetX: 10,
    // shadowOffsetY: 10,
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
