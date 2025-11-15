import { sequelize } from '../config/database.ts';  
import appmodel from './app.ts';
import eventmodel from './event.ts';


sequelize.authenticate();
export const db = {
  sequelize, 
  Sequelize: sequelize,
  Event:eventmodel,
  App:appmodel,
  
};

export default db;