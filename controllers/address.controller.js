import { create } from "../models/userAddress";

export async function addUserAddress(req, res) {
    try {
        const USER_ADDRESS_MODEL = {
          id: req.body.id,
          address: req.body.address,
        };
    
        try {
          const user = await create(USER_ADDRESS_MODEL);
          console.log('User Address Added');
          return res.status(201).json(user);
        } catch (error) {
          return res.status(500).json(error);
        }
      } catch (error) {
        return res.status(500).json(error);
      }
}