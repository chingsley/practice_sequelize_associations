const express = require('express');
const db = require('./database/models');
const {
  testUWD,
  getUWD,
  addPost,
  getAllUsersAndTheirPosts,
  getOneUserAndHerPosts,
  getOnePostWithItsOwner,
  getAllPostsAlongWithOwners,
} = require('./associations.test');

const server = express();
server.use(express.json());

// testUWD();
getUWD(); // UWD = userWorkingDays
// addPost();
// getOneUserAndHerPosts();
// getAllUsersAndTheirPosts();
// getOnePostWithItsOwner();
// getAllPostsAlongWithOwners();

module.exports = server;
