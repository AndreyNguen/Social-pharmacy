import express from 'express';

const indexRouter = express.Router();

indexRouter.get('/', (req, res) => {
  try {
    const initState = {};
    res.render('Layout', initState);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

export default indexRouter;
