const _ = require('lodash')

const dummy = () => 1

const totalLikes = (blogs) => blogs.reduce((sum, blog) => sum + blog.likes, 0)

const favoriteBlog = (blogs) => blogs.reduce((max, blog) => max.likes > blog.likes ? max : blog)

const mostBlogs = (blogList) => {
  const [author, blogs] = _(blogList)
    .countBy((blog) => blog.author)
    .toPairs()
    .maxBy(1)
  
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