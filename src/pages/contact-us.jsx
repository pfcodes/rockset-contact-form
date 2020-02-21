import React, { useState } from 'react';
import classNames from 'classnames';
import { withFormik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import SEO from '../components/seo';
import Header from '../components/header';
import { HeaderBanner } from '../sections/common/TitleSection';

import styles from './contact-us.module.css';

const hubspotForm = {
  portalId: '5321663',
  guid: '6e75c59c-6fba-4507-a42b-1525ace4ea8c',
};

const ContactUsForm = ({ values, handleChange, handleSubmit }) => (
  <form
    id="contact-form"
    method="POST"
    action={`https://forms.hubspot.com/uploads/form/v2/${hubspotForm.portalId}/${hubspotForm.guid}`}
    className={styles.ContactUsForm}
    onSubmit={handleSubmit}
  >
    {/*
        Chrome does not allow using fieldset as a flexbox container so [role="group"] is used
        instead (https://stackoverflow.com/questions/28078681/why-cant-fieldset-be-flex-containers)
    */}
    <div role="group" className={styles.ContactUsFormInlineFieldset}>
      <div className={styles.ContactUsFormField}>
        <ErrorMessage name="firstname">
          {msg => <div className={styles.ContactUsFormFieldError}>{msg}</div>}
        </ErrorMessage>
        <input
          type="text"
          id="firstname"
          name="firstname"
          className={'w-input'}
          value={values.firstname}
          onChange={handleChange}
          placeholder="First Name*"
        />
      </div>
      <div className={styles.ContactUsFormField}>
        <ErrorMessage name="lastname">
          {msg => <div className={styles.ContactUsFormFieldError}>{msg}</div>}
        </ErrorMessage>
        <input
          type="text"
          id="lastname"
          name="lastname"
          className="w-input"
          value={values.lastname}
          onChange={handleChange}
          placeholder="Last Name*"
        />
      </div>
    </div>
    <div role="group" className={styles.ContactUsFormInlineFieldset}>
      <div className={styles.ContactUsFormField}>
        <ErrorMessage name="company">
          {msg => <div className={styles.ContactUsFormFieldError}>{msg}</div>}
        </ErrorMessage>
        <input
          type="text"
          id="company"
          name="company"
          className="w-input"
          value={values.company}
          onChange={handleChange}
          placeholder="Company Name*"
        />
      </div>
      <div className={styles.ContactUsFormField}>
        <ErrorMessage name="email">
          {msg => <div className={styles.ContactUsFormFieldError}>{msg}</div>}
        </ErrorMessage>
        <input
          type="email"
          id="email"
          name="email"
          className="w-input"
          value={values.email}
          onChange={handleChange}
          placeholder="Company Email*"
        />
      </div>
    </div>
    <fieldset>
      <ErrorMessage name="message">
        {msg => <div className={styles.ContactUsFormFieldError}>{msg}</div>}
      </ErrorMessage>
      <textarea
        id="message"
        name="message"
        className={classNames('w-input', styles.ContactUsFormTextArea)}
        rows="6"
        value={values.message}
        onChange={handleChange}
        placeholder="Tell us about your use case, data size, and any other information we should know.*"
      />
    </fieldset>
    <button
      type="submit"
      className={classNames('button', 'w-button', styles.ContactUsFormSubmitButton)}
    >
      Contact Me Within 24 Hours
    </button>
  </form>
);

const WrappedContactUsForm = ({ handleSubmit }) => {
  const FormWithFormik = withFormik({
    // Camelcase is not used because the built HubSpot form uses all lowercase.
    // This was discovered after injecting the embedded form and inspecting
    // the HTML elements. Please keep these names in sync with the backend.
    mapPropsToValues: () => ({ firstname: '', lastname: '', company: '', email: '', message: '' }),

    validationSchema: Yup.object().shape({
      firstname: Yup.string().required('Please enter your first name.'),
      lastname: Yup.string().required('Please enter your last name.'),
      company: Yup.string().required('Please enter your company name.'),
      email: Yup.string()
        .email('Please enter a valid e-mail address.')
        .required('Please enter your company e-mail.'),
      message: Yup.string().required('Please enter a message.'),
    }),

    handleSubmit,
  })(ContactUsForm);

  return <FormWithFormik />;
};

const ContactUs = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const submitDataToHubSpot = dataObject => {
    // https://developers.hubspot.com/docs/methods/forms/submit_form_v3
    const apiEndpoint = `https://api.hsforms.com/submissions/v3/integration/submit/${hubspotForm.portalId}/${hubspotForm.guid}`;
    let fields = [];
    for (let [name, value] of Object.entries(dataObject)) {
      fields.push({ name, value });
    }

    // XMLHttpRequest in use instead of fetch not used because I'm
    // unaware of Rockset's browser support targets.
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      // TODO: Handle error state
      if (this.readyState == 4 && this.status == 200) {
        setFormSubmitted(true);
      }
    };
    xhr.open('POST', apiEndpoint, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({ fields }));
  };

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
          {formSubmitted && (
            <div>Thank you for reaching out to sales. We'll be in touch in the next 24 hours.</div>
          )}
          {!formSubmitted && (
            <WrappedContactUsForm handleSubmit={values => submitDataToHubSpot(values)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
