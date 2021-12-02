import { DataTypes, Model } from 'sequelize';
import ORM from '../../../../orm';

const sequelize = ORM.PostgresDB;

class Poll extends Model {}

Poll.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: true,
		},
		token: {
			type: DataTypes.UUIDV4,
			allowNull: true,
		},
		projectId: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'project_id',
		},
		type: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		state: {
			type: DataTypes.STRING,
		},
		description: {
			type: DataTypes.STRING,
		},
		name: {
			type: DataTypes.STRING,
		},
		version: {
			type: DataTypes.INTEGER,
		},
	},
	{
		// Other model options go here
		sequelize, // We need to pass the connection instance
		modelName: 'polls', // We need to choose the model name
	},
);

export default Poll;

// //https://sequelize.org/v5/class/lib/associations/base.js~Association.html
