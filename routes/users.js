const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

/* GET users listing. */
router.get('/foda', function(req, res, next) {
 // res.render('user');
/*res.json({
  name: 'ei doug, pq vc n vai se fude rsrsrsrs',
  lastName: 'isso mesmo, mandei mesmo',
  age: 20

})*/

//res.json(req.query);
  res.end("eai mano caiu no gemidao aaaaaah uuuooooohhhhh");

});
router.get('/', function(req, res, next) {
  const queryado = req.query.name;
  res.render('user', {title: queryado });
});

router.post('/create', function(req, res, next) {
  const userData = {  
    firstName: req.body.firstname,
    lastName: req.body.lastname,
    instagram: req.body.instagram,
    email: req.body.email,
    age: req.body.age,  
  };
   console.log('mandou1');
  mongoose.models.user.create(userData, function(error, newUser){
    if (error){ 
      res.status = 400;
      return res.json({ 
        message: "deu bosta",
      });
    }
 console.log('mandou2');
    res.json({
      data: newUser,
    });
  });

});

router.post('/delete', function(req, res, next) { //: cria uma variavel
  const _id = req.body._id;
  var deleteWhere = {_id: _id,};
  mongoose.models.user.remove(deleteWhere,
  function(error, userList){
    if (error){ 
      res.status = 400;
      return res.json({ 
        message: "deu bosta",
      });
    }
    res.json({
      data: userList,
    });
  });
});

router.get('/list', function(req, res, next) {
  
  mongoose.models.user.find({}, function(error, userList){
    if (error){ 
      res.status = 400;
      return res.json({ 
        message: "deu bosta",
      });
    }

    
    res.json({
      data: userList,
    });
  });

});

router.get('/findbyname/:name', function(req, res, next) { //: cria uma variavel
  const name = req.params.name;
  mongoose.models.user.find({
    firstName: RegExp("^"+name, "i")
  }, 
  function(error, userList){
    if (error){ 
      res.status = 400;
      return res.json({ 
        message: "deu bosta",
      });
    }
  
    res.json({
      data: userList,
    });
  });
});




router.get('/editname/', function(req, res, next) { //: cria uma variavel
  const id = req.query._id;
  const name = req.query.firstname;
  mongoose.models.user.update({
    _id: id,
  }, 
  {
    firstName: name,
  }, 
  function(error, userList){
    if (error){ 
      res.status = 400;
      return res.json({ 
        message: "deu bosta",
      });
    }
  
    res.json({
      data: userList,
    });
  });



});

//http://localhost:3000/users/create/?firstname=victor&lastname=biba&instagram=@biba&email=soubiba@biba.com&age=13



module.exports = router;

