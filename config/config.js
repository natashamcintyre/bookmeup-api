const config = {
  port: process.env.NODE_ENV === 'test' ? 2001 : process.env.PORT || 3001,
  db: process.env.NODE_ENV === 'test' ? 'mongodb://localhost/testBooks' : process.env.MONGODB_URI || 'mongodb://localhost/books'
}
module.exports = config
