import React from 'react';

const Footer = (props) => {
  return (
    <section id="footer">
      <div className="inner footer">
        {/* Phone */}
        <div className="col-xs-4 footer-box animated" data-animation="flipInY"
             data-animation-delay={0}>
          {/*<a className="footer-links">
                                    <i className="fa fa-mobile"/>
                                    <i className="fa fa-phone"/>
                                </a>
                                <p className="footer-text">
                                    <span>Phone</span>:<span>305.222.7784</span><br/>
                                    <span>Fax</span>:<span>305.946.0141</span><br/>
                                    <span>14006 NW 82 Ave<br/>
                    Miami, FL 33016</span>
                                </p>*/}
        </div>
        {/* Socials and Mail */}
        <div className="col-xs-12 footer-box animated" data-animation="flipInY"
             data-animation-delay={0}>
          {/* Social 1 */}
          <a className="footer-links" href="https://www.facebook.com/FixMyCodeViolation/"
             target="_blank"><i
            className="fa fa-facebook"/></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {/* Social 2 */}
          <a className="footer-links" href="https://www.instagram.com/fixmycodeviolation/"
             target="_blank"><i
            className="fa fa-instagram"/></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {/* Social 3 */}
          <a className="footer-links"
             href="https://www.youtube.com/channel/UC530Po97Hi01NUO6xGhg3EQ/featured?disable_polymer=1"
             target="_blank"><i className="fa fa-youtube"/></a>
          {/* Social 4 */}
          {/*<a className="footer-links" href="https://plus.google.com/u/0/109413375390959036469" target="_blank"><i*/}
          {/*className="fa fa-google-plus"/></a>*/}
          {/* Mail */}
          {/*<p className="footer-text">
                  <span>Mail</span>:<span><a
                  href="mailto:info@FixMyCodeViolation.com">info@FixMyCodeViolation.com</a></span>
                </p>*/}
          {/* Copyright */}
          <p className="footer-text copyright">
            ©2020 Fix My Code Violation. All rights reserved.
          </p>
          <p><span style={{color: '#ccc', fontSize: '12px'}}>Powered by:</span><span
            style={{color: '#34bcaf !important', fontSize: '12px'}}><a href="http://thinksglassfull.com/"
                                                                       target="_blank"> Glass Full Solutions</a></span>
          </p>
        </div>
        {/* Adress */}
        <div className="col-xs-4 footer-box animated" data-animation="flipInY"
             data-animation-delay={0}>
          {/* Icon
                                <a className="footer-links">
                                    <i className="fa fa-certificate"/>
                                </a>
                                <p className="footer-text">
                                    Three County Construction <br/><span
                                    style={{fontSize: '10px'}}>License#CGC059834</span><br/>
                                    Studio Lamas Architects<br/> <span
                                    style={{fontSize: '10px', lineHeight: '5px !important'}}>Lincese # AA26003411</span>
                                </p>*/}
        </div>
        <div className="clear"/>
      </div>
      {/* End Footer inner */}
    </section>
  )
};

export default Footer;
