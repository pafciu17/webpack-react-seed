import React from 'react';
import TestUtils from 'react-addons-test-utils';
import ReactDom from 'react-dom';

import Component from '../src/Component';

describe("A suite", function() {
  it("contains spec with an expectation", function() {
    var component = TestUtils.renderIntoDocument(<Component/>);
    var domeNode = ReactDom.findDOMNode(component);
    expect(domeNode.innerHTML).toBe('TEST COMPONENT');
  });
});