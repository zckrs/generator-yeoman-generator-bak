'use strict';

module.exports = function(<%= s.classify(generatorName) %>) {

  /**
   * Where you write the generator specific files
   * @type {Object}
   */
  <%= s.classify(generatorName) %>.prototype.writing = {
    /*
     * Aplly templating on files
     */
    copyTpl: function copyTpl() {
      this.fs.copyTpl(this.templatePath() + '/**', this.destinationPath(), this.props);
    },

    /*
     * Move them
     */
    move: function move() {
      var mv = function (from, to) {
		    this.fs.move(this.destinationPath(from), this.destinationPath(to));
			}.bind(this);

      mv('_package.json', 'package.json');
      mv('_README.md', 'README.md');
      mv('editorconfig', '.editorconfig');
      mv('eslintrc', '.eslintrc');
      mv('gitattributes', '.gitattributes');
      mv('gitignore', '.gitignore');
      mv('travis.yml', '.travis.yml');
    }
  };

};
