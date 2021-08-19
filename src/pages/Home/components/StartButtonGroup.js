import React from 'react';
import {withStyles} from '@material-ui/styles';
import {Button, Link} from '@material-ui/core';

const StyledButton = withStyles({
  root: {

    background: '#113f43',
    color: '#fff',
    "&:hover": {
      background: '#fff',
      color: '#113f43',
    },
    width: '45%',
    borderRadius: 10,
    border: 2,
    fontFamily: '\'Poppins\', sans-serif',
    fontSize: 19,
    letterSpacing: '0.25px',
    padding: '10px 30px',
    // boxShadow: '0 3px 5px 2px #3e4652',
  },
  label: {
    textTransform: 'none',
    textAlign: 'center',
  },
})(Button);

const StyledButton1 = withStyles({
  root: {
    background: 'transparent',
    color: '#113f43',
    "&:hover": {
      background: '#113f43',
      color: '#34bcaf',
    },
    width: '45%',
    borderRadius: 10,
    border: '3px solid #113f43',
    fontFamily: '\'Poppins\', sans-serif',
    fontSize: 19,
    letterSpacing: '0.25px',
    padding: '10px 30px',
    // boxShadow: '0 3px 5px 2px #3e4652',
  },
  label: {
    textTransform: 'none',
    textAlign: 'center',
  },
})(Button);

const GetStartedButton = () => {
  return (
    <StyledButton>
      <Link href={"/application"} color="inherit" underline="none">
        Find a Fixer
      </Link>
    </StyledButton>
  )
};

const LearnMoreButton = () => {
  return (
    <StyledButton1>
      <Link href={"#features"} className="scroll" color="inherit" underline="none">
        Learn more
      </Link>
    </StyledButton1>
  )
};

const StartButtonGroup = () => {
  return (
    <div className="button_group">
      <GetStartedButton/>
      <LearnMoreButton/>
    </div>
  )
};

export default StartButtonGroup;
