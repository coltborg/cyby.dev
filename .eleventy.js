module.exports = function (eleventyConfig) {
    // Custom watchers
    eleventyConfig.addWatchTarget("./styles");

    // Custom pass through
    eleventyConfig.addPassthroughCopy("./styles");
    eleventyConfig.addPassthroughCopy("**/*.jpg");
    eleventyConfig.addPassthroughCopy("**/*.png");
};
