
import { create, findAll, findByPk, update, destroy } from './../models/user';
import sequelize from '../config/database';
export async function createUser(req, res) {
    try {
        const USER_MODEL = {
          username: req.body.name,
          email: req.body.email,
          password: req.body.password,
        };
    
        try {
          const user = await create(USER_MODEL);
          console.log('User crerated');
          return res.status(201).json(user);
        } catch (error) {
          return res.status(500).json(error);
        }
      } catch (error) {
        return res.status(500).json(error);
      }
}
export async function listAllUsers(req, res) {
    try {
        const response = await findAll({       
              attributes: {exclude: ['password']}
        }
        );
        return res.status(200).json(response);
      } catch (error) {
        return res.status(500).json(error.message);
      }
}
export async function selectUserById(req, res) {
    try {
        const user = await findByPk(req.params.id);
        return res.status(200).json(user);
      } catch (error) {
        return res.status(500).json(error);
      }
}
export async function updateUser(req, res) {
    try {
        const USER_MODEL = {
          username: req.body.name,
          email: req.body.email,
          password: req.body.password,
        };
    
        try {
          const user = await update(USER_MODEL, { where: { id: req.params.id } });
          return res.status(200).json(user);
        } catch (error) {}
      } catch (error) {
        return res.status(500).json(error);
      }
}

export async function deleteUser(req, res) {
    try {
        const user = await destroy({ where: { id: req.params.id } });
        return res.status(200).json(user);
      } catch (error) {
        return res.status(500).json(error);
      }  
}