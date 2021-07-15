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
      expect(wrapper.find('button').length).toEqual(2);
      expect(wrapper.find('button')[0].className).toEqual('login-btn');
      expect(wrapper.find('button')[1].className).toEqual('Signup-btn');
    });

    // it('Contains a div with two buttons', () => {
    //   const buttons = wrapper.find('button');
    //   expect(buttons).toHaveLength(2);
    // });

    it('Renders 2 input text fields: ', () => {
      expect(wrapper.find({ type: 'input' }).length).toEqual(2);
    });
    // check if username and password exist in db
  });
  // sign up form tests:
  describe('SignupForm', () => {
    let wrapper;
    // properties inside of input fields
    const props = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      affiliation: '',
    };
    beforeAll(() => {
      wrapper = shallow(<SignupForm {...props} />);
    });
    // check if there are 4 input fields and 1 sign up button
    it('Renders 4 input fields and a Create Account Button', () => {
      expect(wrapper.find('button').length).toEqual(1);
      expect(wrapper.find('button')[0].className).toEqual('Signup-btn');
      expect(wrapper.find({ type: 'input' }).length).toEqual(5);
    });
  })
});

// check if all fields are correct type

// check if username is unique

// check if password is desired length/is alphanumeric/other typing

// Homepage
// direct access to homepage unavailable before login (routing/supertest)
// current user account info displays correctly after login
// shoutoutList renders fully
// newly posted shoutouts appear on top of timeline without refreshing app
// vertical overflow: stick to the top
// stretch: totalShoutouts, lastShoutoutTimestamp displays in header

// // Rankboard
// userList renders fully
// stretch: highlight and scroll down to current user