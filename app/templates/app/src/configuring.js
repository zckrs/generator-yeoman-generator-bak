'use strict';

var ghGot = require('gh-got');

module.exports = function(<%= _s.classify(generatorName) %>) {

  /**
   * Configure the project
   * and saving configurations in `.yo-rc.json`
   */
  <%= _s.classify(generatorName) %>.prototype.configuring = {
    /**
     * Fetch Github user info via API
     */
    userInfo: function userInfo() {
      var done = this.async();

      ghGot('users/' + this.props.githubUser, function (err, data) {
          if (err) {
            this.log.error('Cannot fetch your Github profile. Make sure you\'ve typed it correctly.');
            data = {
              name: this.props.githubUser,
              email: '',
              html_url: ''
            };
          }

          this.props.githubUser = {
            name: this.props.githubUser,
            email: data.email,
            html_url: data.html_url
          }

          done();
      }.bind(this));
    },

    /**
     * Set `.yo-rc.json` value with object `this.props`
     */
    setYoRc: function setYoRc() {
      this.config.set('props', this.props);
    },
    recap: function recap() {
      console.log('configuring ');
    }
  };

};
