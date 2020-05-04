const {
  Company,
  WorkingDay,
  User,
  Post,
  UsersWorkingDay,
} = require('./database/models');

const testUWD = () => {
  UsersWorkingDay.create({ userId: 1, workingDayId: 2 })
    .then((result) => {
      console.log('result = ', result.dataValues);
    })
    .catch((err) => {
      console.log('err = ', err.message);
    });
};

const getUWD = async () => {
  const users = (
    await User.findAll({
      include: { model: WorkingDay, as: 'workingDays' },
    })
  ).map((el) => el.get({ plain: true }));

  console.log(users);
  // console.log(users[0].workingDays);
  // console.log(JSON.stringify(users));

  // const user = (
  //   await User.findOne({
  //     where: { id: 1 },
  //     include: { model: WorkingDay, as: 'workingDays' },
  //   })
  // ).dataValues;

  // const johnsWorkingDays = users[0].workingDays.map(
  //   ({ dataValues }) => dataValues
  // );
  // console.log('\n\n', users[0]);
  // console.log('\n\n', johnsWorkingDays);
};

const addPost = async () => {
  const result = await Post.create({
    title: 'new post',
    content: 'all the right moves in all the right places',
    userId: 1,
  });

  console.log('\n\n', result.dataValues);
};

const getAllUsersAndTheirPosts = async () => {
  // // method 1
  // let users = await User.findAll({
  //   include: { model: Post, as: 'posts' },
  // });
  // users = users.map(({ dataValues }) => dataValues);

  // method 2
  const users = await User.findAll({
    include: { model: Post, as: 'posts' },
  }).map((el) => el.get({ plain: true }));

  // // method 3
  // const users = await User.findAll({
  //   include: { model: Post, as: 'posts' },
  //   raw: true,
  //   nest: true,
  // });

  console.log(users);
};

const getOneUserAndHerPosts = async () => {
  let users = await User.findOne({
    where: { id: 1 },
    include: { model: Post, as: 'posts' },
  });

  // users = users.map(({ dataValues }) => dataValues);
  users = users.get({ plain: true });
  console.log(users);
};

const getOnePostWithItsOwner = async () => {
  const post = (
    await Post.findOne({
      where: { id: 1 },
      include: { model: User, as: 'owner' },
    })
  ).get({ plain: true });
  console.log(post);
};

const getAllPostsAlongWithOwners = async () => {
  const posts = await Post.findAll({
    include: { model: User, as: 'owner' },
    raw: true,
    nest: true,
  });

  console.log(posts);
};

module.exports = {
  testUWD,
  getUWD,
  addPost,
  getAllUsersAndTheirPosts,
  getOneUserAndHerPosts,
  getOnePostWithItsOwner,
  getAllPostsAlongWithOwners,
};
