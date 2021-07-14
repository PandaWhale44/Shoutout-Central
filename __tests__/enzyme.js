import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';

// Enzyme is a wrapper around React test utilities which makes it easier to
// shallow render and traverse the shallow rendered tree.

import LoginForm from '../client/components/LoginForm';
import SignupForm from '../client/components/SignupForm';

// Newer Enzyme versions require an adapter to a particular version of React
configure({ adapter: new Adapter() });

// test react components
describe('React unit tests', () => {
  // test log in form
  describe('LoginForm', () => {
    let wrapper;
    const props = {
      email: '',
      password: '',
    };
    beforeAll(() => {
      wrapper = shallow(<LoginForm {...props} />);
    });
    // check if all fields are inputed

    it('Renders 2 buttons: a login and a sign up button', () => {
      expect(wrapper.find({ className: 'login-btn' }).find('button').length).toEqual(2);
    });

    // it('Contains a div with two buttons', () => {
    //   const buttons = wrapper.find('button');
    //   expect(buttons).toHaveLength(2);
    // });

    // it('It should also contain a div with two buttons', () => {
    //   expect(wrapper.find({ className: 'flex' }).find('button').length).toEqual(2);
    // })

    // xit("Renders 2 input text fields: ", () =>{

    // })
    // check if username and password exist in db
  });
});
// sign up form tests:

// check if all fields are inputed

// check if all fields are correct type

// check if username is unique

// check if password is desired length/is alphanumeric/other typing
