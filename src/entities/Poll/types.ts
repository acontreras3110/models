import { Order } from 'sequelize';

export type PollType = 'ENTRY' | 'EXIT' | 'AST';
export type PollState = 'ACTIVE' | 'INACTIVE';

export interface IPollOptions {
	where: any;
	attributes?: string[];
	limit?: number;
	offset?: number;
	order?: Order | undefined;
	include?: any;
}

export default interface IPoll {
	token?: string;
	projectId?: string;
	type?: PollType;
	state?: PollState;
	description?: string;
	name?: string;
	version?: number;
}
