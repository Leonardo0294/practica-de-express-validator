import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('express_validator', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});
