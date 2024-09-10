module.exports = function (eleventyConfig) {
    eleventyConfig.addWatchTarget("./styles");
    eleventyConfig.addPassthroughCopy("./styles");
};
