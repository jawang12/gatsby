import React from 'react';
import Header from './header';
import Footer from './footer';
import classes from './layout.module.scss';

const Layout = ({ children }) => (
  <div className={classes.Container}>
    <div className={classes.Content}>
      <Header />
      {children}
    </div>
    <Footer />
  </div>
);

export default Layout;
