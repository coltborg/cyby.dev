module.exports = function (eleventyConfig) {
    // Pass static files
    eleventyConfig.addPassthroughCopy("style.css");

    // Watch targets
    eleventyConfig.addWatchTarget("./style.css");
}

