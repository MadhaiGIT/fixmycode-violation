/**
 * HomePage
 *
 * This is the page we show when the user visits the root url, /
 *
 */
import React, {useState, useEffect} from 'react';
import Helmet from 'react-helmet';
import GetStartedButton from './components/GetStartedButton';
import EnterZipCode from './components/EnterZipCode';
import StartButtonGroup from './components/StartButtonGroup';
import {white} from "color-name";
import ContactUs from "../../components/ContactUs";
import Footer from "../../components/Footer";

export default function NotFound() {
  const [zipCode, setZipCode] = useState('');
  return (
    <React.Fragment>
      <div id="LandingPage">
        <div data-spy="scroll" data-target=".nav-menu" data-offset={50}>
          <div id="pageloader">
            <div className="loader-item">
              <img src="images/loading.gif" alt="loader"/>
            </div>
          </div>
          {/* Home Section */}
          <div className="row no-gutters full-height" id="main-banner">
            <div id="home" className="col-md-12 col-sm-12 full-height"
                 style={{paddingLeft: 0, paddingRight: 0, overflow: 'hidden'}}>
              {/*<img id = "background-img" src="../sweet_liberty/media/img/header2.jpg">*/}
              <div className="cityscape">
                <img src="images/SVG/sky.svg" alt="sky" id="background-img"/>
                <img src="images/SVG/buildings.svg" alt="building" id="background-img2"/>
                <img src="images/SVG/superhero-building.svg" alt="superhero" id="background-img3"/>
                <div></div>
              </div>
              <div id="top-logo">

                <img className="hidden-xs" src="images/SVG/fmcv-logo-default.svg" alt="wisten-logo" width="330"
                     height="181"/>
                <div className="rotating-banner" id="banner-2">
                  {/*<div className="banner-content" style={{display: 'none'}}>*/}
                  <div className="banner-content">
                    <h2>Have violations?</h2>
                    <h3>Find a local fixer</h3>
                    <span><GetStartedButton/></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Navigation Section */}
          <section id="navigation" className="shadow">
            <div className="inner navigation">
              {/* Logo Img */}
              <div className="logo">
                <a className="scroll" href="#home"><img src="images/SVG/fmcv-logo-default.svg" alt="Logo" width={163}
                                                        height={94}/></a>
              </div>
              {/* Nav Menu */}
              <div className="nav-menu">
                <ul className="nav main-nav">
                  {/*<li className="active"><a className="scroll" href="#home">home</a></li>*/}
                  <li><a className="scroll" href="#about">about</a></li>
                  {/*<li><a className="scroll" href="#areas">Areas</a></li>*/}
                  {/*<li><a className="scroll" href="#features">Decoder</a></li>*/}
                  <li><a className="scroll" href="/blog">news</a></li>
                  <li><a className="scroll" href="#contactus">contact</a></li>
                  <li><a href={"/application"}><span className="teal-button" style={{
                    margin: '10px 0',
                    padding: '15px 40px',
                    borderRadius: 10,

                  }}>Get Started</span></a></li>
                  <li>&nbsp;</li>
                  {/*<GetStartedNav/>*/}
                  {/*<li><a className="btn-bubble" href="tel:305.222.7784" style={{paddingRight: '10px'}}><span>Call: 305.222.7784</span></a></li>*/}

                </ul>
              </div>
              {/* Dropdown Menu For Mobile Devices*/}
              <div className="dropdown mobile-drop">
                <a data-toggle="dropdown" className="mobile-menu" href="#"><i
                  className="fa fa-bars"/></a>
                <ul className="nav dropdown-menu fullwidth" role="menu">
                  {/*<li><a className="scroll" href="#home">home</a></li>*/}
                  <li><a className="scroll" href="#about">about</a></li>
                  {/*<li><a className="scroll" href="#areas">Areas</a></li>*/}
                  {/*<li><a className="scroll" href="#features">Decoder</a></li>*/}
                  <li><a className="scroll" href="/blog">News</a></li>
                  {/*<GetStartedNav/>*/}
                  <li><a className="scroll" href="#contactus">contact</a></li>
                  <li><a className="scroll" href="/application">Get Started</a></li>
                </ul>
              </div>
              <div className="clear"/>
            </div>
          </section>
          {/* End Navigation Section */}
          {/* About Section */}
          <section id="about" className="contain nav-link">
            {/* About Extended */}
            <div className="full-width no-padding ">
              <div className="full-width">
                {/* Second Header */}
                <div className="page-desc">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <h5>
                      <span>We are</span><br/> Architects <span>and</span> General
                      Contractors<span
                      style={{color: '#34bcaf'}}>.</span>
                    </h5>
                    <div className="underscore" style={{width: 140, height: 3}}/>
                    <br/>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <p>
                      Fix My Code Violation is a firm created by Studio Lamas Architects and Three County Construction,
                      both full-service firms specializing in architecture, construction, and engineering. We specialize
                      in correcting all Florida building and zoning code violations for commercial, industrial, and
                      residential properties.
                    </p>
                    <br/>
                    <EnterZipCode href={`/` + zipCode} value={zipCode}
                                  onChange={(event) => {
                                    setZipCode(event.target.value)
                                  }}/>
                  </div>
                </div>
              </div>
              <div className="clear"/>
            </div>
          </section>
          {/* End About Section */}
          <section id="areas"/>
          <section id="why-wisten" className="contain"
          >
            {/* Second Header */}
            <img src="images/SVG/violator.svg" className="stolen hidden-sm hidden-xs"
                 style={{position: 'absolute', bottom: 0, left: '50%', width: 'auto', height: '60%'}}/>
            <img src="images/start_process_bg.png"
                 style={{position: 'absolute', top: 0, left: 0, width: '100%', height: 'auto', zIndex: 0}}/>

            <div className={"inner"} style={{textAlign: 'right'}}>
              <div className="page-desc " style={{zIndex: 10}}>
                <h5 className="start-the-process" style={{textAlign: 'center', color: '#FFF'}}>
                  <br/>
                  Start <br/><span style={{color: '#004042'}}>the</span> <br/>Process<span
                  style={{color: '#004042'}}>.</span></h5>
                <div className="underscore"
                     style={{
                       backgroundColor: '#004042',
                       marginLeft: 'auto',
                       marginRight: 'auto',
                       float: 'none',
                       width: 160,
                       height: 3,
                       marginTop: 20
                     }}/>
                <br/>
                <div className={"col-md-6 col-sm-12 col-xs-12"}>
                  <p style={{margin: '50px 0', padding: 20}}>Our online sign up process takes only
                    a few minutes to complete and we only ask for information we need. You will be able to choose a
                    convenient time for one of our professionals to visit your property and make an assessment.
                  </p>
                  <div style={{marginTop: 10, padding: 10}}>
                    <StartButtonGroup/>
                  </div>
                </div>
              </div>
            </div>
            {/*<div className="inner" style={{maxWidth: '860px'}}>
              <div className="col-md-6 colsm-12 accordion" id="accordion2">
                <div className="accordion-head" style={{textAlign: 'center', fontFamily: '"Montserrat" !important'}}>
                  Residential
                </div>
                 accordion menu 1
                <div className="panel">
                  <div className="accordion-heading">
                    <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#coll-one">
                      <i className="fa fa-chevron-down"/>
                      Expired Permits
                    </a>
                  </div>
                  <div id="coll-one" className="accordion-body collapse">
                    <div className="accordion-inner">
                      We can re-open any Florida Expired Permit to stop fines or expedite home sales that get
                      complicated due to permit search requirements added to the standard sales contracts
                      adopted
                      by Florida Realtors and the Florida Bar in 2010. This change came in response to
                      unsuspecting buyers faced with code violations that can lead to liens on the property
                      years
                      after the purchase.
                    </div>
                  </div>
                </div>
                 accordion menu 2
                <div className="panel">
                  <div className="accordion-heading">
                    <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#coll-two">
                      <i className="fa fa-chevron-down"/>
                      Door, Window &amp; Shutter Permits
                    </a>
                  </div>
                  <div id="coll-two" className="accordion-body collapse">
                    <div className="accordion-inner">
                      One of the more common Florida Code Violations, window permits are always needed when
                      retrofitting windows in a home or building. Permits assure that proper anchoring is used
                      and
                      wind load calculations prove that each window can withstand the pressures of a
                      particular
                      opening.
                    </div>
                  </div>
                </div>
                 accordion menu 3
                <div className="panel">
                  <div className="accordion-heading">
                    <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#coll-three">
                      <i className="fa fa-chevron-down"/>
                      Concealed Work / As-Built Certificate
                    </a>
                  </div>
                  <div id="coll-three" className="accordion-body collapse">
                    <div className="accordion-inner">
                      In manny cases we are able to use As-Built Certificates to legalize concealed work with
                      minimal to no destructive testing using.
                    </div>
                  </div>
                </div>
                 accordion menu 4
                <div className="panel">
                  <div className="accordion-heading">
                    <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#coll-four">
                      <i className="fa fa-chevron-down"/>
                      Legalization of Additions
                    </a>
                  </div>
                  <div id="coll-four" className="accordion-body collapse">
                    <div className="accordion-inner">
                      As licensed Florida Architects and General Contractors, we can produce the required
                      drawings
                      to legalize your unpermitted work and perform any construction modifications needed to
                      make
                      your home meet Florida Building Code.
                    </div>
                  </div>
                </div>
                 accordion menu 5
                <div className="panel">
                  <div className="accordion-heading">
                    <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#coll-five">
                      <i className="fa fa-chevron-down"/>
                      Unsafe Structures
                    </a>
                  </div>
                  <div id="coll-five" className="accordion-body collapse">
                    <div className="accordion-inner">
                      Our team can do all the work required to have your building considered safe by the
                      building
                      department and get you back in your home quickly and affordably.
                    </div>
                  </div>
                </div>
                 accordion menu 6
                <div className="panel">
                  <div className="accordion-heading">
                    <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#coll-six">
                      <i className="fa fa-chevron-down"/>
                      Non-Destructive Testing
                    </a>
                  </div>
                  <div id="coll-six" className="accordion-body collapse">
                    <div className="accordion-inner">
                      With our in-house team of professionals and latest equipment we can scan and X-ray slabs
                      to
                      legalize structures or underground inspection cameras for sewer lines.
                    </div>
                  </div>
                </div>
                 accordion menu 7
                <div className="panel">
                  <div className="accordion-heading">
                    <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#coll-seven">
                      <i className="fa fa-chevron-down"/>
                      A/C Change Out Permits
                    </a>
                  </div>
                  <div id="coll-seven" className="accordion-body collapse">
                    <div className="accordion-inner">
                      Heat-Load Calculations and Florida Energy Calculations are just a few of the services we
                      can
                      provide to help you upgrade or legalize your A/C change out without triggering a
                      Building
                      Code Violation.
                    </div>
                  </div>
                </div>
              </div>
               accordion menu
              <div className="col-md-6 colsm-12 accordion" id="accordion3">
                <div className="accordion-head" style={{textAlign: 'center'}}>Commercial</div>
                 accordion menu 1
                <div className="panel">
                  <div className="accordion-heading">
                    <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion3" href="#coll-eight">
                      <i className="fa fa-chevron-down"/>
                      Expired Permits
                    </a>
                  </div>
                  <div id="coll-eight" className="accordion-body collapse">
                    <div className="accordion-inner">
                      We can re-open any Florida Expired Permit to stop fines or expedite home sales that get
                      complicated due to permit search requirements added to the standard sales contracts
                      adopted
                      by Florida Realtors and the Florida Bar in 2010. This change came in response to
                      unsuspecting buyers faced with code violations that can lead to liens on the property
                      years
                      after the purchase.
                    </div>
                  </div>
                </div>
                 accordion menu 2
                <div className="panel">
                  <div className="accordion-heading">
                    <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion3" href="#coll-nine">
                      <i className="fa fa-chevron-down"/>
                      40/50 Year Inspections
                    </a>
                  </div>
                  <div id="coll-nine" className="accordion-body collapse">
                    <div className="accordion-inner">
                      A structural and electrical inspection is required for all buildings in Miami-Dade and
                      Broward Counties, 40 years old (and every 10 years thereafter) and as Architects we
                      certify
                      your building for safety.
                    </div>
                  </div>
                </div>
                 accordion menu 3
                <div className="panel">
                  <div className="accordion-heading">
                    <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion3" href="#coll-ten">
                      <i className="fa fa-chevron-down"/>
                      Work Without Permit
                    </a>
                  </div>
                  <div id="coll-ten" className="accordion-body collapse">
                    <div className="accordion-inner">
                      Probably the most common building code violation, this has become our specialty. We can
                      produce the necessary drawings for permitting while incorporating the minimum amount of
                      changes to your existing work and save money.
                    </div>
                  </div>
                </div>
                 accordion menu 4
                <div className="panel">
                  <div className="accordion-heading">
                    <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion3"
                       href="#coll-eleven">
                      <i className="fa fa-chevron-down"/>
                      Concealed Work / As-Built Certificate
                    </a>
                  </div>
                  <div id="coll-eleven" className="accordion-body collapse">
                    <div className="accordion-inner">
                      n manny cases we are able to use As-Built Certificates to legalize concealed work with
                      minimal to no destructive testing using.
                    </div>
                  </div>
                </div>
                 accordion menu 5
                <div className="panel">
                  <div className="accordion-heading">
                    <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion3"
                       href="#coll-twelve">
                      <i className="fa fa-chevron-down"/>
                      Unsafe Structures
                    </a>
                  </div>
                  <div id="coll-twelve" className="accordion-body collapse">
                    <div className="accordion-inner">
                      Our team can do all the work required to have your building considered safe by the
                      building
                      department and get you back in your home quickly and affordably.
                    </div>
                  </div>
                </div>
                 accordion menu 6
                <div className="panel">
                  <div className="accordion-heading">
                    <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion3"
                       href="#coll-thirteen">
                      <i className="fa fa-chevron-down"/>
                      Sidewalk Cafe Permits
                    </a>
                  </div>
                  <div id="coll-thirteen" className="accordion-body collapse">
                    <div className="accordion-inner">
                      We can legalize outside seating for restaurants and cafes by producing the necessary
                      site
                      plan, seating drawings and Life Safety Drawings to get your business back on track and
                      stop
                      the fines.
                    </div>
                  </div>
                </div>
                 accordion menu 14
                <div className="panel last">
                  <div className="accordion-heading">
                    <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion3"
                       href="#coll-fourteen">
                      <i className="fa fa-chevron-down"/>
                      Railing, Stair &amp; Balcony Inspections
                    </a>
                  </div>
                  <div id="coll-fourteen" className="accordion-body collapse">
                    <div className="accordion-inner">
                      We perform balcony and railing inspections throughout South Florida. When a HOTEL/CONDO
                      building has three (3) or more stories, the Florida Administrative Code for Public
                      Lodging
                      Establishments (Section 509.2112) demands that you MUST submit a Certificate of Balcony
                      Inspection every three (3) years to Florida officials. We can help you stay in
                      compliance.
                    </div>
                  </div>
                </div>
              </div>
              <div className="clear"/>
            </div>*/}
          </section>
          {/* Features Section */}
          <section id="features" className="contain nav-link">
            <div className="inner" style={{paddingBottom: '100px'}}>
              {/* Second Header */}
              <div className="page-desc" style={{color: '#fff'}}>
                <div className="col-lg-5 col-md-5 col-sm-12">
                  <h5 style={{color: '#2d526b'}}>
                    <span>This</span> Calls <span>for</span> <br/>The Decoder<span
                    style={{color: '#34bcaf'}}>.</span>
                  </h5>
                  <div className="underscore" style={{width: 160, height: 3}}/>
                  <br/>
                </div>
                <div className="col-lg-7 col-md-7 col-sm-12" style={{paddingTop: '0px'}}>
                  <p style={{color: '#2d526b', textAlign: 'justify'}}>
                    Tap into the power of our “Decoder,” a complete system to resolve all issues related to local code
                    requirements. Here’s how it works:
                  </p>
                </div>
              </div>
              <div className="f-iphone parallax">
                <ul className="f-iphone-left">
                  <li className="f-box animated" data-animation="fadeInRight" data-animation-delay={0}>
                    <div className="f-box-head"><span>1.</span> Breathe
                    </div>
                  </li>
                  <li className="f-box animated" data-animation="fadeInRight" data-animation-delay={200}>
                    <div className="f-box-head"><span>2.</span> Call Us
                    </div>
                  </li>
                  <li className="f-box animated" data-animation="fadeInRight" data-animation-delay={400}>
                    <div className="f-box-head"><span>3.</span> Stop the
                      Fines
                    </div>
                  </li>
                  <li className="f-box animated" data-animation="fadeInRight" data-animation-delay={600}>
                    <div className="f-box-head"><span>4.</span> Do Some
                      Digging
                    </div>
                  </li>
                  <li className="f-box animated" data-animation="fadeInRight" data-animation-delay={800}>
                    <div className="f-box-head"><span>5.</span> Present
                      the Plans
                    </div>
                  </li>
                </ul>
                <ul className="f-iphone-right">

                  <li className="f-box animated" data-animation="fadeInRight" data-animation-delay={1000}>
                    <div className="f-box-head"><span>6.</span> Permit + Fees</div>
                  </li>
                  <li className="f-box animated" data-animation="fadeInRight" data-animation-delay={1200}>
                    <div className="f-box-head"><span>7.</span> Do the Work</div>
                  </li>
                  <li className="f-box animated" data-animation="fadeInRight" data-animation-delay={1400}>
                    <div className="f-box-head"><span>8.</span> Inspections</div>
                  </li>

                  <li className="f-box animated" data-animation="fadeInRight" data-animation-delay={1600}>
                    <div className="f-box-head"><span>9.</span> Close Out</div>
                  </li>
                  <li className="f-box animated" data-animation="fadeInRight" data-animation-delay={1800}>
                    <div className="f-box-head"><span>10.</span> Enjoy whats yours</div>
                  </li>
                </ul>
              </div>

              <div className="clear"/>
            </div>
            {/* End Inner div */}
          </section>
          {/* End Features Section */}
          {/* Testimonials Section */}
          <section id="testimonial" className="contain parallax4" style={{display: 'none'}}>
            {/* Testimonials Top Icon */}
            <div className="contain-logo">
              <i className="fa fa-comments "/>
            </div>
            {/* Testimonials Inner */}
            <div className="inner testimonial">
              {/* Testimonials Slides */}
              <div className="testimonials">
                {/* Testimonials Slide */}
                <div className="monial">
                  <h1 className="big">CREATIVITY IS ALLOWING YOURSELF TO <span className="red">MAKE MISTAKES</span>.
                    ART
                    IS
                    KNOWING WHICH ONES TO KEEP.</h1>
                  <p className="name">- Scott Adams -</p>
                </div>
                {/* Testimonials Slide */}
                <div className="monial">
                  <h1 className="big">Consultants have credibility because <span className="red">they are </span>not
                    dumb
                    enough to work at your company.</h1>
                  <p className="name">- Scott Adams -</p>
                </div>
                {/* Testimonials Slide */}
                <div className="monial">
                  <h1 className="big">You can never underestimate the <span
                    className="red">stupidity </span>of the
                    general
                    public.</h1>
                  <p className="name">- Scott Adams -</p>
                </div>
                <div className="clear"/>
              </div>
            </div>
          </section>
          {/* End Testimonials Section */}
          <div className="clear"/>
          {/* Skills Section */}
          <section id="skills" className="contain extended" style={{display: 'none'}}>
            {/* Features Top Icon */}
            <div className="contain-logo">
              <i className="fa fa-rocket "/>
            </div>
            <div className="inner">
              {/* Tabs */}
              <div className="tabs">
                {/* Nav Menu */}
                <ul className="nav nav-tabs" id="tab-menu">
                  <li className="active"><a href="#first" data-toggle="tab">Design</a></li>
                  <li><a href="#second" data-toggle="tab">Company</a></li>
                  <li><a href="#third" data-toggle="tab">Suport</a></li>
                  <li><a href="#fourth" data-toggle="tab">Photography</a></li>
                </ul>
                <div className="tab-content">
                  {/* Icon Left */}
                  <div className="tab-pane fade in active" id="first">
                    <div className="tab-icon">
                      <img src="images/tab-icon1.png" alt=""/>
                    </div>
                    <div className="tab-desc">
                      <p>There are many variations of passages Lorem Ipsum available, but majority
                        have
                        suffered
                        alteration in some form, injected humour, randomised words which don't
                        look even
                        slightly believable. If you are going to use a passage em Ipsum, you
                        need to sure
                        there
                        isn't anything embarrassing hidden in the middle of text. All the Lorem
                        Ipsum
                        generators
                        on the Internet tend repeat predefined chunks necessary, making this the
                        first true
                        generator Internet. </p>
                      <p>Which don't look even slightly believable. If you are going use a passage
                        of Ipsum,
                        you
                        need be sure there isn't anything embarrassing hidden in the predefined
                        chunks as
                        necessary.</p>
                    </div>
                    <div className="clear"/>
                  </div>
                  {/* Icon right */}
                  <div className="tab-pane fade" id="second">
                    <div className="tab-desc">
                      <p>There are many variations of passages Lorem Ipsum available, but majority
                        have
                        suffered
                        alteration in some form, injected humour, randomised words which don't
                        look even
                        slightly believable. If you are going to use a passage em Ipsum, you
                        need to sure
                        there
                        isn't anything embarrassing hidden in the middle of text. All the Lorem
                        Ipsum
                        generators
                        on the Internet tend repeat predefined chunks necessary, making this the
                        first true
                        generator Internet. </p>
                      <p>Which don't look even slightly believable. If you are going use a passage
                        of
                        predefined
                        chunks as necessary.</p>
                    </div>
                    <div className="tab-icon">
                      <img src="images/tab-icon3.png" alt=""/>
                    </div>
                    <div className="clear"/>
                  </div>
                  {/* Only Text */}
                  <div className="tab-pane fade" id="third">
                    <div className="tab-desc only">
                      <p>There are many variations of passages Lorem Ipsum available, but majority
                        have
                        suffered
                        alteration in some form, injected humour, randomised words which don't
                        look even
                        slightly believable. If you are going to use a passage em Ipsum, you
                        need to sure
                        there
                        isn't anything embarrassing hidden in the middle of text. All the Lorem
                        Ipsum
                        generators
                        on the Internet tend repeat predefined chunks necessary, making this the
                        first true
                        generator Internet. </p>
                      <p>Which don't look even slightly believable. If you are going use a passage
                        of Ipsum,
                        you
                        need be sure there isn't anything embarrassing hidden in the predefined
                        chunks as
                        necessary.</p>
                    </div>
                    <div className="clear"/>
                  </div>
                  {/* Icon left */}
                  <div className="tab-pane fade" id="fourth">
                    <div className="tab-icon">
                      <img src="images/tab-icon2.png" alt=""/>
                    </div>
                    <div className="tab-desc">
                      <p>Which don't look even slightly believable. If you are going use a passage
                        of Ipsum,
                        you
                        need be sure there isn't anything embarrassing hidden in the predefined
                        chunks as
                        necessary.</p>
                    </div>
                    <div className="clear"/>
                  </div>
                </div>
                {/* End tab-content div */}
              </div>
              {/* End Tabs div */}
              {/* Skills */}
              <div className="Progress-bars">
                <div className="head">Our Skills</div>
                <div className="Progress-content">
                  <div className="progress-bars">
                    {/* Progress Texts */}
                    <div className="progress-texts">
                      <span className="progress-name">Graphic Design</span>
                      <span className="progress-value">65%</span>
                      <div className="clear"/>
                    </div>
                    {/* Progress Tables */}
                    <div className="progress progress-striped active">
                      <div className="progress-bar progress-bar-danger" role="progressbar"
                           aria-valuenow={45}
                           aria-valuemin={0} aria-valuemax={100} style={{width: '65%'}}/>
                    </div>
                  </div>
                  <div className="progress-bars">
                    {/* Progress Texts */}
                    <div className="progress-texts">
                      <span className="progress-name">Photography</span>
                      <span className="progress-value">50%</span>
                      <div className="clear"/>
                    </div>
                    {/* Progress Tables */}
                    <div className="progress progress-striped active">
                      <div className="progress-bar progress-bar-danger" role="progressbar"
                           aria-valuenow={45}
                           aria-valuemin={0} aria-valuemax={100} style={{width: '50%'}}/>
                    </div>
                  </div>
                  <div className="progress-bars">
                    {/* Progress Texts */}
                    <div className="progress-texts">
                      <span className="progress-name">HTML / CSS</span>
                      <span className="progress-value">75%</span>
                      <div className="clear"/>
                    </div>
                    {/* Progress Tables */}
                    <div className="progress progress-striped active">
                      <div className="progress-bar progress-bar-danger" role="progressbar"
                           aria-valuenow={45}
                           aria-valuemin={0} aria-valuemax={100} style={{width: '75%'}}/>
                    </div>
                  </div>
                  <div className="progress-bars">
                    {/* Progress Texts */}
                    <div className="progress-texts">
                      <span className="progress-name">WordPress</span>
                      <span className="progress-value">70%</span>
                      <div className="clear"/>
                    </div>
                    {/* Progress Tables */}
                    <div className="progress progress-striped active">
                      <div className="progress-bar progress-bar-danger" role="progressbar"
                           aria-valuenow={45}
                           aria-valuemin={0} aria-valuemax={100} style={{width: '70%'}}/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clear"/>
            </div>
            {/* End Inner div */}
          </section>
          {/* End Features Section */}
          {/* Contact Section */}
          <div id="contactus"/>
          <ContactUs/>
          {/* End contact Section */}
          {/* Subscribe Section */}
          <section id="subscribe" className="contain" style={{display: 'none'}}>
            <div className="inner subscribe">
              {/*Subscribe Left */}
              <div className="col-xs-7 subs left">
                {/*Subscribe Left Icon */}
                <a className="left-icon">
                  <i className="fa fa-envelope-o"/>
                </a>
                {/*Subscribe Head and Texts */}
                <div className="text">
                  <h1>
                    subscribe to our <span> newsletter ?</span>
                  </h1>
                  <p>
                    This is Photoshop's version of Lorem Ipsum. Proin gravida.
                  </p>
                </div>
                <div className="clear"/>
              </div>
              {/*Subscribe Right */}
              <div className="col-xs-5 subs right">
                <form id="subscribe-mail" method="post" action="php/newsletter.php">
                  {/*Subscribe input */}
                  <input type="email" className="subscribe-mail" required="required" id="e-mail"
                         placeholder="Your mail adress"/>
                  {/*Subscribe Button */}
                  <button type="submit" className="subscribe-btn subs">subscribe</button>
                </form>
              </div>
              <div className="clear"/>
            </div>
            {/* End Subscribe inner */}
          </section>
          {/* End Subscribe Section */}
          {/*Contact Section */}
          <section id="contact" className="contain nav-link" style={{display: 'none'}}>
            Google Map
            <div id="map"/>
            End Google Map
          </section>
          {/*End Contact Section */}
          <section id="news" className="contain">
            <div className="inner">
              {/* Iphone images */}
              <div className="w-iphone animated col-lg-5 col-md-5 col-sm-12 hidden-xs"
                   data-animation="fadeInLeft"
                   data-animation-delay={0}>
                <img src="images/SVG/newspaper.svg" alt="wisten-iphone"/>
              </div>
              <div className="page-desc col-lg-6 col-md-6 col-sm-12 col-xs-12"
                   style={{textAlign: 'left', padding: 20}}>
                <h5 style={{color: '#004042'}}>
                  Check <span className="checkSpan">out <br/> the</span> Latest <br/>Building
                  News<span
                  style={{color: '#3eb5a0'}}>.</span>
                </h5>
                <div className="underscore" id="checkUnderScore" style={{width: 140, height: 3}}/>
                <br/>
                <p style={{
                  color: '#004042',
                  fontSize: 15,
                  marginBottom: 10,
                  textAlign: 'justify',
                  fontWeight: 500
                }}>
                  FixMyCodeViolation.com also like to keep you informed. We do this by keeping you up-to-date on all the
                  latest news, code changes, explanations, and case studies around the building and construction across
                  the city of Miami.<br/><br/>
                  <a className="home-button hidden-xs" style={{float: 'left'}} href="/blog"
                     target="">Take me
                    there</a>
                  <a className="home-button hidden-md hidden-lg hidden-sm" href="/blog" target="">Take
                    me
                    there</a>
                </p>
              </div>
              <div className="w-iphone animated col-xs-12 hidden-lg hidden-sm hidden-md hidden-xs"
                   data-animation="fadeInLeft"
                   data-animation-delay={0} style={{width: '100%', textAlign: 'center', marginLeft: '0'}}>
                <img src="images/SVG/newspaper.svg" alt="wisten-iphone"/>
              </div>
              <div className="clear"/>
            </div>
          </section>
          {/* Footer Section */}
          <Footer/>
          {/* End Footer Section */}
          {/* Back To Top Button */}
          <section id="back-top">
            <a href="#home" className="scroll"/>
          </section>
        </div>
      </div>
      <Helmet>
        <script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>
        <script type="text/javascript" src="./js/plugins.js"></script>
        <script type="text/javascript" src="./js/main.js"></script>
        <script type="text/javascript" src="./js/custom.js"></script>
        <script src="https://www.google.com/recaptcha/api.js"></script>
      </Helmet>
    </React.Fragment>
  );
}
