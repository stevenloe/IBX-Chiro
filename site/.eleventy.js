module.exports = function (config) {
  // files to pass through to the dist directory at compile time:
  config.addPassthroughCopy("src/css")
  config.addPassthroughCopy("src/fonts")
  config.addPassthroughCopy("src/images")
  config.addPassthroughCopy("src/js")
  
  return {
    dir: {
      input: "src",
      output: "dist"
    }
  }
}