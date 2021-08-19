import React, { useState } from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import { create } from 'apisauce';
import publicIp from 'public-ip';
import Cookies from 'js-cookie';

const portalId = '7813526';
const formGuid = 'fe9fab84-d20c-466e-8ace-c01ed5c13d4d';
const hubSpotApi = create({
  baseURL: `https://api.hsforms.com/submissions/v3`,
  headers: {
    'Content-Type': 'application/json',
  },
});

const submitForm = (fields, ipAddress, uri, hutk, submittedAt) => hubSpotApi.post(`/integration/submit/${portalId}/${formGuid}`, {
  fields,
  'context': {
    'hutk': hutk, //":hutk", // include this parameter and set it to the hubspotutk cookie value to enable cookie tracking on your submission
    'pageUri': uri,
    'pageName': 'FMCV - Application',
    ipAddress,
  },
  'legalConsentOptions': {
    'consent': { // Include this object when GDPR options are enabled
      'consentToProcess': true,
      'text': 'I agree to allow Fix My Code Violation to store and process my personal data.',
      'communications': [
        {
          'value': true,
          'subscriptionTypeId': 999,
          'text': 'I agree to receive marketing communications from Fix My Code Violation.',
        },
      ],
    },
  },
  submittedAt,
});

const tag = 'ApplicationPage/method';
const ViewModel = (props) => {
  const steps =
    [
      {
        route: 'zip_code',
        question: 'What is your zip code?',
      },
      {
        route: 'property_type',
        question: 'What type of Property?',
      },
      {
        route: 'property_owner',
        question: 'Are you the property owner and/or have full authority?',
      },
      {
        route: 'have_violation',
        question: 'Do you currently have a violation?',
      },
      {
        route: 'professional_inspect',
        question: 'Would you like a professional to inspect the area in question?',
      },
      {
        route: 'files',
        question: 'Are you able to provide pictures or documentation of the area in question?',
      },
      {
        route: 'best_describe',
        question: 'What best describes you?',
      },
      {
        route: 'violation_issued_time',
        question: 'When were you issued the violation?',
      },
      {
        route: 'documents',
        question: 'Before scheduling your onsite visit, do you have the following documents(check all that apply)?',
      },
      {
        route: 'contact',
        question: 'Complete your contact details.',
      },
      {
        route: 'calendar',
        question: 'Schedule initial site inspection',
        subtext: 'Professional will come to your property for initial site inspection to determine the next steps.'
      },
      /*{
        route: 'done',
        question: 'Success',
      },*/
    ]
  ;


  let defaultData = {
    'zip': '',
    'property_type': null,
    'property_owner': null,
    'have_violation': null,
    'violation_issued_time': null,
    'best_describe': null,
    'professional_inspect': null,
    files: '',
    microfilms: false,
    violation: false,
    survey: false,
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    address: '',
    city: '',
  };
  let defaultData2 = {
    'zip': '16860',
    'property_type': 'Commercial',
    'property_owner': 'Yes',
    'have_violation': 'Not Sure',
    'violation_issued_time': '',
    'best_describe': '',
    'professional_inspect': 'Yes',
    files: '',
    microfilms: false,
    violation: false,
    survey: false,
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    address: '',
    city: '',
  };


  const [activeStep, setActiveStep] = useState(0);
  const [prevSteps, setPrevSteps] = useState([]);
  const [error, setError] = useState();
  const [data, setData] = useState(defaultData);
  const [isSubmitting, setSubmitting] = useState(false);
  const history = useHistory();

  const isValidStep = (stepNumber) => {
    let step = steps[stepNumber];
    let stepKeys = [];
    switch (step) {
      case 'zip-code':
        stepKeys.push('zip-code');
        break;
      case 'property_type':
        stepKeys.push('property_type');
        break;
      case 'property_owner':
        stepKeys.push('property_owner');
        break;
      case 'have-violation':
        stepKeys.push('have-violation');
        break;
      case 'violation_issued_time':
        stepKeys.push('violation_issued_time');
        break;
      case 'best-describe':
        stepKeys.push('best_describe');
        break;
      case 'professional-inspect':
        stepKeys.push('professional_inspect');
        break;
      case 'files':
        break;
      case 'contact' :
        stepKeys.push('firstname');
        stepKeys.push('lastname');
        stepKeys.push('email');

        break;
      default:

    }

    for (let key of stepKeys) {
      if (!data[key]) {
        setError({
          type: 'error',
          message: `${key} is required`,
        });

        return false;
      }
    }
    return true;
  };

  const _goStep = (stepNum) => {
    let _prevSteps = prevSteps.slice();
    _prevSteps.push(activeStep);
    setActiveStep(stepNum);
    setPrevSteps(_prevSteps);
  };

  const _goBack = () => {
    let _prevSteps = prevSteps.slice();
    let _prevStep = _prevSteps.pop();
    console.log('back', _prevStep);
    if (_prevStep >= 0) {
      setActiveStep(_prevStep);
      setPrevSteps(_prevSteps);
    }
  };

  const handleNext = () => {
    if (!isValidStep(activeStep)) {
      return;
    }

    if (activeStep !== steps.length) {
      _goStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      _goBack();
    }
  };

  const handleChange = (key, value) => {
    setError(null);
    let _data = Object.assign({}, data);
    _data[key] = value;
    setData(_data);
    console.log(tag, 'handleChange', key, value);
  };

  const handleChangeAndNext = (key, value) => {
    handleChange(key, value);
    setTimeout(
      handleNext,
      100,
    );
  };

  const handleViolation = (res) => {
    handleChange('have_violation', res);
    if (res === 'Yes') {
      _goStep(activeStep + 4);
    } else if (res === 'No') {
      _goStep(activeStep + 3);
    } else if (res === 'Not Sure') {
      _goStep(activeStep + 1);
    }
  };

  const handleProfessionalInspect = (res) => {
    handleChange('professional_inspect', res);
    if (res === 'No') {
      _goStep(activeStep + 2);
    } else {
      _goStep(activeStep + 1);
    }
  };

  const handleBestDescribe = (res) => {
    handleChange('best_describe', res);
    _goStep(activeStep + 2);
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    let fields = [];
    let docFields = [];
    for (let key of Object.keys(data)) {
      if (key !== 'microfilms' && key !== 'violation' && key !== 'survey') {
        if (data[key]) {
          fields.push({
            name: key,
            value: data[key],
          });
        }
      } else {
        if (data[key] === true) {
          docFields.push('have_' + key);
        }
      }
    }
    if (docFields.length > 0) {
      fields.push({
        name: 'documents',
        value: docFields.join(';'),
      });
    }

    try {
      const ipAddress = await publicIp.v4();
      const hutk = Cookies.get('hubspotutk');
      const uri = window.location.href;
      const submittedAt = new Date().getTime();
      console.log(tag, 'Submit', ipAddress, uri, hutk, submittedAt);
      let { data, ok } = await submitForm(fields, ipAddress, uri, hutk, submittedAt);
      if (ok) {
        handleNext();
      } else {
        console.log('Submit Error', data.message);
        console.log('Error', data.errors);
        alert(data.message);
        handleReset();
      }
    } catch (e) {
      console.log(tag, 'submit_exception', e.message);
      alert(e.message);
      handleReset();
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setPrevSteps([]);
    setActiveStep(0);
  };

  const getStep = (step) => {
    for (let item of steps) {
      if (item.route === step) {
        return item;
      }
    }
    return steps[0];
  };

  return {
    steps, getStep,
    activeStep, setActiveStep,

    data,
    isSubmitting,
    error,

    handleNext,
    handleBack,
    handleChange,
    handleChangeAndNext,
    handleViolation,
    handleBestDescribe,
    handleProfessionalInspect,
    handleSubmit,
    handleReset,
  };
};

export default ViewModel;
