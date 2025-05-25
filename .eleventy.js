// .eleventy.js
module.exports = function(eleventyConfig) {
  eleventyConfig.addCollection("posts", function(collectionApi) {
    const posts = collectionApi.getFilteredByGlob("posts/*.md").reverse();
    console.log("Found posts:");
    posts.forEach(post => {
      console.log(`- ${post.inputPath} (${post.date.toISOString()})`);
    });
    eleventyConfig.addPassthroughCopy("website/eliresume.pdf");
    return posts;
  });

  // Copy any static assets
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("website/eliresume.pdf");


  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    },
    pathPrefix: "/website",
  };
};