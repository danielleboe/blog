const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const path = require('path');
const sequelize = require('./config/connection');
const routes = require('./controllers');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const postRoutes = require('./controllers/api/postRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const hbs = exphbs.create({
  // Register partials directory
  partialsDir: path.join(__dirname, 'views', 'partials')
});

// const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);
// Use the post routes
app.use('/posts', postRoutes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
});