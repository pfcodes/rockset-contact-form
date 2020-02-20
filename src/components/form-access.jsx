import React from 'react';
import { submitForm } from '../utils/hubspot.js';
import { ReCaptcha } from 'react-recaptcha-google';
import styled from 'styled-components';

const FormWrapper = styled.div`
  width: 225px;
  margin: auto;
  margin-top: 56px;

  // Tablet
  @media (min-width: 768px) {
    width: 462px; /* 225 px for each input and button, and 12px for margin in between */
    display: flex;
    margin-top: 45px;
  }

  // Fullscreen
  @media (min-width: 990px) {
    margin-top: 57px;
  }

  // Fullscreen
  @media (min-width: 1024px) {
  }
`;

const InputWrapper = styled.input`
  width: 225px;
  height: 46px;
  font-size: 18px;
  font-weight: 400;
  padding: 16px;
  color: black;

  // Tablet
  @media (min-width: 768px) {
    margin-right: 12px;
  }

  // Fullscreen
  @media (min-width: 990px) {
  }

  // Fullscreen
  @media (min-width: 1024px) {
  }
`;

const ButtonWrapper = styled.button`
  width: 225px;
  height: 46px;
  border-radius: 5px;
  background-color: #33b354;
  font-weight: 600;
  font-size: 12px;
  color: #ffffff;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  margin-top: 20px;

  // Tablet
  @media (min-width: 768px) {
    margin-top: 0px;
  }

  // Fullscreen
  @media (min-width: 990px) {
  }

  // Fullscreen
  @media (min-width: 1024px) {
  }
`;

export default class FormAccess extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
    this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
  }

  componentDidMount() {
    if (this.captchaDemo) {
      console.log('started, just a second...');
      this.captchaDemo.reset();
      // this.captchaDemo.execute();
    }
  }

  isInViewport(offset = 0) {
    if (!this.self) return false;
    const top = this.self.getBoundingClientRect().top;
    return top + offset >= 0 && top - offset <= window.innerHeight;
  }

  onLoadRecaptcha() {
    if (this.captchaDemo) {
      this.captchaDemo.reset();
      // this.captchaDemo.execute();
    }
  }

  verifyCallback(recaptchaToken) {
    submitForm(this.state.email, this.props.code);
  }

  render() {
    let recaptcha = null;
    try {
      if (window.grecaptcha && window.grecaptcha.render) {
        recaptcha = (
          <ReCaptcha
            ref={el => {
              this.captchaDemo = el;
            }}
            size="invisible"
            render="explicit"
            sitekey="6LevKI8UAAAAADS-89V-R9UBuE0wJUBmLMhc7bBN"
            onloadCallback={this.onLoadRecaptcha}
            verifyCallback={this.verifyCallback}
          />
        );
      }
    } catch (e) {} // gatsby build never recognizes window

    if (
      this.props.code === 'home-top' ||
      this.props.code === 'home-bottom' ||
      this.props.code === 'pricing' ||
      this.props.code === 'kafka-landing-bottom' ||
      this.props.code === 'dynamodb-landing-bottom' ||
      this.props.code === 'data-lake-landing-bottom' ||
      this.props.code === 'tableau-landing-bottom'
    ) {
      return (
        <div ref={el => (this.self = el)}>
          <FormWrapper id="form-access-wrapper">
            <InputWrapper
              type="email"
              maxLength="256"
              name="fields[email]"
              required=""
              placeholder="Work email"
              value={this.state.email}
              onChange={e => {
                this.setState({ email: e.target.value });
              }}
            />
            <ButtonWrapper
              onClick={() => {
                this.captchaDemo.execute();
              }}
              type="submit"
              id="validate"
            >
              Get Started Free
            </ButtonWrapper>
            {/* Attempting to render two invisible recatpcha's at once throws and error */}
            {this.isInViewport() && recaptcha}
          </FormWrapper>
        </div>
      );
    }

    return (
      <div ref={el => (this.self = el)}>
        <div className="w-form">
          <input
            type="email"
            className="w-input accessInput"
            maxLength="256"
            name="fields[email]"
            required=""
            placeholder="Work Email"
            value={this.state.email}
            onChange={e => {
              this.setState({ email: e.target.value });
            }}
          />
          <button
            onClick={() => {
              this.captchaDemo.execute();
            }}
            type="submit"
            id="validate"
            className="button w-button accessSubmit"
          >
            Get Started Free
          </button>
          {/* Attempting to render two invisible recatpcha's at once throws and error */}
          {this.isInViewport() && recaptcha}
        </div>
      </div>
    );
  }
}
