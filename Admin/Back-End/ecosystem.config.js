module.exports = {
    apps: [
        {
            script: "index.js",
            watch: "index.js",
            instances: "max",
            env: {
                NODE_ENV: "development",
            },
            env_production: {
                NODE_ENV: "production",
            },
        },
    ],
};
