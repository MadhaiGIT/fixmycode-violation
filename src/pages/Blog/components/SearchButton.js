import React from 'react';
import {withStyles} from '@material-ui/styles';
import {Button, Link, TextField} from '@material-ui/core';


const ZipInput = withStyles({
  root: {
    width: '100%',
    background: 'transparent',
    color: '#2D526B',
    borderColor: '#DFDCD7',
    '& input:valid + fieldset': {
      borderColor: '#DFDCD7',
      borderWidth: 1,
    },
    '& input:invalid + fieldset': {
      borderColor: '#DFDCD7',
      borderWidth: 1,
    },
    '& input:valid:focus + fieldset': {
      borderWidth: 1,
      borderColor: '#DFDCD7',
    },
    borderRadius: '10px',
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
    width: '80px',
    borderRadius: '8px',
    border: 0,
    fontFamily: '\'Poppins\', sans-serif',
    fontSize: 17,
    fontWeight: 400,
    letterSpacing: '0.25px',
    padding: '12px 15px',
    margin: -20,
    marginLeft: -82,
    // boxShadow: '0 3px 5px 2px #3e4652',
  },
  label: {
    textTransform: 'capitalize',
    textAlign: 'center',

  },
})(Button);

const SearchButton = (props) => {
  const {value, onChange, onSearch} = props;
  // console.log('props', value, onChange);

  return (
    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
      <ZipInput
        variant={"outlined"}
        value={value}
        onChange={onChange}
        placeholder={'Enter'}
        type={"text"}
        InputProps={{
          style: {
            fontFamily: '\'Montserrat\', sans-serif',
            fontSize: 15,
            fontWeight: 500,
            letterSpacing: '0.25px',
            color: '#2D526B',
          }
        }}
      />
      <StyledButton onClick={onSearch}>
        Search
      </StyledButton>
    </div>
  );
};

export default SearchButton;
