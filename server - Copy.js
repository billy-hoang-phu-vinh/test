const express = require("express");
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');


//creation of app object
const app = express();

//require static data
const productModel = require("./model/product");//call javascript file that has elements inside: fakeDB, init and get()


//handlebars middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


//body parser middleware
app.use(bodyParser.urlencoded({ extended: false }))

//loading static assests middleware
app.use(express.static("public"));


app.get("/",(req,res)=>{

    res.render("home",{
        title:"Home Page",
        category_list: productModel.getcategory_list(),
        bestSelling: productModel.getbestseller_list()
    });

});


app.get("/about-us",(req,res)=>{

    res.render("about",{
        title: "Home Page"
    })

});

app.get("/about-us",(req,res)=>{

    res.render("about",{
        title: "About Us Page"
    })

});

app.get("/contact-us",(req,res)=>{

    res.render("contact",{
        title: "Contact Us page"
    })

});

const PORT= process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Web Server`);
})
