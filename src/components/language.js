import React from 'react';
import { IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl';
import classes from './language.module.scss';

const languageName = {
  en: 'English',
  es: 'Spanish'
};

const Language = () => {
  return (
    <div className={classes.Container}>
      <IntlContextConsumer>
        {/* renamed variable on line 14*/}
        {({ languages, language: currentLang }) =>
          languages.map((language) => (
            <div
              className={classes.Item}
              key={language}
              onClick={() => changeLocale(language)}
              style={{
                color: currentLang === language ? 'orange' : '#999999'
              }}
            >
              {languageName[language]}
            </div>
          ))
        }
      </IntlContextConsumer>
    </div>
  );
};

export default Language;
