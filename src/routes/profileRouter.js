import express from 'express';
import bcrypt from 'bcrypt';
import { User } from '../../db/models';

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

indexRouter.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name, email, oldPass, newPass, repeatPass,
    } = req.body;
    const updateUser = await User.findOne({ where: { id } });
    if (newPass && (newPass === repeatPass)) {
      const compare = await bcrypt.compare(oldPass, updateUser.password);
      if (compare) {
        const hashPass = await bcrypt.hash(newPass, 5);
        updateUser.password = hashPass;
        req.session.user = updateUser;
      } else {
        console.log('passwords not compare');
      }
    }
    updateUser.name = name;
    updateUser.email = email;
    await updateUser.save();
    req.session.user = updateUser;
    res.json(updateUser);
  } catch (error) {
    console.log(error);
    res.sendStatus(500, '/patch');
  }
});

export default indexRouter;
