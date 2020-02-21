import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import classNames from 'classnames';
import SEO from '../components/seo';
import Header from '../components/header';
import { HeaderBanner } from '../sections/common/TitleSection';

import styles from './contact-us.module.css';

const ContactUs = () => {
  const embeddedFormMode = false;
  const handleFormSubmit = e => {
    e.preventDefault();
  };

  useEffect(() => {
    console.log(window.hubspot);
  }, []);

  return (
    <div>
      <Helmet>
        <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/v2.js"></script>
      </Helmet>
      <SEO
        title="Contact Us"
        keywords={[`rockset`, `data`, `apps`, `contact`, `sales`]}
        description="Tell us about your use case, data size, and any other information we should know."
      />
      <Header />
      <HeaderBanner />
      <div className={classNames('container', 'w-container', styles.ContactUsSection)}>
        <div className={styles.ContactUsCard}>
          {embeddedFormMode && <form id="hubspot-embedded-contact-form"></form>}
          {!embeddedFormMode && (
            <form id="contact-form" className={styles.ContactUsForm}>
              <h1 className={styles.ContactUsFormHeading}>Contact Sales</h1>
              <fieldset className={styles.ContactUsFormFieldset}>
                <input
                  type="text"
                  className={classNames('w-input', styles.ContactUsFormFieldsetItem)}
                  placeholder="First Name*"
                />
                <input
                  type="text"
                  className={classNames('w-input', styles.ContactUsFormFieldsetItem)}
                  placeholder="Last Name*"
                />
              </fieldset>
              <fieldset className={styles.ContactUsFormFieldset}>
                <input
                  type="text"
                  className={classNames('w-input', styles.ContactUsFormFieldsetItem)}
                  placeholder="Company Name*"
                />
                <input
                  type="text"
                  className={classNames('w-input', styles.ContactUsFormFieldsetItem)}
                  placeholder="Company Email*"
                />
              </fieldset>
              <fieldset>
                <textarea
                  className={classNames('w-input', styles.ContactUsFormTextArea)}
                  rows="6"
                  placeholder="Tell us about your use case, data size, and any other information we should know.*"
                ></textarea>
              </fieldset>
              <button
                type="submit"
                onClick={handleFormSubmit}
                className={classNames('button', 'w-button', styles.ContactUsFormSubmitButton)}
              >
                Contact Me Within 24 Hours
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
