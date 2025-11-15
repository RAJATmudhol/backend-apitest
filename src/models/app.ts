import { DataTypes, Model, Sequelize } from "sequelize";
import {sequelize} from '../config/database.ts'
import { v4 as uuidv4 } from "uuid";
import Event from "./event.ts";


  export class App extends Model {
    public id!: string;
    public name!: string;
    public ownerEmail?: string;
    public apiKey!: string;
    public status!: string;
  }

  App.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: () => uuidv4(),
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ownerEmail: {
        type: DataTypes.STRING,
      },
      apiKey: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        defaultValue: () => uuidv4(),
      },
      status: {
        type: DataTypes.STRING,
        defaultValue: "active",
      },
    },
    {
      sequelize,
      tableName: "apps",
      timestamps: true,
      createdAt: "createdAt",
      updatedAt: false,
    }
  );
 App.hasMany(Event, { foreignKey: 'appId', as: 'events' });
Event.belongsTo(App, { foreignKey: 'appId' });
  export default App;
