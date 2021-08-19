import React from 'react';

const ContactUs = (props) => {
  return (
    <section id="wait_call" className="contain nav-link">
      <div className="inner">
        <div className="page-desc" style={{color: '#fff'}}>
          <div className={"row"}>
            <div className="col-lg-5 col-md-5 col-sm-12 ">
              <h5 style={{color: '#004042'}}>
                Don't Wait<span style={{color: '#06B59F', fontWeight: 900}}>!</span><br/> Call <span style={{color: '#06B59F'}}>for</span><br/>Help Today<span
                style={{color: '#06B59F', fontWeight: 900}}>.</span>
              </h5>
              <div className="underscore"
                   style={{width: 160, height: 3, color: '#001426', backgroundColor: '#001426'}}/>


            </div>
            <div className="col-lg-7 col-md-7 col-sm-12" style={{paddingTop: '80px'}}>
              <p style={{color: '#2d526b', fontWeight: 500}}>
                We fight the city on code violations every day, and we don’t stop till we win. We’ve saved countless
                people time, money, and unnecessary stress.We are confident we can help you too - no matter your
                situation. If the city has come calling, let us fight for you. Get in touch for a consultation and
                STOP THE FINES TODAY!</p>

            </div>
          </div>
          <div className={"row"} style={{paddingTop: '30px'}}>
            <div className="col-lg-5 col-md-5 col-sm-12 ">
              <div style={{
                fontSize: '32px',
                color: 'rgba(0,64,66,1.0)',
                textTransform: 'none',
                fontWeight: 900,
                // display: 'flex'
              }} className="row">
                <div className="col-xs-7 col-sm-12 col-md-12 col-lg-12"
                     style={{textAlign: 'left', paddingTop: 10, paddingBottom: 10}}>
                    <span id="callNumber" style={{
                      fontSize: 24,
                      textTransform: 'none',
                      fontWeight: 700,
                    }}>1.800.516.2399</span>
                </div>
                <div className="col-xs-5 col-sm-12 col-md-12 col-lg-12">
                  <a id="callNow" className="home-button teal-button" style={{
                    float: 'left',
                    borderRadius: 10,
                    textTransform: 'none',
                    fontSize: 15,
                    fontWeight: 600,
                  }}
                     href="tel:18005162399">
                    Call Now</a>
                </div>
                <br/>
              </div>
            </div>
            <div className="col-lg-7 col-md-7 col-sm-12">
              <div className="contact-form">
                <h1 style={{textAlign: 'left', fontWeight: 800, color: '#001426'}}><span>or</span> Email Us</h1>
                <form id="contact-us" action="php/new-form.php" method="post">
                  <div className={"row"}>
                    <div className="col-lg-12 col-md-12 col-sm-12">

                      <input type="text" name="sender_full_name"
                             placeholder="Full Name" required
                             className="form"
                             size={40}/>

                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <input type="text" name="sender_phone" placeholder="Phone Number"
                             className="form" size={40}/>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <input type="email" name="sender_email" placeholder="Email"
                             required className="form"
                             size={40}/>
                    </div>
                    {/*<div className="col-lg-12 col-md-12 col-sm-12">*/}
                      {/*<select name="sender_position" className="form" style={{color: "#2D526B"}}>*/}
                        {/*<option value={"business_owner_manager"}>Business Owner/Manager</option>*/}
                      {/*</select>*/}
                    {/*</div>*/}
                    <div className="col-lg-12 col-md-12 col-sm-12">
                    <textarea name="comment" className="form text"
                              placeholder="Please enter your message" rows={4}
                              cols={39} defaultValue={""}/>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      {/*<div className="g-recaptcha" style={{textAlign: 'center'}}
                                                     data-sitekey="6LeUaigUAAAAABVjRrXIBiHQyXogKCne8IZJcut5"/>*/}
                    </div>
                      <div className="send_message_btn col-lg-6 col-md-6 col-sm-12"><input type="submit"
                                                                                               value="Send Message Now"
                                                                                               className="form-btn teal-button"
                                                                                               style={{
                                                                                                 padding: '14px 20px'
                                                                                               }}/></div>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="clear"/>
      </div>
    </section>

  );
};

export default ContactUs;
