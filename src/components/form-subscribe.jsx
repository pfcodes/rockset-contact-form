import React from 'react';
import { submitForm } from '../utils/hubspot.js';
import styled from 'styled-components';

const Input = styled.input`
  display: inline-block;
  width: 14vw;
  min-width: 100px;

  @media (max-width: 800px) {
    margin-bottom: 10px;
  }

  display: block;
  width: 100%;
  height: 38px;
  padding: 8px 12px;
  font-size: 14px;
  line-height: 1.428571429;
  color: #333333;
  background-color: #ffffff;
  border: 1px solid #cccccc;
`;

const Form = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Button = styled.button`
  min-width: 166px;
`;
export default class FormSubscribe extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    email: '',
  };

  render() {
    return (
      <Form {...this.props}>
        <Input
          type="email"
          maxLength="256"
          placeholder="Email"
          value={this.state.email}
          onChange={e => {
            this.setState({ email: e.target.value });
          }}
        />
        <Button
          className="button w-button accessSubmit"
          style={{ backgroundColor: '#1a70b4' }}
          onClick={() => submitForm(this.state.email, 'blog', null, null, null, true)}
        >
          Follow Us
        </Button>
      </Form>
    );
  }
}
