// const { sequelize, User, Post } = db;
// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("Sequelize connection was successful");
//   })
//   .catch((err) => {
//     console.error(err.message);
//   });

const { User, Company, WorkingDay, Post } = db;

server.get('/', (req, res) => res.status(200).json({ message: 'winning...' }));
server.post('/api/company', (req, res) => {
  Company.create(req.body)
    .then((newCompany) => {
      // console.log(newCompany.get());
      res.status(201).json({ comapany: newCompany.get() });
    })
    .catch((err) => {
      // console.log(err);
      res.status(500).json({ error: err });
    });
});

server.post('/api/users/bulk', (req, res) => {
  User.bulkCreate([
    {
      email: 'john-doe@domain.com',
      firstname: 'John',
      lastname: 'DOE',
      companyId: 1,
    },
    {
      email: 'log_w@domain.com',
      firstname: 'Logan',
      lastname: 'WOLVERINE',
      companyId: 1,
    },
    {
      email: 'john-connor@domain.com',
      firstname: 'John',
      lastname: 'CONNOR',
      companyId: 1,
    },
  ])
    .then((newUsers) => {
      res.status(201).json({ users: newUsers });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

server.post('/api/post', (req, res, next) => {
  Post.create(req.body)
    .then((posts) => {
      return res.status(200).json({ posts });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

server.get('/api/post', (req, res, next) => {
  Post.findAll({ include: { model: User, as: 'owner' } })
    .then((posts) => {
      return res.status(200).json({ posts });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

server.get('/api/users/:id', async (req, res, next) => {
  User.findOne({
    where: { id: 6 },
    include: [
      { model: Company, as: 'company' },
      { model: Post, as: 'posts' },
    ],
  })
    .then((user) => {
      res.status(200).json({ user });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err.message });
    });
});
