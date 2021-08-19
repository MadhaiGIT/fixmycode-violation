import React from 'react';
import {Button} from '@material-ui/core';
import {withStyles} from '@material-ui/styles';
import {ArrowBack, ArrowForward} from "@material-ui/icons";
import CheckCircleOutline from "../../Application";

const ColorButton = withStyles({
  root: {
    background: '#FFFFFF',
    color: '#06957D',
    "&:hover": {
      background: '#06957D',
      color: '#fff'
    },
    border: '1px solid #06957D',
    borderRadius: 6,
    fontFamily: '\'Lato\', sans-serif',
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: '0.25px',
    padding: '5px 10px',
    minWidth: 36,
    margin: 2,
    // boxShadow: '0 3px 5px 2px #3e4652',
  },
  label: {
    textTransform: 'none',
    textAlign: 'center',
  },
})(Button);

const RevertColorButton = withStyles({
  root: {
    background: '#06957D',
    color: '#FFFFFF',
    "&:hover": {
      background: '#FFFFFF',
      color: '#06957D'
    },
    border: '1px solid #06957D',
    borderRadius: 6,
    fontFamily: '\'Lato\', sans-serif',
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: '0.25px',
    padding: '5px',
    minWidth: 36,
    margin: 2,
    // boxShadow: '0 3px 5px 2px #3e4652',
  },
  label: {
    textTransform: 'none',
    textAlign: 'center',
  },
})(Button);

const PAGE_NUMBER_COUNT = 5;

export default function (props) {
  const {page, totalPage, prevPage, nextPage, onPageChange} = props;

  let pages = [];
  let first = 1;
  let last = totalPage;
  for (let i = first; i <= last; i++) {
    pages.push(i);
  }

  const handlePrev = () => {
    if (prevPage) {
      onPageChange(prevPage)
    }
  };

  const handleNext = () => {
    if (nextPage) {
      onPageChange(nextPage)
    }
  };

  const handleNumber = (number) => {
    onPageChange(number);
  };

  return (
    <div className="row">
      <div className="hidden-xs col-sm-2 col-md-2 col-lg-2">
        <ColorButton onClick={handlePrev} disabled={!prevPage}>
          <ArrowBack
            style={{fontSize: 18, color: '#06957D', opacity: 0.5, "&:hover": {color: '#FFF'}}}/> &nbsp;&nbsp; Prev
        </ColorButton>
      </div>
      <div className="col-xs-2 hidden-sm hidden-md hidden-lg no-padding text-right">
        <ColorButton onClick={handlePrev} disabled={!prevPage}>
          <ArrowBack
            style={{fontSize: 18, margin: '2px 0', color: '#06957D', opacity: 0.5, "&:hover": {color: '#FFF'}}}/>
        </ColorButton>
      </div>
      <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 text-center no-padding">
        {pages.map(index => {
          if (index !== page) {
            return (
              <ColorButton key={index} onClick={() => handleNumber(index)}>{index}</ColorButton>
            )
          } else {
            return (
              <RevertColorButton onClick={() => handleNumber(index)} key={index}>{index}</RevertColorButton>
            )
          }
        })}
      </div>
      <div className="col-xs-2 hidden-sm hidden-md hidden-lg no-padding">
        <ColorButton onClick={handleNext} disabled={!nextPage}>
          <ArrowForward
            style={{fontSize: 18, margin: '2px 0', color: '#06957D', opacity: 0.5, "&:hover": {color: '#FFF'}}}/>
        </ColorButton>
      </div>
      <div className="hidden-xs col-sm-2 col-md-2 col-lg-2 text-right">
        <ColorButton onClick={handleNext} disabled={!nextPage}>
          Next &nbsp;&nbsp; <ArrowForward style={{
          fontSize: 18,
          color: '#06957D',
          opacity: 0.5,
          "&:hover": {color: '#FFF'}
        }}/>
        </ColorButton>
      </div>
    </div>
  )
}
