module.exports = {
    apps: [
      {
        name: "focal",
        script: "node_modules/next/dist/bin/next",
        args: "start -p 8000",
        cwd: "./",
        exec_mode: "cluster",
        instances: "max",
        autorestart: true,
        watch: false,
        max_memory_restart: "1G",
      },
    ],
  };
  