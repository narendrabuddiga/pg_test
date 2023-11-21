import { INTEGER, STRING } from "sequelize";

import { define } from "../util/database";

const UserAddress = define("address", {
  id: {
    type: INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  address: {
    type: STRING,
    allowNull: false,
  },
  user_id: {
    type: INTEGER,
    allowNull: false,
    references: {         
      model: 'users',
      key: 'id'
    }
  }
});

export default  UserAddress;
