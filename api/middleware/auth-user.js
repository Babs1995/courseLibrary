'use strict';

const auth = require('basic-auth');
const bcrypt = require('bcrypt');
const  { User } = require('../models');

exports.authUser = async (req, res, next) => {
  let message; // store the message to display

  // Parse the user's credentials from the Authorization header.
  const credentials = auth(req);
  console.log(credentials);

  if (credentials) {
    const authUser = await user.findOne({
      where: { emailAddress: credentials.name },
    });

    if (authUser) {
      const auth = bcrypt.compareSync(credentials.pass, user.password);

      if (authUser) {
        console.log(`Authentication successful for user: ${user.emailAddress}`);
        req.currentUser = user;
      } else {
        message = `Authentication failure for user: ${user.emailAddress}`;
      }
    } else {
      message = `User not found for user: ${credentials.emailAddress}`;
    }
  } else {
    message = "Auth header not found";
  }
  if (message) {
    console.warn(message);
    res.status(401).json({ message: 'Access Denied' });
  } else {
    next();
  }
};