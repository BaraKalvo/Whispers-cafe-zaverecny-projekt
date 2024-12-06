module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("images");
   
    eleventyConfig.addPassthroughCopy("css");

    eleventyConfig.addPassthroughCopy("glide.min.js");

    eleventyConfig.addPassthroughCopy("css_js");

    return {
        templateFormats: ["njk", "html", "md"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
    }
   
};