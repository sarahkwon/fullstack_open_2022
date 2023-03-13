const _ = require('lodash')

const dummy = () => 1

const totalLikes = (blogs) => blogs.reduce((sum, blog) => sum + blog.likes, 0)

const favoriteBlog = (blogs) => blogs.reduce((max, blog) => max.likes > blog.likes ? max : blog)

const mostBlogs = (blogList) => {
  const [author, blogs] = _(blogList)
    .countBy((blog) => blog.author) //groups all the authors together and gets their frequencies
    .toPairs() //convert to an array
    .maxBy(1) //get the max of the array by the 2nd value ([key, value])
  
  return { author, blogs }   
    
}

const mostLikes = (blogs) => {
  return _(blogs)
    .groupBy( (blog) => blog.author)
    .map((author) => ({
      author: author[0].author,
      likes: _.sumBy(author, 'likes')
    }))
    .value()
    .reduce( (a, b) => a.likes > b.likes ? a : b, {})

}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}