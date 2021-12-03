export { DataTypes, Model } from 'sequelize';

export { default as PollModel } from './entities/Poll';
export type { default as IPoll, IPollOptions } from './entities/Poll/types';
export { default as ORM } from './orm';
export { default as ORMConfig } from './orm/config';
export type { ID } from './shared/interfaces/Id';

// import Poll from './entities/Poll/schemas/SequelizeModel';
// import pollModel from './entities/Poll';
//
// // CREATE
//
// pollModel.entity
// 	.create({
// 		data: {
// 			projectId: '6',
// 			type: 'ENTRY',
// 			state: 'ACTIVE',
// 			description: 'pruebas  Entry 6',
// 			name: 'pruebas Entry 6',
// 			version: 123,
// 		},
// 		// // Arreglo datos
// 		// data: [{
// 		// 	projectId: '6',
// 		// 	type: 'Exit',
// 		// 	state: 'Active',
// 		// 	description: 'pruebas Exit 5',
// 		// 	name: 'pruebas Exit 5',
// 		// 	version: 123,
// 		// },{
// 		// 	projectId: '6',
// 		// 	type: 'Entry',
// 		// 	state: 'Active',
// 		// 	description: 'pruebas  Entry 6',
// 		// 	name: 'pruebas Entry 6',
// 		// 	version: 123,
// 		// },]
// 	})
// 	.then((r) => console.log(r));
