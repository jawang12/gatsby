import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from 'gatsby-plugin-intl';
import classes from './header.module.scss';
import Language from './language';

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
          <li className={classes.Language}>
            <Language />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
