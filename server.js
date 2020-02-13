const express = require("express"); //this imports the express package that was installed within your application

const app = express(); // this creates your express app object

const exphbs= require("express-handlebars");

const productModel = require("./model/product");//call javascript file that has elements inside: fakeDB, init and get()


app.engine("handlebars",exphbs());
app.set("view engine", "handlebars");

app.use(express.static("public"));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))



//Route for the Home Page
app.get("/",(req,res)=>{
    res.render("home",{
        title:"Home Page",
        category_list: productModel.getcategory_list(),
        bestSelling: productModel.getbestseller_list()
    });
});
/**REQUEST FORM */
app.get("/signin",(req,res)=>{
    res.render("signin",{
        title:"Login Page",
    });
});
app.get("/signup",(req,res)=>{
    res.render("signup",{
        title:"Sign Up Page",
    });
});
/**RESPOND FORM */
app.post("/signIn_Form",(req,res)=> {
    const error  = [];
    //a small validation for the password, it will be upgraded in the future version
    if (req.body.password.length < 6) {
        error.push(' password must at least 6 characters');
        res.render("notification",{
            title:"Signin failed",
            email:req.body.email,
            error: error
        });
    };
    //if no error
    if (error.length==0){
        res.render("notification",{
            title:"Successfully Login with ",
            email:req.body.email
        });
    };
});
/*sign up form*/
app.post("/signUp_Form",(req,res)=> {
    const error  = [];
    //a small validation for the password, it will be upgraded in the future version
    if (req.body.password.length < 6) {
        error.push(' password must at least 6 characters');
    };
    if (req.body.password != req.body.password_again){
        error.push(' password must match');
        
    }
    //if no error
    if (error.length==0){
        res.render("notification",{
            title:"Successfully Signup with ",
            email:req.body.email
        });
    } else {
        res.render("notification",{
            title:"Signup failed",
            email:req.body.email,
            error: error
        });
    };
});
/**PRODUCTPAGE */
app.get("/productspage",(req,res)=>{

    res.render("products",{
        title:"Products",
        products :productModel.getAllProducts(),
    });
});
const PORT=process.env.PORT || 3000;
//This creates an Express Web Server that listens to HTTP Reuqest on port 3000
app.listen(PORT,()=>{
    console.log(`Web Server Started`);
});