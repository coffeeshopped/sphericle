const eleventySass = require("eleventy-sass");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventySass);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  
  eleventyConfig.addPassthroughCopy("_src/**/*.jpg");
  
  return { dir: { input: "_src", output: "docs" } };
};
