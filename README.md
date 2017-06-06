# protractor-webpack

## Credit

This project is heavily influenced by the work done in [angular-cli](https://github.com/angular/angular-cli). They use the [`webpack-dev-server` to serve the application for test](https://github.com/angular/angular-cli/blob/f9053bf5b7ae8c98683cec8fdd7dae810e3c82a1/packages/%40angular/cli/tasks/serve.ts#L202-L219) and call to the [Protractor launcher directly to execute the tests](https://github.com/angular/angular-cli/blob/f9053bf5b7ae8c98683cec8fdd7dae810e3c82a1/packages/%40angular/cli/tasks/e2e.ts#L78-L80). To wire everything together, they simply [create a callback funciont to launch the protractor test](https://github.com/angular/angular-cli/blob/f9053bf5b7ae8c98683cec8fdd7dae810e3c82a1/packages/%40angular/cli/commands/e2e.ts#L109-L122) and synchronize it with the webpack build by [passing it is a plugin on 'done'](https://github.com/angular/angular-cli/blob/f9053bf5b7ae8c98683cec8fdd7dae810e3c82a1/packages/%40angular/cli/tasks/serve.ts#L114-L118).

The issue with angular-cli is that it [blindly refuses to build an ejected project](https://github.com/angular/angular-cli/blob/f9053bf5b7ae8c98683cec8fdd7dae810e3c82a1/packages/%40angular/cli/tasks/e2e.ts#L18-L20), and rather than allow for running the tests from the webpack config.
