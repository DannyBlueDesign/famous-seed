// load css
require('./styles');

// Load polyfills
require('famous-polyfills');

var Engine = require('famous/core/Engine');

var AppView = require('./views/AppView');

var mainContext = Engine.createContext();

var appView = new AppView();

mainContext.add(appView);