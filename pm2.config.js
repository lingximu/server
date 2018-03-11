module.exports = {
  apps : [{
    name   : "app",
    script : "./cli.js",
    watch  : true,
    env: {
      "NODE_ENV": "production",
      "PORT": "80"
    },
  }]
}
