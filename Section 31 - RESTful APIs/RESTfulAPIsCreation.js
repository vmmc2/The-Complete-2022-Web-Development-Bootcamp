const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set("view engine", "ejs");

mongoose.connect("mongodb://localhost:27017/wikiDB", {useNewUrlParser: true});

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "You must provide a title for the article!"]
    },
    content: {
        type: String,
        required: [true, "You must provide a content for the article!"]
    }
});

const Article = mongoose.model("Article", articleSchema);

app.listen("3000", function(){
    console.log("Server running on port 3000!");
});


app.route("/articles")
    .get(function(req, res){
        Article.find({}, function(err, articles){
            if(!err){
                res.send(articles);
            }else{
                res.send(err);
            }
        });
    })
    .post(function(req, res){
        const articleTitle = req.body.title;
        const articleContent = req.body.content;
    
        const article = new Article({
            title: articleTitle,
            content: articleContent
        });
    
        article.save(function(err){
            if(!err){
                res.send("Successfully saved a new article!");
            }else{
                res.send(err);
            }
        });
    })
    .delete(function(req, res){
        Article.deleteMany({}, function(err){
            if(!err){
                res.send("Successfully deleted all articles!");
            }else{
                res.send(err);
            }
        });
    });


app.route("/articles/:articleTitle")
    .get(function(req, res){
        const requiredArticleTitle = req.params.articleTitle;

        Article.findOne({title: requiredArticleTitle}, function(err, foundArticle){
            if(!err){
                res.send(foundArticle);
            }else{
                res.send(err);
            }
        });
    })
    .put(function(req, res){
        const requiredArticleTitle = req.params.articleTitle;
        const updatedTitle = req.body.title;
        const updatedContent = req.body.content;

        Article.updateOne(
            {title: requiredArticleTitle},
            {title: updatedTitle, content: updatedContent},
            {overwrite: true},
            function(err){
                if(!err){
                    res.send("Succesfully updated the required article!");
                }else{
                    res.send("Could not update the required article!");
                }
            }
        );
    })
    .patch(function(req, res){
        const requiredArticleTitle = req.params.articleTitle;

        Article.updateOne(
            {title: requiredArticleTitle},
            {$set: req.body},
            function(err){
                if(!err){
                    res.send("Successfully updated the required article!");
                }else{
                    res.send("Could not update the required article!");
                }
            }
        );
    })
    .delete(function(req, res){
        const requiredArticleTitle = req.params.articleTitle;

        Article.deleteOne({title: requiredArticleTitle}, function(err){
            if(!err){
                res.send("Sucessfully deleted the required article!");
            }else{
                res.send("Could not delete the required article!");
            }
        });
    });
