import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
var jQuery = require('jQuery');
import TestUtils from 'react-addons-test-utils';
import Controls from 'Controls';

describe('Controls', () => {
  it('should exist', () => {
    expect(Controls).toExist();
  });
  describe('render', () => {
    it('should render pause when started', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus='started'/>);
      var $el = jQuery(ReactDOM.findDOMNode(controls));
      var $pauseButton = $el.find('button:contains(Pause)');
      console.log(controls);
      expect($pauseButton.length).toBe(1);
    });
  });
});
