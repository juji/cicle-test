module.exports = {
  apps : [{
    name        : "circle",
    script      : "npm",
    args        : "start"
    watch       : true,
    env: {
      "NODE_ENV": "development",
    },
    env_production: {
      "NODE_ENV": "production",
    }
  }]
}