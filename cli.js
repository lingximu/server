const program = require('commander');
const pkg = require('./package.json');
const shell = require('shelljs');
const debug = require('debug')('server:cli');

program
  .version(pkg.version)
  .command('dev')
  .description('start app server in develop')
  .option('-p, --port <port>', 'port (or $PORT)', Number, process.env.PORT || 8000)
  .action((options) => {
    debug('action debug active');
    const app = require('./src/server/app')({
      root: __dirname,
      port: options.port
    });
    app.listen(options.port, (err) => {
      if (err) {
        console.error('Server listen occur error ', err);
        process.exit(1);
      } else {
        console.info(`Server listen on ${options.port}`);
      }
    });
  });

program
  .version(pkg.version)
  .command('online')
  .description('start app server in online')
  .option('-p, --port <port>', 'port (or $PORT)', Number, process.env.PORT || 8000)
  .option('--no-build', 'can not exec npm build')
  .action((options) => {
    // babel build at production,look at .babelrc
    process.env.NODE_ENV = 'production';
    debug('action online active');
    debug('options.build %o', options.build);
    if (options.build) {
      shell.rm('-rf', './dist');
      shell.exec('npm run build');
    }
    const app = require('./dist/server/app')({
      root: __dirname,
      port: options.port
    });
    app.listen(options.port, (err) => {
      if (err) {
        console.error('Server listen occur error ', err);
        process.exit(1);
      } else {
        console.info(`Server listen on ${options.port}`);
      }
    });
  });

program.parse(process.argv);
