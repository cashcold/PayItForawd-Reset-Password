
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
         var api_key = '3b010ce36a840e4798ab908cde0d52fd-1b6eb03d-21fbd240';
         var domain = 'sandboxcbf865f82fc74bdbb3a49a174cc9af61.mailgun.org';
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
             res.header(token)
            return res.status(200).send(token)
       });
 
       },
       
    ])
 
     
 })
 
 
 
 
 
 Router.post('/activtypassword/:token',async(req,res)=>{
     async.waterfall([
         (done)=>{
             User.findOne({restartLinkPassword: req.params.token},(err,user)=>{
                 if(!user){
                     return res.status(400).send('Invalid Token')
                 }
                 bcrypt.hash(req.body.password,).then(hashedpassword=>{
                     user.password = hashedpassword
                     user.restartLinkPassword = undefined
                     user.save().then((saveduser)=>{
                         res.json({message:"password updated success"})
                     })
                  })   
 
 
                 // user.password = req.body.password
                 // user.restartLinkPassword = undefined
                 // user.save((err)=>{
                 //     if(err){
                 //         return res.status(400).send('Unable to save password')
                 //     }
                 //     (err ,user)=>{
                 //         done(err,user)
                 //     }
                     
                 // })
             })
         },
         (user,done)=>{
             var api_key = '3b010ce36a840e4798ab908cde0d52fd-1b6eb03d-21fbd240';
             var domain = 'sandboxcbf865f82fc74bdbb3a49a174cc9af61.mailgun.org';
             var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
              
             var data = {
               from: 'PayItForward <payitforwardinvestmentlimited@gmail.com>',
               to: 'frankainoo@gmail.com',
               subject: 'Congratulation',
               html: ` Please Your password have successful change</p>
               Don't share your password with anyone
               `
             }; mailgun.messages().send(data, function (error, body) {
                 if(error){
                     return res.status(400).send(error.message)
                 }
                 return res.status(200).send('Link have sent to email address')
                 
           });
                 done(err,user)
     
 
         },
     ])
 })
 
 Router.post('/forgotpassword',(req,res,next)=>{
    async.waterfall([
       (done)=>{
         crypto.randomBytes(32,(err,buffer)=>{
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
 
 Router.post('/activtypassword/:token',(req,res)=>{
    const password = req.body.password
   
    User.findOne({restartLinkPassword : req.params.token})
    .then(user=>{
        if(!user){
            return res.status(422).json({error:"Invalid token"})
        }
        bcrypt.hash(password,12).then(hashedpassword=>{
           user.password = hashedpassword
           user.restartLinkPassword = undefined
           user.save().then((saveduser)=>{
               res.json({message:"password updated success"})
           })
        })
    }).catch(err=>{
        console.log(err)
    })
})



Router.post('/activtypassword/:token',(req,res)=>{
    async.waterfall([
        (done)=>{
            User.findOne({restartLinkPassword: req.params.token},(err,user)=>{
                if(!user){
                    return res.status(400).send('Invalid Token')
                }
                // user.password = bcrypt.hashSync(req.body.password, 10)
                // user.restartLinkPassword = undefined
                // user.save((err)=>{
                //     return res.status(422).send("Cant save password")
                // })
                
                const salt = bcrypt.genSalt(10)
                const hashPassword = bcrypt.hash(req.body.password, salt)
                user.password = hashPassword
                user.restartLinkPassword = undefined
                user.save((err)=>{
                    if(err){
                        return res.status(400).send('Unable to save password')
                    }
                    done(err, user)
                    
                })
            })
        },
        (user,done)=>{
            var api_key = '25e8cf8b4c4c594c0ef4d1cf5fb72d9c-913a5827-fd372169';
            var domain = 'sandboxed3b76859ab44cfd9a66972c3ff46d63.mailgun.org';
            var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
             
            var data = {
              from: 'PayItForward <payitforwardinvestmentlimited@gmail.com>',
              to: 'frankainoo@gmail.com',
              subject: 'Congratulation',
              html: ` Please Your password have successful change</p>
              Don't share your password with anyone
              `
            }; mailgun.messages().send(data, function (error, body) {
                if(error){
                    return res.status(400).send(error.message)
                }
                return res.status(200).send('Link have sent to email address')
                
          });
                done(err,user)
    

        },
    ])
})

Router.post('/activtypassword/:token', async(req,res)=>{
    User.findOne({restartLinkPassword: req.params.token})
   .then(user=>{
       if(!user){
           return res.status(422).json({error:"Invalid Token "})
       }
       
      {
       bcrypt.genSalt(10, function(err, salt) {
           bcrypt.hash(req.body.password, salt, function(err, hash) {
           user.password = hash
           user.restartLinkPassword = undefined
           user.save().then((saveduser)=>{
               res.json({message:"password updated success"})
           })

           });
         });
      }
       
   }).catch(err=>{
       console.log(err)
   })
})







Router.post('/activtypassword/:token',(req,res)=>{
    async.waterfall([
        (done)=>{
            User.findOne({restartLinkPassword: req.params.token},(err,user)=>{
                if(!user){
                    return res.status(400).send('Invalid Token')
                }
                // user.password = bcrypt.hashSync(req.body.password, 10)
                // user.restartLinkPassword = undefined
                // user.save((err)=>{
                //     return res.status(422).send("Cant save password")
                // })
                
                const salt = bcrypt.genSalt(10)
                const hashPassword = bcrypt.hash(req.body.newPassword, salt)
                user.password = hashPassword
                user.restartLinkPassword = undefined
                user.save((err)=>{
                    if(err){
                        return res.status(400).send('Unable to save password')
                    }
                    done(err, user)
                    
                })
            })
        },
        (user,done)=>{
            var api_key = '25e8cf8b4c4c594c0ef4d1cf5fb72d9c-913a5827-fd372169';
            var domain = 'sandboxed3b76859ab44cfd9a66972c3ff46d63.mailgun.org';
            var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
             
            var data = {
              from: 'PayItForward <payitforwardinvestmentlimited@gmail.com>',
              to: 'frankainoo@gmail.com',
              subject: 'Congratulation',
              html: ` Please Your password have successful change</p>
              Don't share your password with anyone
              `
            }; mailgun.messages().send(data, function (error, body) {
                if(error){
                    return res.status(400).send(error.message)
                }
                return res.status(200).send('Link have sent to email address')
                
          });
                done(err,user)
    

        },
    ])
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
 




Router.post('/activtypassword/:token',(req,res)=>{
    const newPassword = req.body.newPassword
    User.findOne({restartLinkPassword: req.params.token})
   .then(user=>{
       if(!user){
           return res.status(422).json({error: "Invalid Token "})
       }
       
      {
       bcrypt.genSalt(10, function(err, salt) {
           bcrypt.hash(newPassword, salt, function(err, hash) {
               if(err){
                   return res.status(400).send('can not hash password')
               }
           user.password = newPassword
           user.restartLinkPassword = undefined
           user.save().then((saveduser)=>{
               res.json({message:"password updated success"})
           })

           });
         });
      }
       
   }).catch(err=>{
       console.log(err)
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
 




Router.post('/activtypassword/:token',(req,res)=>{
    async.waterfall([
        (done)=>{
            User.findOne({restartLinkPassword: req.params.token},(err,user)=>{
                if(!user){
                    return res.status(400).send('Invalid Token')
                }
             
            })
        },
        (user,done)=>{
            var api_key = '25e8cf8b4c4c594c0ef4d1cf5fb72d9c-913a5827-fd372169';
            var domain = 'sandboxed3b76859ab44cfd9a66972c3ff46d63.mailgun.org';
            var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
             
            var data = {
              from: 'PayItForward <payitforwardinvestmentlimited@gmail.com>',
              to: 'frankainoo@gmail.com',
              subject: 'Congratulation',
              html: ` Please Your password have successful change</p>
              Don't share your password with anyone
              `
            }; mailgun.messages().send(data, function (error, body) {
                if(error){
                    return res.status(400).send(error.message)
                }
                return res.status(200).send('Link have sent to email address')
                
          });
                done(err,user)
    

        },
    ])
})


Router.post('/forgotpassword',async(req,res)=>{
    const user = await User.findOne({email: req.body.email})
    if(!user) return res.status(400).send('No User With Email Enter')

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
   const token = jwt.sign(payload, process.env.resetPasswordKey)

   
   var api_key = '25e8cf8b4c4c594c0ef4d1cf5fb72d9c-913a5827-fd372169';
   var domain = 'sandboxed3b76859ab44cfd9a66972c3ff46d63.mailgun.org';
   var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
       
   var data = {
    from: 'PayItForward <payitforwardinvestmentlimited@gmail.com>',
    to: 'frankainoo@gmail.com',
    subject: 'Password Reset',
    html: ` <h1>Please Follow the link to restart your password </h1>
        <p>${process.env.forgotPasswordLink}/${token}</p>`
    };
    return user.updateOne({restartLinkPassword: token},(err, success)=>{
        if(err) return res.status(400).send('Reset Password Link Error')
        else{
            mailgun.messages().send(data, function (error, body) {
                if(error){
                    return res.status(400).send(error.message)
                }
               return res.status(200).send('Link sent to Email Address')
          });
        }
    })

})


 Router.post('/activtypassword/:token',(req,res)=>{
     async.waterfall([
         (done)=>{
            User.findOne({restartLinkPassword: req.params.token},(err,user)=>{
                if(!user) return res.status(400).send("Reset Password Link Invald")
                if(restartLinkPassword == req.body.token && req.body.password == req.body.newPassword){
                    bcrypt.genSalt(10, function(err, salt) {
                        bcrypt.hash(req.body.newPassword, salt, function(err, hash) {
                            if(err){
                                return res.status(400).send('can not hash password')
                            }
                            user.password = hash;
                            user.restartLinkPassword = undefined;
                            user.save(function(err) {
                                (user, function(err) {
                                  done(err, user);
                                });
                            }); 
                        });
                    });
                }
    
               
            })
           
         },
          (user,done)=>{
            var api_key = '25e8cf8b4c4c594c0ef4d1cf5fb72d9c-913a5827-fd372169';
            var domain = 'sandboxed3b76859ab44cfd9a66972c3ff46d63.mailgun.org';
            var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
             
            var data = {
              from: 'PayItForward <payitforwardinvestmentlimited@gmail.com>',
              to: 'frankainoo@gmail.com',
              subject: 'Congratulation',
              html: ` Please Your password have successful change</p>
              Don't share your password with anyone
              `
            }; mailgun.messages().send(data, function (error, body) {
                if(error){
                    return res.status(400).send(error.message)
                }
                return res.status(200).send('Password Update Successful')
                
          });
                done(err,user)
    

        }
     ])
 })

 router.post('/updatePassword',function(req, res){
    User.findOne({ email: req.body.email }, function (errorFind, userData) {
        if(userData.token==req.body.linkDate && req.body.password==req.body.confirm_password)
        {
            bcrypt.genSalt(10, (errB, salt) => {
                bcrypt.hash(req.body.password, salt, (err, hash) => {
                    if (err) throw err;
                    let newPassword = hash;
                    let condition = { _id: userData._id };
                    let dataForUpdate = { password: newPassword,updatedDate: new Date() };
                    User.findOneAndUpdate(condition, dataForUpdate, { new: true }, function (error, updatedUser) {
                        if (error) {
                            if (err.name === 'MongoError' && error.code === 11000) {
                              return res.status(500).json({msg:'Mongo Db Error', error:error.message});
                            }else{
                                return res.status(500).json({msg:'Unknown Server Error', error:'Unknow server error when updating User'});
                            }
                        }
                        else{
                                if (!updatedUser) {
                                    return res.status(404).json({
                                        msg: "User Not Found.",
                                        success: false
                                    });
                                }else{
                                return res.status(200).json({
                                    success: true,
                                    msg: "Your password are Successfully Updated",
                                    updatedData: updatedUser
                                });
                            }
                        }
                    });
                });
            });
        }
        if (errorFind)
        {
                return res.status(401).json({
                msg: "Something Went Wrong",
                success: false
            });
        }
    }
    );
   
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