const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');


const User = require('../../models/User');


app.get("/users", (req, res) => {
    res.json(User.find());
  });
  
app.post("/users", async (req, res) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10)
      const user = {
      email: req.body.email,
      password: hashedPassword,
    };
    User.create(user)
    res.status(201).send()
  } catch {
    res.status(500).send();
  }
  });
  
  app.post("/users/login", async (req, res) => {
    const user = User.find({email:req.body.email})
    if (user == null) {
      return res.status(400).send('Cannot find user')
    }
    try {
      if(await bcrypt.compare(req.body.password, user.password)) {
        res.send('Success')
      } else {res.send('not allowed')}
    } catch {
      res.status(500).send()
    }
  })


module.exports = router;