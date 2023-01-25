import express from 'express';
// import checkAuth from '../middlewares/checkAuth';
import checkNoAuth from '../middlewares/checkNoAuth';

const indexRouter = express.Router();

indexRouter.get('/', async (req, res) => {
  try {
    const initState = {};
    res.render('Layout', initState);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

indexRouter.get('/signup', checkNoAuth, (req, res) => {
  try {
    res.render('Layout');
  } catch (error) {
    console.log(error);
    res.sendStatus(500, 'render signup');
  }
});

indexRouter.get('/signin', checkNoAuth, (req, res) => {
  try {
    res.render('Layout');
  } catch (error) {
    console.log(error);
    res.sendStatus(500, 'render signin');
  }
});

export default indexRouter;
