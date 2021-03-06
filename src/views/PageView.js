'use strict';
// Import Famous Modules
var View          = require('famous/core/View'),
    Surface       = require('famous/core/Surface'),
    HeaderFooter  = require('famous/views/HeaderFooterLayout'),
    ImageSurface  = require('famous/surfaces/ImageSurface'),
    StateModifier = require('famous/modifiers/StateModifier');

// Import Modifiers
var CenterModifier = require('../modifiers/CenterModifier'),
    SpinModifier   = require('../modifiers/SpinModifier');

/**
 * @name Page View
 * @description Page view constructor
 * @constructor
 */
function PageView() {
  View.apply(this, arguments);

  _createLayout.call(this); // Create Layout
  _createHeader.call(this); // Create Header
  _createBody.call(this); // Create Body
}

PageView.prototype = Object.create(View.prototype);
PageView.prototype.constructor = PageView;

PageView.DEFAULT_OPTIONS = {
  headerSize: 50
};

/**
 * @name Create Layout
 * @private
 */
function _createLayout() {
  this.layout = new HeaderFooter({
    headerSize: this.options.headerSize
  });

  this.add(this.layout);
}

/**
 * @name Create Header
 * @private
 */
function _createHeader() {
  var backgroundSurface = new Surface({
    properties: {
      backgroundColor: 'black'
    }
  });

  var hamburgerSurface = new ImageSurface({
    size: [44, 44],
    content : 'images/hamburger.png'
  });

  var iconSurface = new ImageSurface({
    size: [44, 44],
    content: 'images/hamburger.png'
  });

  var iconModifier = new StateModifier({
    origin: [1, 0.5],
    align : [1, 0.5]
  });

  this.layout.header.add(iconModifier).add(iconSurface);
  this.layout.header.add(hamburgerSurface);
  this.layout.header.add(backgroundSurface);
}

/**
 * @name Create Body
 * @private
 */
function _createBody() {
  this.logo = new ImageSurface({
    size: [200, 200],
    content: 'http://code.famo.us/assets/famous_logo.svg',
    classes: ['backfaceVisibility']
  });

  this.layout.content.add(CenterModifier).add(SpinModifier).add(this.logo);
}

module.exports = PageView;
