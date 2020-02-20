module.exports = function({ config }) {
    config.extra.foo = "app.config.js";
    console.log(config);
    return config;
};