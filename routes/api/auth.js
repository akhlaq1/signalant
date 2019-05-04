const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const request = require('request');
// const passport = require("passport");
const validator = require('validator');
const isEmpty = require('../../utils/isEmpty');
const key = require('../../config/dbSecretKeys');

// bring in user model
require('../../models/User');
const User = mongoose.model('users');

// POST | api/auth/register
// register process
router.post('/register', (req, res, next) => {
  const { errors, isValid } = validateRegister(req.body);

  // Register validation
  function validateRegister(data) {
    let errors = {};

    // check if data send is ""
    data.name = !isEmpty(data.name) ? data.name : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.password2 = !isEmpty(data.password2) ? data.password2 : '';

    // validation using validator
    if (validator.isEmpty(data.name)) {
      errors.name = 'name is required';
    }
    if (validator.isEmpty(data.email)) {
      errors.email = 'email is required';
    }
    if (!validator.isEmail(data.email)) {
      errors.email = 'email is not valid';
    }
    if (validator.isEmpty(data.password)) {
      errors.password = 'password is required';
    }
    if (validator.isEmpty(data.password2)) {
      errors.password2 = 'confirm password is required';
    }
    if (!validator.equals(data.password, data.password2)) {
      errors.password2 = 'confirm password did not match';
    }
    return {
      errors,
      isValid: isEmpty(errors)
    };
  }

  if (!isValid) {
    return res.status(400).json(errors);
  } else {
    User.findOne({ email: req.body.email })
      .then(user => {
        if (user) {
          errors.email = 'Email already exists';
          return res.status(400).json(errors);
        } else {
          const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            role: req.body.usertype
          });
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) {
                res.json({ success: false, msg: 'Failed to register user' });
              } else {
                newUser.password = hash;
                newUser
                  .save()
                  .then(user => {
                    res.json({ success: true, msg: 'User registered' });
                  })
                  .catch(ex => {
                    return res.status(500).send('Something went wrong');
                  });
              }
            });
          });
        }
      })
      .catch(ex => {
        return res.status(500).send('Something went wrong');
      });
  }
});

// newsletter signup process
// const{ firstname, lastname, email } = req.body;
router.post('/newsletter', (req, res) => {
  console.log(req.body);
  const { errors, isValid } = validateNewsletter(req.body);

  // Register validation
  function validateNewsletter(data) {
    let errors = {};

    // check if data send is ""
    data.firstname = !isEmpty(data.firstname) ? data.firstname : '';
    data.lastname = !isEmpty(data.lastname) ? data.lastname : '';
    data.email = !isEmpty(data.email) ? data.email : '';

    // validation using validator
    if (validator.isEmpty(data.firstname)) {
      errors.firstname = 'firstname is required';
    }
    if (validator.isEmpty(data.lastname)) {
      errors.lastname = 'lastname is required';
    }
    if (validator.isEmpty(data.email)) {
      errors.email = 'email is required';
    }
    if (!validator.isEmail(data.email)) {
      errors.email = 'email is not valid';
    }
    return {
      errors,
      isValid: isEmpty(errors)
    };
  }

  if (!isValid) {
    return res.status(400).json(errors);
  } else {
    // Construct req data
    const data = {
      members: [
        {
          email_address: req.body.email,
          status: 'subscribed',
          merge_fields: {
            FNAME: req.body.firstname,
            LNAME: req.body.lastname
          }
        }
      ]
    };

    const postData = JSON.stringify(data);

    const options = {
      url: 'https://us18.api.mailchimp.com/3.0/lists/04d23e9000',
      method: 'POST',
      headers: {
        Authorization: 'auth 348ef75dcb88142aa49bf84c01a5410f-us18'
      },
      body: postData
    };

    request(options, (err, response, body) => {
      if (err) {
        res.json({ success: false, msg: 'Failed to subscribe user' });
      } else {
        if (response.statusCode === 200) {
          res.json({ success: true, msg: 'User subscribed' });
        } else {
          res.json({ success: false, msg: 'Failed to subscribe user' });
        }
      }
    });
  }
});

// POST | api/auth/login
// Login process
router.post('/login', (req, res, next) => {
  const { errors, isValid } = validateLogin(req.body);

  // Login validation
  function validateLogin(data) {
    let errors = {};

    if (validator.isEmpty(data.email)) {
      errors.email = 'email is required';
    }
    if (!validator.isEmail(data.email)) {
      errors.email = 'email is not valid';
    }
    if (validator.isEmpty(data.password)) {
      errors.password = 'password is required';
    }
    return {
      errors,
      isValid: isEmpty(errors)
    };
  }

  if (!isValid) {
    return res.status(400).json(errors);
  } else {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email })
      .then(user => {
        // check for user
        if (!user) {
          errors.email = 'User does not exist';
          return res.status(400).json(errors);
        } else {
          // check password
          bcrypt
            .compare(password, user.password)
            .then(isMatch => {
              if (isMatch) {
                // user matched
                const payload = {
                  id: user.id,
                  name: user.name,
                  role: user.role
                };
                // create JWT payload
                // sign token
                jwt.sign(
                  payload,
                  key.secretOrKey,
                  { expiresIn: 86400 },
                  (err, token) => {
                    res.json({
                      success: true,
                      token: 'JWT ' + token
                    });
                  }
                );
              } else {
                errors.password = 'Password incorrect';
                return res.status(400).json(errors);
              }
            })
            .catch(ex => {
              return res.status(500).send('Something went wrong');
            });
        }
      })
      .catch(ex => {
        return res.status(500).send('Something went wrong');
      });
  }
});

// test if the backend is secured
// router.get(
//   "/test",
//   passport.authenticate("jwt", { session: false }),
//   (req, res) => {
//     res.json({ message: "you are authorized" });
//   }
// );

module.exports = router;
