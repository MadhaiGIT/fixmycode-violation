import React from 'react';
import {Grid, Toolbar, Link} from '@material-ui/core';

const Header = () => {
  return (
    <section id="navigation" className="shadow" style={{position: 'fixed',top: 0}}>
      <div className="inner navigation">
        {/* Logo Img */}
        <div className="logo">
          <a className="scroll" href="/"><img src="/images/SVG/fmcv-logo-default.svg" alt="Logo" width={163} height={94}/></a>
        </div>

        <Toolbar style={{alignItems: 'center', justifyContent: 'space-between', height: 'inherit'}}>
          <Grid justify={'space-between'} alignItems={'center'} container>
            <Grid />
            <Grid style={{justifySelf: 'flex-end', textAlign: 'right', alignItems: 'center'}} item>
              <div style={{fontFamily: '\'Poppins\', sans-serif', color: '#17c787', fontSize: '1.2em', fontWeight: 'bold'}}>QUESTIONS?
              </div>
              <div style={{color: '#000', fontSize: '1.6em'}}>
                <a href={'tel:1-800-516-2399'} style={{textDecoration: 'none', color: 'inherit'}}>800.516.2399</a>
              </div>
            </Grid>

          </Grid>
        </Toolbar>
        <div className="clear"/>
      </div>
    </section>
  );
};

export default Header;
