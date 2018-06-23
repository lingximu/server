module.exports = {
  apps: [{
    name: 'server',
    script: './cli.js',
    watch: false,
    args: 'online',
    env: {
      'NODE_ENV': 'production'
    }
  }]
};
