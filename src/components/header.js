import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import classes from './header.module.scss';

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header className={classes.Header}>
      <h1>
        <Link to="/" className={classes.Title}>
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className={classes.NavList}>
          <li>
            <Link
              className={classes.NavItem}
              activeClassName={classes.ActiveNavItem}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              activeClassName={classes.ActiveNavItem}
              className={classes.NavItem}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              activeClassName={classes.ActiveNavItem}
              className={classes.NavItem}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              activeClassName={classes.ActiveNavItem}
              className={classes.NavItem}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
