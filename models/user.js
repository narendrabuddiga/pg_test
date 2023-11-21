import { INTEGER, STRING } from 'sequelize';
import { define, literal } from '../config/database';

const User = define('users',{
  id: {
    type: INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  username: {
    type: STRING,
    allowNull: false,
    unique: true
  },
  email: {
    type: STRING,
    allowNull: false,
  },
  password: {
    type: STRING,
    allowNull: false,
    set(value) {
      this.setDataValue('password', hash(value));
    }
  },
  phonenumber:{
    type:INTEGER,
    allowNull:true,
    get() { 
      const rawValue = this.getDataValue('phonenumber');
      return rawValue ? rawValue.toString() : null;
    }
  }, createdAt: {
    type: "TIMESTAMP",
    defaultValue: literal("CURRENT_TIMESTAMP"),
    allowNull: false,
    get() { 
      const rawValue = this.getDataValue('createdAt');
      return rawValue ?1000*(new Date(rawValue) / 1000) : null;
    } 
  }

  
});

User.associate = (models) => {
  User.hasMany(models.UserAddress, {
    foreignKey: {
      name: 'userId',
      allowNull: false
    },
    as: 'address'
  });
}

export default User;
