// .eleventy.js
module.exports = function(eleventyConfig) {
  eleventyConfig.addCollection("posts", function(collectionApi) {
    const posts = collectionApi.getFilteredByGlob("posts/*.md").reverse();
    console.log("Found posts:");
    posts.forEach(post => {
      console.log(`- ${post.inputPath} (${post.date.toISOString()})`);
    });
    return posts;
  });

  // Copy any static assets
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("images");

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    },
    pathPrefix: "/website/",
  };
};