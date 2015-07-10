'use strict';

var _s = require('underscore.string');

module.exports = function(SuperbGenerator) {

  /**
   * Where you write the generator specific files
   * @type {Object}
   */
  SuperbGenerator.prototype.writing = {
    /*
     * Aplly templating on files
     */
    copyTpl: function copyTpl() {
      this.props._s = _s;
      this.fs.copyTpl(this.templatePath() + '/**', this.destinationPath(), this.props);
    },

    /*
     * Move them
     */
    move: function move() {
      var mv = function(from, to) {
        this.fs.move(this.destinationPath(from), this.destinationPath(to));
      }.bind(this);

      mv('_package.json', 'package.json');
      mv('_README.md', 'README.md');
      mv('editorconfig', '.editorconfig');
      mv('gitattributes', '.gitattributes');
      mv('gitignore', '.gitignore');
      mv('travis.yml', '.travis.yml');
    },

    recap: function recap() {
      console.log('writing ');
    }
  };

};