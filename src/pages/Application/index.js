/*
 * Application Page
 *
 * This is the application users see of our App, at the '/application' route
 *
 */

import React from 'react';
import {
  withRouter,
} from 'react-router-dom';

import {
  Typography,
  Container,
  FormControl,
  Grid,
  LinearProgress,
  TextField,
} from '@material-ui/core';
import CheckCircleOutline from '@material-ui/icons/CheckCircleOutline';
// import {InlineWidget} from 'react-calendly';
import ReactLoading from 'react-loading';
import useViewModel from './methods';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import Header from './components/Header';
import bgForm from '../../assets/images/cloud-forms-new.svg';
import ContinueButton from './components/ContinueButton';
import OptionButton from './components/OptionButton';
import CheckButton from './components/CheckButton';
import Helmet from 'react-helmet';

const ColorLinearProgress = withStyles({
  colorPrimary: {
    backgroundColor: '#4e5968',
  },
  barColorPrimary: {
    backgroundColor: '#17c787',
  },
  root: {
    height: 3,
    width: '100%',
    justifySelf: 'center',
    margin: 'auto',
  },
})(LinearProgress);

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',

  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  group: {
    margin: 20,
  },
  logo: {
    width: 200,
    height: 50,
  },
});


const tag = 'ApplicationPage::Index';

function ApplicationPage(props) {
  const vm = useViewModel(props);
  const {match, location} = props;
  let {ZipCode} = match.params;
  console.log('ZipCode', match);
  if (ZipCode && vm.data.zip === '') {
    vm.handleChange('zip', ZipCode)
  }

  const classes = useStyles();

  if (vm.data.files)
    console.log('files', vm.data.files);
  console.log(tag, `Step: ${vm.activeStep}`);

  let calendlyUrl = `https://calendly.com/fixmycode/inspection?first_name=${vm.data.firstname}&last_name=${vm.data.lastname}&email=${encodeURIComponent(vm.data.email)}`;

  const getStepContent = (stepNumber) => {
    let step = vm.steps[stepNumber].route;
    return (
      <>
        <h2 style={{
          color: '#3eb5a0',
          fontSize: '1.8rem',
          fontFamily: '\'Montserrat\', sans-serif',
          fontWeight: 'bold',
          lineHeight: 1.334,
        }}>
          {vm.getStep(step).question}
        </h2>
        {vm.getStep(step).subtext && <h3 style={{
          color: '#444',
          fontSize: '1.2rem',
          fontFamily: '\'Montserrat\', sans-serif',
          lineHeight: 1.334,
        }}>
          {vm.getStep(step).subtext}
        </h3>}

        <br/>
        <Grid item xs={12} sm={12} style={{display: step !== 'zip_code' && step !== '' ? 'none' : ''}}>
          <br/>
          <br/>
          <FormControl>
            <TextField
              id="zip_code" label="Zip Code" variant="outlined" value={vm.data.zip} type={"number"}
              onChange={(e) => vm.handleChange('zip', e.target.value)}
              error={!vm.data['zip']} helperText={'Zip code is required'} color={'secondary'}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12} style={{display: step !== 'zip_code' && step !== '' ? 'none' : ''}}>
          <br/>
          <br/>
          <br/>
          <ContinueButton onClick={vm.data['zip'] ? vm.handleNext : null}>
            Continue
          </ContinueButton>
        </Grid>
        <Grid item xs={12} sm={12} style={{display: step !== 'property_type' ? 'none' : ''}}>
          <FormControl component="fieldset" className={classes.group}>
            <OptionButton onClick={() => {
              vm.handleChangeAndNext('property_type', 'Commercial');
            }}>Commercial</OptionButton>
            <OptionButton onClick={() => {
              vm.handleChangeAndNext('property_type', 'Residential');
            }}>Residential</OptionButton>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12} style={{display: step !== 'property_owner' ? 'none' : ''}}>
          <FormControl component="fieldset" className={classes.group}>
            <OptionButton onClick={() => vm.handleChangeAndNext('property_owner', 'Yes')}>Yes</OptionButton>
            <OptionButton onClick={() => vm.handleChangeAndNext('property_owner', 'No')}>No</OptionButton>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12}
              style={{display: step !== 'have_violation' ? 'none' : ''}}>
          <FormControl component="fieldset" className={classes.group}>
            <OptionButton onClick={() => vm.handleViolation('Yes')}>Yes</OptionButton>
            <OptionButton onClick={() => vm.handleViolation('No')}>No</OptionButton>
            <OptionButton onClick={() => vm.handleViolation('Not Sure')}>Not Sure</OptionButton>
          </FormControl>
        </Grid>
        {vm.data.have_violation === 'Yes' &&
        <Grid item xs={12} sm={12} style={{display: step !== 'violation_issued_time' ? 'none' : ''}}>
          <FormControl component="fieldset" className={classes.group}>
            <OptionButton onClick={() => vm.handleChangeAndNext('violation_issued_time', 'in10')}>Within the past 10
              days</OptionButton>
            <OptionButton onClick={() => vm.handleChangeAndNext('violation_issued_time', 'in30')}>Within the past 30
              days</OptionButton>
            <OptionButton onClick={() => vm.handleChangeAndNext('violation_issued_time', 'out30')}>More than 30 days
              ago</OptionButton>
          </FormControl>
        </Grid>}
        {vm.data.have_violation === 'No' &&
        <Grid item xs={12} sm={12} style={{display: step !== 'best_describe' ? 'none' : ''}}>
          <FormControl component="fieldset" className={classes.group}>
            <OptionButton onClick={() => vm.handleBestDescribe('best_describe', 'permit')}>My property needs to have
              work performed and I need a permit</OptionButton>
            <OptionButton onClick={() => vm.handleBestDescribe('best_describe', 'without')}>My property had work done
              without a permit</OptionButton>
          </FormControl>
        </Grid>}
        {vm.data.have_violation === 'Not Sure' &&
        <>
          <Grid item xs={12} sm={12} style={{display: step !== 'professional_inspect' ? 'none' : ''}}>
            <FormControl component="fieldset" className={classes.group}>
              <OptionButton onClick={() => vm.handleProfessionalInspect('Yes')}>Yes</OptionButton>
              <OptionButton onClick={() => vm.handleProfessionalInspect('No')}>No</OptionButton>
            </FormControl>
          </Grid>
          {vm.data.professional_inspect === 'No' &&
          <Grid item xs={12} sm={12} style={{display: step !== 'best_describe' ? 'none' : ''}}>
            <FormControl component="fieldset" className={classes.group}>
              <OptionButton onClick={() => vm.handleBestDescribe('best_describe', 'permit')}>My property needs to have
                work performed and I need a permit</OptionButton>
              <OptionButton onClick={() => vm.handleBestDescribe('best_describe', 'without')}>My property had work done
                without a permit</OptionButton>
            </FormControl>
          </Grid>}
          {vm.data.professional_inspect === 'Yes' &&
          <>
            <Grid item xs={12} sm={12} style={{display: step !== 'files' ? 'none' : ''}}>
              <label style={{
                border: '0px solid #ccc',
                borderRadius: 5,
                // display: 'inline-block',
                fontSize: 12,
                fontWeight: 150,
                padding: '3px 16px',
                cursor: 'pointer',
                color: '#222',
                backgroundColor: '#ccc',
                '&:hover': {
                  backgroundColor: '#fff',
                }
              }}>
                <input
                  type="file"
                  onChange={(e) => {
                    console.log('target', e.target);
                    vm.handleChange('files', e.target.value)
                  }}
                  style={{
                    display: 'none'
                  }}
                />
                Choose File
              </label>
              <div
                style={{
                  display: 'inline-block',
                  padding: '6px 12px',
                  cursor: 'pointer',
                  color: '#222',
                  fontSize: 12,
                  fontWeight: 150,
                }}
                onClick={() => {
                  vm.handleChange('files', '')
                }}>
                {vm.data.files ?
                  vm.data.files.split('\\').pop() : 'No file chosen'}
              </div>
              }
              <br/><br/>
            </Grid>
            <Grid item xs={12} sm={12} style={{display: step !== 'files' ? 'none' : ''}}>
              <FormControl>
                <br/>
                <br/>
                <ContinueButton onClick={vm.handleNext}>
                  Continue
                </ContinueButton>
              </FormControl>
              <br/><br/>

            </Grid>

            <Grid item xs={12} sm={12} style={{display: step !== 'best_describe' ? 'none' : ''}}>
              <FormControl component="fieldset" className={classes.group}>
                <OptionButton onClick={() => vm.handleBestDescribe('best_describe', 'permit')}>My property needs to have
                  work performed and I need a permit</OptionButton>
                <OptionButton onClick={() => vm.handleBestDescribe('best_describe', 'without')}>My property had work
                  done
                  without a permit</OptionButton>
              </FormControl>
            </Grid>

          </>
          }
        </>
        }

        <Grid item xs={12} sm={12} style={{display: step !== 'documents' ? 'none' : ''}}>
          <FormControl component="fieldset" className={classes.group}>
            {vm.data.microfilms ?
              <CheckButton onClick={() => vm.handleChange('microfilms', false)}>microfilms(original building
                plans)</CheckButton> :
              <OptionButton onClick={() => vm.handleChange('microfilms', true)}>microfilms(original building
                plans)</OptionButton>
            }
            {vm.data.violation ?
              <CheckButton onClick={() => vm.handleChange('violation', false)}>violation</CheckButton> :
              <OptionButton onClick={() => vm.handleChange('violation', true)}>violation</OptionButton>
            }
            {vm.data.survey ?
              <CheckButton onClick={() => vm.handleChange('survey', false)}>survey</CheckButton> :
              <OptionButton onClick={() => vm.handleChange('survey', true)}>survey</OptionButton>
            }

          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12} style={{display: step !== 'documents' ? 'none' : ''}}>
          <FormControl>
            <ContinueButton onClick={vm.handleNext}>
              Continue
            </ContinueButton>
          </FormControl>
          <br/><br/>
        </Grid>

        <div style={{display: step !== 'contact' ? 'none' : ''}}>
          {vm.isSubmitting ?
            <ReactLoading type={'balls'} color='#fff' style={{margin: 'auto', padding: 5}} width={100}/>
            :
            <>
              <Grid item xs={12} sm={12}>
                <TextField
                  id="firstname" label="First Name" variant="outlined" value={vm.data.firstname}
                  fullWidth={true}
                  onChange={(e) => vm.handleChange('firstname', e.target.value)}
                  error={!vm.data.firstname} helperText={'First name is required'} color={'secondary'}
                />
              </Grid>
              <br/>
              <Grid item xs={12} sm={12}>
                <TextField
                  id="lastname" label="Last Name" variant="outlined" value={vm.data.lastname}
                  fullWidth={true}
                  onChange={(e) => vm.handleChange('lastname', e.target.value)}
                  error={!vm.data.lastname} helperText={'Last name is required'} color={'secondary'}
                />
              </Grid>
              <br/>
              <Grid item xs={12} sm={12}>
                <TextField
                  id="email" label="Email" variant="outlined" value={vm.data.email}
                  fullWidth={true}
                  type={'email'}
                  onChange={(e) => vm.handleChange('email', e.target.value)}
                  error={!vm.data.email} helperText={'Email is required'} color={'secondary'}
                />
              </Grid>
              <br/>
              <br/>
              <Grid item xs={12} sm={12} style={{display: step !== 'contact' ? 'none' : ''}}>
                <ContinueButton onClick={
                  vm.data.firstname && vm.data.lastname && vm.data.email ?
                    vm.handleSubmit : null}>
                  Continue
                </ContinueButton>
              </Grid>
            </>
          }

        </div>

        <div style={{display: step !== 'calendar' ? 'none' : ''}}>

          <>
            <Grid item xs={12} sm={12}>
              <div className="calendly-inline-widget"
                   data-url={calendlyUrl}
                   data-processed="true"
                   style={{minWidth: 320, height: 630}}>
                <iframe title="calendar" src={`https://calendly.com/fixmycode/inspection?embed_domain=${encodeURIComponent(window.location.hostname)}&first_name=${vm.data.firstname}&last_name=${vm.data.lastname}&email=${encodeURIComponent(vm.data.email)}`}
                        width={"100%"}
                        height={"100%"}
                        frameBorder={"0"}
                ></iframe>
              </div>
              <Helmet>
                <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script>
              </Helmet>

              {/*<FormControl component="fieldset" className={classes.group}>

                  <InlineWidget
                    url={`https://calendly.com/fixmycode/inspection?first_name=${vm.data.firstname}&last_name=${vm.data.lastname}&email=${vm.data.email}`}
                  />
                </FormControl>*/}
            </Grid>

          </>
        </div>

        <Grid item xs={12} sm={12} style={{display: step !== 'done' ? 'none' : ''}}>
          <CheckCircleOutline fontSize={'large'} style={{fontSize: 200, color: '#17c787'}}/>
          <br/>
          <br/>
          <br/>
          <ContinueButton
            onClick={vm.handleReset}>
            Restart
          </ContinueButton>
        </Grid>

      </>
    );

  };

  return (
    <div style={{
      backgroundColor: '#fff',
    }}>
      <Header/>
      <div className={"container"} style={{
        backgroundImage: `url(${bgForm})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom',
      }}>
        <br/>
        <br/>
        <br/>
        <br/>
        <div style={{width: '331px', margin: 'auto'}}>
          <ColorLinearProgress value={vm.activeStep / (vm.steps.length - 1) * 100} variant={'determinate'}
                               color={'primary'}/>
          <div style={{
            color: '#444',
            fontSize: '1.6rem',
            fontWeight: 'bold',
            margin: 'auto',
            textAlign: 'center',
            marginTop: 10,
          }}>
            {Math.round(vm.activeStep / (vm.steps.length - 1) * 100) + ' %'}
          </div>

          <br/>
          <Container className={classes.root}>
            <Grid container
                  spacing={0}
                  direction="column"
                  alignItems="center"
                  style={{minHeight: '55.7vh'}}
            >
              <Grid item xs={12} sm={12}>
                <>
                  <React.Fragment>
                    {vm.error &&
                    <Typography color="error" variant="h6" component="h6">{vm.error.message}</Typography>
                    }
                    {getStepContent(vm.activeStep)}
                  </React.Fragment>
                </>
              </Grid>

            </Grid>
            <Grid item xs={12} sm={12} style={{minHeight: '30vh'}}
            >
              <div style={{color: '#000', fontSize: '1.4em'}}>
                <a href={'tel:1-800-516-2399'} style={{textDecoration: 'none', color: 'inherit'}}>800.516.2399</a>
              </div>
              <div style={{color: '#3eb5a0', fontSize: '0.8em', textTransform: 'uppercase'}}>
                <a href={'mailto:info@fixmycodeviolation.com'}
                   style={{textDecoration: 'none', color: 'inherit'}}>info@fixmycodeviolation.com</a>
              </div>
              <div style={{color: '#000', fontSize: '0.6em'}}>
                Fix My Code Violation 2020
              </div>
            </Grid>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default withRouter(ApplicationPage);
