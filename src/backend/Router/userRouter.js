const express = require('express')
const mailgun = require('mailgun-js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const dotEnv = require('dotenv')
const Auth  = require('../Router/verifyToken')
const _ = require('lodash')
dotEnv.config()
const User = require('../UserModel/User')
const crypto = require('crypto')
const async = require('async')
const{ResetPasswordValidation} = require('../Validation/validation')

const Router = express.Router()

Router.post('/register', async(req,res)=>{

    const user = await User.findOne({email: req.body.email})
    if(user) return res.status(400).send('Email already Exist')

    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(req.body.password, salt)

    const saveUser = new User({
        full_Name: req.body.full_Name,
        user_Name: req.body.user_Name,
        password: hashPassword,
        email: req.body.email,
        bitcoin: req.body.bitcoin,
        bitcoinCash: req.body.bitcoinCash,
        perfectMoney: req.body.perfectMoney,
        payPal: req.body.payPal
    })
    var api_key = '25e8cf8b4c4c594c0ef4d1cf5fb72d9c-913a5827-fd372169';
    var domain = 'sandboxed3b76859ab44cfd9a66972c3ff46d63.mailgun.org';
    var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
     
    var data = {
      from: 'PayItForward <payitforwardinvestmentlimited@gmail.com>',
      to: 'frankainoo@gmail.com',
      subject: 'Hello',
      text: 'Thank you for making Bussiness with us, Have a nice day. Thank You'
    };
     
    mailgun.messages().send(data, function (error, body) {
      console.log(body);
    });

    await saveUser.save()
    res.send("user Save")
})



Router.post('/login', async (req,res)=>{

    const user = await User.findOne({email: req.body.email})
    if(!user){
        return res.status(400).send("Email do not Exist")
    }

   await bcrypt.compare(req.body.password, user.password,(err,isMatch)=>{
       if(!isMatch) return res.status(400).send('Invalid Password ')
       else{
           const payload = {
               
                full_Name: user.full_Name,
                user_Name: user.user_Name,
                email: user.email,
                password: user.password,
                bitcoin: user.bitcoin,
                bitcoinCash: user.bitcoinCash,
                perfectMoney: user.perfectMoney,
                payPal: user.payPal,           
                date: user.date,
           }
           const token = jwt.sign(payload, process.env.TokenSecret)
           res.header('x-access-token', token)
           return res.status(200).send(token)
       }
   })
})



Router.post('/forgotpassword',(req,res,next)=>{
    async.waterfall([
       (done)=>{
         crypto.randomBytes(20,(err,buffer)=>{
             let token = buffer.toString('hex');
             done(err, token);
         })
         
       },
       (token, done)=>{
         User.findOne({email: req.body.email},(err,user)=>{
             if(!user){
                 return res.status(400).send('Email Not Found')
             }
             user.restartLinkPassword =  token;
             user.save((err)=>{
                 done(err, token, user)
             })
         })
       },
       (token,user,done)=>{
        var api_key = '25e8cf8b4c4c594c0ef4d1cf5fb72d9c-913a5827-fd372169';
        var domain = 'sandboxed3b76859ab44cfd9a66972c3ff46d63.mailgun.org';
        var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
            
        var data = {
            from: 'PayItForward <payitforwardinvestmentlimited@gmail.com>',
            to: 'frankainoo@gmail.com',
            subject: 'Password Reset',
            html: ` <h1>Please Follow the link to restart your password </h1>
                <p>${process.env.forgotPasswordLink}/${token}</p>
            `
        };
         mailgun.messages().send(data, function (error, body) {
             if(error){
                 return res.status(400).send(error.message)
             }
            return res.status(200).send('Link sent to Email Address')
       });
 
       },
       
    ])
 
     
 })
 
 Router.post('/activtypassword/:token', async(req,res)=>{
     const CheckValidation = ResetPasswordValidation(req.body)
     if(CheckValidation.error){
         return res.status(400).send(CheckValidation.error.details[0].message)
     }
    User.findOne({restartLinkPassword : req.params.token})
    .then(user=>{
        if(!user){
            return res.status(422).json({error:"Invalid token"})
        }
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(req.body.password, salt, function(err, hash) {
            user.password = hash
            user.restartLinkPassword = undefined
            user.save().then((saveduser)=>{
                res.json({message:"password updated success"})
            })
 
            });
          });
        
    }).catch(err=>{
        console.log(err)
    })
})


Router.get('/userProfile', Auth, async (req,res)=>{
   jwt.verify(req.token,process.env.TokenSecret,(err,data)=>{
       if(err) return res.status(400).send('Cant not Access Profile')
       else{
           const userProfile = User.find().select(['password'])
           res.send(userProfile)
       }
   })
})
















module.exports = Router;