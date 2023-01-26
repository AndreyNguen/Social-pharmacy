import express from 'express';
// import checkAuth from '../middlewares/checkAuth';
import checkNoAuth from '../middlewares/checkNoAuth';
import { Drug } from '../../db/models';

const indexRouter = express.Router();

indexRouter.get('/', async (req, res) => {
  try {
    const allDrugs = await Drug.findAll();
    const initState = { allDrugs };
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

indexRouter.get('/cart', checkNoAuth, (req, res) => {
  try {
    res.render('Layout');
  } catch (error) {
    console.log(error);
    res.sendStatus(500, 'render signin');
  }
});

export default indexRouter;
