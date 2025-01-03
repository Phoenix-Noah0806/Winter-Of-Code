const hello=require("cssnano");
const pello=require("postcss-present-env");
module.exports = {
    plugins: [
        hello({
            preset: "default",
        }),
        pello({
            stage: 1
        })
    ],
};
c