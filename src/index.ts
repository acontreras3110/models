export { DataTypes, Model } from 'sequelize';

export { default as PollModel } from './entities/Poll';
export type { default as IPoll, IPollOptions } from './entities/Poll/types';
export { default as ORM } from './orm';
export { default as ORMConfig } from './orm/config';
export type { ID } from './shared/interfaces/Id';

// //este es un ejemplo en caso de querer realizar una consulta a la aplicacion
// //debemos descomentar y ejecutar yarn start para ver que es lo que trae
//
// // connect ECONNREFUSED > base de datos no conectada
//
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
