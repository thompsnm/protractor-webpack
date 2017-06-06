var program = require('commander');
var protractor-webpack = require('../lib/index');

program
  .version('0.0.1')
  .option('-P, --port <n>', 'Port to serve webpack on', parseInt)
  .option('-p, --protractor-conf <conf>', 'Location of Proctactor configuration file. The file must export a simple JSON object.')
  .option('-w, --webpack-conf <conf>', 'Location of Webpack configuration file. The file must export a simple JSON object.')
  .parse(process.argv);

if (!program.protractorConf || !program.webpackConf) {
  console.error('You must specify a Protractor conf file and a Webpack conf file.');
}

protracto-webpack.run(program.protractorConf, program.webpackConf, program.port);

