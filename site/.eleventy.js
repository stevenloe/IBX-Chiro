module.exports = function (config) {
  // files to pass through to the dist directory at compile time:
  // config.addPassthroughCopy("src/css")
  config.addPassthroughCopy("src/fonts")
  config.addPassthroughCopy("src/images")
  config.addPassthroughCopy("src/js")
  config.addPassthroughCopy('src/admin')
  config.addPassthroughCopy('src/pdf')
  
  return {
    dir: {
      input: "src",
      output: "dist"
    }
  }

  
}



