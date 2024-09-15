const express = require('express');
const router = express.Router();
const Users = require('../models/Users');
const Staffs = require('../models/staffs')


const cookieParser = require("cookie-parser");
const sessions = require('express-session');

var app = express();
app.use(cookieParser());

// a variable to save a session
var session;


router.get('/check',(req,res)=>{
    res.send("checking...");
});



router.get('/',async(req,res,next)=>{
    let stafflist =await Staffs.find({count:{$ne:0}});
        
    session=req.session;
    console.log(session.regno);
    if(session.regno){
        res.render('home',{stafflist:stafflist});

    }
    else{
        res.render('login');

    }
    
    
});





router.post('/register',(req,res)=>{
    console.log('register');
    const {
        name,
        password,
        regno,
        acctype,
        selected,
        guide
    }=req.body;

    let users = new Users();
    users.name = name;
    users.password = password;
    users.regno = regno;
    users.acctype = acctype;
    users.selected = selected;
    users.guide = guide;

    users.save();

    console.log("saved!");

});






router.post('/signin',async(req,res,next)=>{
    const {regno,password} = req.body;
    
    try {
        let user_exists = await Users.findOne({
            regno: regno
        });
        let stafflist =await Staffs.find({count:{$ne:0}});
        

        if (user_exists.guide==='') {
            session=req.session;
            session.regno=req.body.regno;
            // console.log(req.session);
            res.render('home',{stafflist:stafflist});
        }
        else{   

            res.render('inner',{guide:user_exists.guide});
        }
    }
    catch (err) {
        console.log(err);
    }
});


router.post('/status',async(req,res,next)=>{
    session=req.session;
    
    // console.log(req.body.staff);
    const regno = session.regno;
    const staffname = req.body.staff;

    try {
        let user = await Users.findOne({
            regno: regno
        });

        user.guide = staffname;
        user.save();
        

        let staff = await Staffs.findOne({
            name:staffname
        });

        staff.count = staff.count-1;
        staff.save();

        res.render('inner',{guide:staffname});

        console.log('saved');
        

    }
    catch (err) {
        console.log(err);
    }



});


router.get('/logout',(req,res)=>{
    req.session.destroy();
    // console.log(req.session);
    res.redirect('/');
});




module.exports=router;