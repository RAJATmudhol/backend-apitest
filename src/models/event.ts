import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database.ts";
import { v4 as uuidv4 } from "uuid";



export class Event extends Model {
    public id!: string;
    public appId!: string;
    public userId?: string;
    public event!: string;
    public url?: string;
    public referrer?: string;
    public device?: string;
    public ipAddress?: string;
    public timestamp?: Date;
    public metadata?: object;
  }

  Event.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: () => uuidv4(),
        primaryKey: true,
      },
      appId: {
        type: DataTypes.UUID,
        allowNull: false,
        
      },
      userId: DataTypes.STRING,
      event: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      url: DataTypes.TEXT,
      referrer: DataTypes.TEXT,
      device: DataTypes.STRING,
      ipAddress: DataTypes.STRING,
      timestamp: DataTypes.DATE,
      metadata: DataTypes.JSONB,
    },
    {
      sequelize,
      tableName: "events",
      timestamps: false,
    }
  );

 

 export default Event;
