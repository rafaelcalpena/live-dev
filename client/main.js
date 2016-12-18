import { Meteor } from 'meteor/meteor';
import LiveDev from 'meteor/rafaelcr:live-dev';

import React from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

var Babel = require("babel-standalone");

Meteor.startup(() => {
	LiveDev(document.getElementById('render-target'), {Babel, React, ReactDOM, createContainer})
})