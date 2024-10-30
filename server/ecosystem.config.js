module.exports = {
  apps: [
    {
      name: "project-mgmt",
      script: "npm",
      args: "run dev",
      env: {
        NODE_ENV: "development",
      },
    },
  ],
};
