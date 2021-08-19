import { withStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';

const OptionButton = withStyles({
  root: {
    background: '#e8eaee',
    color: '#6d7278',
    "&:hover": {
      background: '#17c787',
      color: '#fff'
    },
    width: '240px',
    borderRadius: 10,
    border: 0,
    fontFamily: '\'Poppins\', sans-serif',
    fontSize: 15.5,
    fontWeight: 400,
    lineHeight: 1.2,
    letterSpacing: '0.25px',
    padding: '15px 50px',
    margin: 9
    // boxShadow: '0 3px 5px 2px #3e4652',
  },
  label: {
    textTransform: 'none',
    textAlign: 'center',

  },
})(Button);

export default OptionButton;
