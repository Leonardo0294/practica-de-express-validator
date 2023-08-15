import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';

export const UserModel = sequelize.define('User', {
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING
  }
}, {
  timestamps: true
});
