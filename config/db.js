if(process.env.NODE_ENV == "production") {
  module.exports = {mongoURI: "mongodb+srv://rachadel:ogaaaiib@blog-uuyep.mongodb.net/blogapp?retryWrites=true&w=majority"}
}else{
  module.exports = {mongoURI: "mongodb://localhost/blogapp"}
}