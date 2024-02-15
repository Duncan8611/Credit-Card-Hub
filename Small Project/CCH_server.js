var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var session = require("express-session");

app.listen(9016);

app.use(express.static("public"))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.use(session({
  secret : "secretKey",
  resave : false, 
  saveUninitialized : true
}))
// 首頁連結
app.get("/",(req,res) => {
  // res.send("hello");
  if(req.session.CCHEmail == "r1a1i5l1g1u7n@gmail.com"){
    var displayName = "鄧肯";
  }
  else{
    var displayName = "Guest";
  }
  res.render("CCH_Homepage.ejs",{emailName : displayName});
  // res.render("CCH_Homepage.ejs",{})
})
// 信用卡介紹連結
app.get("/introduction.html",(req,res) => {
  if(req.session.CCHEmail == "r1a1i5l1g1u7n@gmail.com"){
    var displayName = "鄧肯";
  }
  else{
    var displayName = "Guest";
  }
  res.render("CCH_Introduction.ejs",{emailName : displayName});
})
// 條件查詢連結
app.get("/Condition_search",(req,res) => {
  if(req.session.CCHEmail == "r1a1i5l1g1u7n@gmail.com"){
    var displayName = "鄧肯";
  }
  else{
    var displayName = "Guest";
  }
  res.render("CCH_Condition_search.ejs",{emailName : displayName});
})
// 各式銀行連結
app.get("/Official_banks.html",(req,res) => {
  if(req.session.CCHEmail == "r1a1i5l1g1u7n@gmail.com"){
    var displayName = "鄧肯";
  }
  else{
    var displayName = "Guest";
  }
  res.render("CCH_Official_banks.ejs",{emailName : displayName});
})
// 信用卡總覽連結
app.get("/Credit_cards",(req,res) => {
  if(req.session.CCHEmail == "r1a1i5l1g1u7n@gmail.com"){
    var displayName = "鄧肯";
  }
  else{
    var displayName = "Guest";
  }
  res.render("CCH_Credit_cards.ejs",{emailName : displayName});
})
// 意見回饋連結
app.get("/Opinion_feedback.html",(req,res) => {
  if(req.session.CCHEmail == "r1a1i5l1g1u7n@gmail.com"){
    var displayName = "鄧肯";
  }
  else{
    var displayName = "Guest";
  }
  res.render("CCH_Opinion_feedback.ejs",{emailName : displayName});
})
// 送出意見回饋表連結
// app.post("/membershipCenter.html",(req,res) => {
//   if(req.session.CCHEmail == "r1a1i5l1g1u7n@gmail.com"){
//     var displayName = "鄧肯";
//   }
//   else{
//     var displayName = "Guest";
//   }
//   req.session.feedbackContent = req.body.feedbackContent;
//   var feedbackContent = req.session.feedbackContent;
//   console.log(feedbackContent)
//   res.render("CCH_Membership_center.ejs",{emailName : displayName,feedbackContent : feedbackContent});
// })
// 登入連結
app.get("/login.html",(req,res) => {
  res.render("CCH_login.ejs",{})
})
// 登入後連結
app.post("/accountCheck",(req,res) => {
  req.session.CCHEmail = req.body.CCHEmail;
  req.session.CCHPassword = req.body.CCHPassword;
  var CCHPassword = req.session.CCHPassword;
  if (CCHPassword == 1234){
      res.redirect("/");
  }
  else{
    res.send("<html><body><div style='text-align : center;font-size : 1rem;'>密碼錯誤</div><div style='display : flex;justify-content : center'><button><a style='font-size : 1rem;' href = '/login.html'>返回登入頁面</button></div></body></html>");
  }
})
// 登出連結
app.get("/logout.html",(req,res) => {
  delete req.session.CCHEmail;
  delete req.session.CCHPassword;
  res.redirect("/");
})
// 會員中心連結
app.get("/membershipCenter.html",(req,res) => {
  if(req.session.CCHEmail == "r1a1i5l1g1u7n@gmail.com"){
    var displayName = "鄧肯";
  }
  else{
    var displayName = "Guest";
  }
  req.session.feedbackContent = req.body.feedbackContent;
  var feedbackContent = req.session.feedbackContent;
  res.render("CCH_Membership_center.ejs",{emailName : displayName,feedbackContent : feedbackContent});

})


