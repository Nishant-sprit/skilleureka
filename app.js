//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const _ = require("lodash");


const homeStartingContent = "Lacus ve volutpat est velc ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie esque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus sita tincidunt dui.";
const contactContent = " feunjvh  jṁ  hvm hv hv  hv  v b  giat. "
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb+srv://varun:skilleureka@skilleureka.agset.mongodb.net/skillfile", { useNewUrlParser: true ,useUnifiedTopology: true });

const postSchema = {
  title: String,
  content: String,
  link: String,
  Ylink: String,
  // para-1
  paraTitle01: String,
  paraImg01: String,
  paraContent01: String,

  // para-2
  paraTitle02: String,
  paraImg02: String,
  paraContent02: String,

  // para-3
  paraTitle03: String,
  paraImg03: String,
  paraContent03: String,

  // para-4
  paraTitle04: String,
  paraImg04: String,
  paraContent04: String,

  // para-5
  paraTitle05: String,
  paraImg05: String,
  paraContent05: String,

  // para-6
  paraTitle06: String,
  paraImg06: String,
  paraContent06: String,

  // para-7
  paraTitle07: String,
  paraImg07: String,
  paraContent07: String,

  // para-8
  paraTitle08: String,
  paraImg08: String,
  paraContent08: String,

  // para-9
  paraTitle09: String,
  paraImg09: String,
  paraContent09: String,

  // para-10
  paraTitle10: String,
  paraImg10: String,
  paraContent10: String,

};

const Post = mongoose.model("Post", postSchema);

let posts = [];

app.get("/", function (req, res) {
  res.render("home");

 
})


app.get("/projects", function (req, res) {
  Post.find({}, function (err, posts) {

    res.render("projects", { homecontent: homeStartingContent, posts: posts });
  })

})


app.get("/contact", function (req, res) {
  res.render("contact", { contcontent: contactContent });
})


app.get("/compose", function (req, res) {
  res.render("compose");
})

app.post("/compose", function (req, res) {
  const post = new Post({
    title: req.body.title,
    content: req.body.pbody,
    link: req.body.postlink,
    Ylink: req.body.youtube,

    // para-1
    paraTitle01: req.body.title01,
    paraImg01: req.body.img01,
    paraContent01: req.body.content01,

    // para-2
    paraTitle02: req.body.title02,
    paraImg02: req.body.img02,
    paraContent02: req.body.content02,

    // para-3
    paraTitle03: req.body.title03,
    paraImg03: req.body.img03,
    paraContent03: req.body.content03,

    // para-4
    paraTitle04: req.body.title04,
    paraImg04: req.body.img04,
    paraContent04: req.body.content04,

    // para-5
    paraTitle05: req.body.title05,
    paraImg05: req.body.img05,
    paraContent05: req.body.content05,

    // para-6
    paraTitle06: req.body.title06,
    paraImg06: req.body.img06,
    paraContent06: req.body.content06,

    // para-7
    paraTitle07: req.body.title07,
    paraImg07: req.body.img07,
    paraContent07: req.body.content07,

    // para-8
    paraTitle08: req.body.title08,
    paraImg08: req.body.img08,
    paraContent08: req.body.content08,

    // para-9
    paraTitle09: req.body.title09,
    paraImg09: req.body.img09,
    paraContent09: req.body.content09,

    // para-10
    paraTitle10: req.body.title10,
    paraImg10: req.body.img10,
    paraContent10: req.body.content10,
  });

  post.save();

  res.redirect("/projects");

});


app.get("/post/:postId", function (req, res) {

  const requestedPostId = req.params.postId;

  Post.findOne({ _id: requestedPostId }, function (err, post) {

    res.render("post", {
      posttitle: post.title, postcontent: post.content, postlink: post.link, postYoutube: post.Ylink,
      // para1 
      para1Title: post.paraTitle01, para1Img: post.paraImg01, para1Content: post.paraContent01,

      //para2
      para2Title: post.paraTitle02, para2Img: post.paraImg02, para2Content: post.paraContent02,

      // para3
      para3Title: post.paraTitle03, para3Img: post.paraImg03, para3Content: post.paraContent03,

      // para4
      para4Title: post.paraTitle04, para4Img: post.paraImg04, para4Content: post.paraContent04,

      // para5
      para5Title: post.paraTitle05, para5Img: post.paraImg05, para5Content: post.paraContent05,

      // para6
      para6Title: post.paraTitle06, para6Img: post.paraImg06, para6Content: post.paraContent06,

      // para7
      para7Title: post.paraTitle07, para7Img: post.paraImg07, para7Content: post.paraContent07,

      // para8
      para8Title: post.paraTitle08, para8Img: post.paraImg08, para8Content: post.paraContent08,

      // para9
      para9Title: post.paraTitle09, para9Img: post.paraImg09, para9Content: post.paraContent09,

      // para10
      para10Title: post.paraTitle10, para10Img: post.paraImg10, para10Content: post.paraContent10,

    });

  })

})
app.get("/projects/post/:postId", function (req, res) {


  posts.forEach(function (post) {
    var storedtitle = _.lowerCase(post.title);
    if (_.lowerCase(req.params.postname) === storedtitle) {
      res.render("post", { posttitle: _.upperFirst(req.params.postname), postcontent: post.content, postlink: post.link });
    }
  });
});



app.listen(process.env.PORT || 3000, function () {
  console.log("Humko maro humko jinda mtt chdo saalo");
});


