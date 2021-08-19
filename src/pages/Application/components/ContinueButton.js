import { withStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';

const ContinueButton = withStyles({
  root: {
    background: '#004041',
    "&:active": {
      background: 'linear-gradient(45deg, #004041 30%, #17c787 90%)',
    },
    "&:hover": {
      background: 'linear-gradient(45deg, #17c787 30%, #17c787 90%)',
    },
    borderRadius: 5,
    border: 0,
    color: 'white',
    fontFamily: '\'Poppins\', sans-serif',
    fontSize: 20,
    fontWeight: 400,
    lineHeight: 0.76,
    letterSpacing: 1.99,
    padding: '15px 40px',
    // boxShadow: '0 3px 5px 2px #3e4652',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

export default ContinueButton;
