module.exports = {
  apps: [{
    name: 'graph',
    script: './cli.js',
    watch: false,
    args: 'online -p 9000',
    env: {
      'NODE_ENV': 'production'
    }
  }]
};
