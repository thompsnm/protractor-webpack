var program = require('commander');

program
  .version('0.0.1')
  .option('-P, --port <n>', 'Port to serve webpack on', parseInt)
  .option('-p, --protractor-conf <conf>', 'Location of Proctactor configuration file. The file must export a simple JSON object.')
  .option('-w, --webpack-conf <conf>', 'Location of Webpack configuration file. The file must export a simple JSON object.')
  .parse(process.argv);

if (!program.protractorConf || !program.webpackConf) {
  console.error('You must specify a Protractor conf file and a Webpack conf file.');
}

run(program.protractorConf, program.webpackConf, program.port);

function run(protractorConfig, webpackConfig, port) {
  var webpack = require('webpack');
  var WebpackDevServer = require('webpack-dev-server');
  var launcher = require('./node_modules/protractor/built/launcher');

  var port = port ? port : '8080';

  var webpackCompiler = webpack(webpackConfig);
  webpackCompiler.plugin('done', function() {
    launcher.init(protractorConfig);
  });

  var server = new WebpackDevServer(webpackCompiler);
  server.listen(port, (err, _stats) => {
    if (err) {
      return err;
    }
  });
};

module.exports.run = run;

