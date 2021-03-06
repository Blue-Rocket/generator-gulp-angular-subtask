'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');
var prompts = require('./prompts.json');

var GulpAngularSubtaskGenerator = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the wondrous GulpAngularSubtask generator! \n This is a helper generator for the gulp-anguler generator.'
    ));

    this.log(
      chalk.black.bgWhite('You can see each generator subtask\'s options typing:') + '\n' +
      chalk.green('yo gulp-angular-subtask:controller --help') + '\n' +
      chalk.green('yo gulp-angular-subtask:directive --help') + '\n' +
      chalk.green('yo gulp-angular-subtask:provider --help') + '\n' +
      chalk.green('yo gulp-angular-subtask:factory --help') + '\n' +
      chalk.green('yo gulp-angular-subtask:service --help') + '\n' +
      chalk.green('yo gulp-angular-subtask:value --help') + '\n' +
      chalk.green('yo gulp-angular-subtask:constant --help') + '\n' +
      chalk.green('yo gulp-angular-subtask:filter --help') + '\n' +
      chalk.green('yo gulp-angular-subtask:style --help') + '\n' +
      chalk.green('yo gulp-angular-subtask:partial --help')
    );

    this.prompt(prompts, function (props) {
      this.props = props;
      done();
    }.bind(this));
  },
  saveSettings: function() {

    this.config.set('props', this.props);
    this.config.forceSave();
    this.log(chalk.green('Settings were saved!'));
  }
});

module.exports = GulpAngularSubtaskGenerator;
