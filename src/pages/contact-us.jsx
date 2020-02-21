import React, { useState } from 'react';
import classNames from 'classnames';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import SEO from '../components/seo';
import Header from '../components/header';
import { HeaderBanner } from '../sections/common/TitleSection';

import styles from './contact-us.module.css';

const hubspotForm = {
  portalId: '5321663',
  guid: '6e75c59c-6fba-4507-a42b-1525ace4ea8c',
};

const ContactUsForm = ({ values, touched, errors, handleChange, handleSubmit }) => (
  <form
    id="contact-form"
    className={styles.ContactUsForm}
    method="POST"
    action={`https://forms.hubspot.com/uploads/form/v2/${hubspotForm.portalId}/${hubspotForm.guid}`}
    onSubmit={handleSubmit}
  >
    <fieldset className={styles.ContactUsFormFieldset}>
      <input
        type="text"
        id="firstname"
        name="firstname"
        className={classNames('w-input', styles.ContactUsFormFieldsetItem)}
        value={values.firstname}
        onChange={handleChange}
        placeholder="First Name*"
      />
      <input
        type="text"
        id="lastname"
        name="lastname"
        className={classNames('w-input', styles.ContactUsFormFieldsetItem)}
        value={values.lastname}
        onChange={handleChange}
        placeholder="Last Name*"
      />
    </fieldset>
    <fieldset className={styles.ContactUsFormFieldset}>
      <input
        type="text"
        id="company"
        name="company"
        className={classNames('w-input', styles.ContactUsFormFieldsetItem)}
        value={values.company}
        onChange={handleChange}
        placeholder="Company Name*"
      />
      <input
        type="email"
        id="email"
        name="email"
        className={classNames('w-input', styles.ContactUsFormFieldsetItem)}
        value={values.email}
        onChange={handleChange}
        placeholder="Company Email*"
      />
    </fieldset>
    <fieldset>
      <textarea
        id="message"
        name="message"
        className={classNames('w-input', styles.ContactUsFormTextArea)}
        rows="6"
        value={values.message}
        onChange={handleChange}
        placeholder="Tell us about your use case, data size, and any other information we should know.*"
      ></textarea>
    </fieldset>
    <button
      type="submit"
      className={classNames('button', 'w-button', styles.ContactUsFormSubmitButton)}
    >
      Contact Me Within 24 Hours
    </button>
  </form>
);

const WrappedContactUsForm = withFormik({
  // Camelcase is not used because the built HubSpot uses all lowercase.
  // Name was determined by first inspecting the HTML after first embedding
  // the JavaScript form
  mapPropsToValues: () => ({ firstname: '', lastname: '', company: '', email: '', message: '' }),

  handleSubmit: values => {
    alert(JSON.stringify(values, null, 2));
    // submitDataToHubSpot(firstName, lastName, companyName, companyEmail, message);
  },
})(ContactUsForm);

const ContactUs = () => {
  return (
    <div>
      <SEO
        title="Contact Us"
        keywords={[`rockset`, `data`, `apps`, `contact`, `sales`]}
        description="Tell us about your use case, data size, and any other information we should know."
      />
      <Header />
      <HeaderBanner />
      <div className={classNames('container', 'w-container', styles.ContactUsSection)}>
        <div className={styles.ContactUsCard}>
          <h1 className={styles.ContactUsCardHeading}>Contact Sales</h1>
          <WrappedContactUsForm />
        </div>
      </div>
    </div>
  );
};

const submitDataToHubSpot = (firstName, lastName, companyName, companyEmail, message) => {
  // https://developers.hubspot.com/docs/methods/forms/submit_form_v3
  const apiEndpoint = `https://api.hsforms.com/submissions/v3/integration/submit/${hubspotForm.portalId}/${hubspotForm.guid}`;
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // Typical action to be performed when the document is ready:
      console.log(JSON.parse(xhr.responseText));
    }
  };
  xhr.open('POST', apiEndpoint, true);
  xhr.send();
};

export default ContactUs;
