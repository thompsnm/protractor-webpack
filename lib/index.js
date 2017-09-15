function run(protractorConfigPath, webpackConfig, port, webpackDevServerConfig) {
  var webpack = require('webpack');
  var WebpackDevServer = require('webpack-dev-server');
  var reqlib = require('app-root-path').require;
  var launcher = reqlib('/node_modules/protractor/built/launcher');

  var port = port ? port : '8080';
  var webpackDevServerConfig = webpackDevServerConfig ? webpackDevServerConfig : { stats: { colors: true } };

  var webpackCompiler = webpack(webpackConfig);
  webpackCompiler.plugin('done', function() {
    launcher.init(protractorConfigPath);
  });

  var server = new WebpackDevServer(webpackCompiler, webpackDevServerConfig);

  server.listen(port, (err, _stats) => {
    if (err) {
      return err;
    }
  });
};

module.exports.run = run;

