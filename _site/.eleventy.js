module.exports = function(eleventyConfig) {
    // Debug collections
    eleventyConfig.on('eleventy.before', () => {
      console.log("Processing posts...");
    });
  
    eleventyConfig.addCollection("posts", function(collectionApi) {
      const posts = collectionApi.getFilteredByGlob("posts/*.md").reverse();
      console.log(`Found ${posts.length} posts`); // Debug line
      return posts;
    });
  
    // ... rest of your config
  };