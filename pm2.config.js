module.exports = {
  apps : [{
    name   : "app",
    script : "./cli.js",
    env: {
      "NODE_ENV": "production",
      "PORT": "80"
    },
  }]
}
