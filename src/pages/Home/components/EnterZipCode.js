import React from 'react';
import {withStyles} from '@material-ui/styles';
import {Button, Link, Input, TextField} from '@material-ui/core';


const ZipInput = withStyles({
  root: {
    width: '54%',
    background: '#1c5959',
    color: '#fff',
    borderColor: '#1c5959',
    '& input:valid + fieldset': {
      borderColor: '#1c5959',
      borderWidth: 0,
    },
    '& input:invalid + fieldset': {
      borderColor: '#1c5959',
      borderWidth: 0,
    },
    '& input:valid:focus + fieldset': {
      borderWidth: 0,
      borderColor: '#1c5959',
    },
    borderRadius: '10px',
    padding: '3px 15px',
  }
})(TextField);
const StyledButton = withStyles({
  root: {
    background: '#56b5a1',
    color: '#fff',
    "&:hover": {
      background: '#e8eaee',
      color: '#56b5a1',
    },
    width: '160px',
    borderRadius: '10px',
    border: 0,
    fontFamily: '\'Poppins\', sans-serif',
    fontSize: 15,
    fontWeight: 400,
    letterSpacing: '0.25px',
    padding: '17px 15px',
    margin: -20,
    // boxShadow: '0 3px 5px 2px #3e4652',
  },
  label: {
    textTransform: 'capitalize',
    textAlign: 'center',

  },
})(Button);

const EnterZipCode = (props) => {
  const {href, value, onChange} = props;
  console.log('props', href, value, onChange);

  return (
    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
      <ZipInput
        variant={"outlined"}
        value={value}
        onChange={onChange}
        placeholder={'Enter zipcode'}
        type={"number"}
        InputProps={{
          style: {
            fontFamily: '\'Poppins\', sans-serif',
            fontSize: 15,
            fontWeight: 400,
            letterSpacing: '0.25px',
            color: '#fff',
          }
        }}
      />
      <StyledButton>
        <Link href={href} color="inherit" underline="none">
          Search
        </Link>
      </StyledButton>
    </div>
  );
};

export default EnterZipCode;
