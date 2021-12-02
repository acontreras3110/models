import IPoll, { IPollOptions } from '../../types';
import PollRepository from '../IRepository';
import ORM from '../../../../orm';

const sequelize = ORM.PostgresDB;

export default class implements PollRepository {
	async get(options: IPollOptions): Promise<IPoll> {
		try {
			const polls = await sequelize.models.polls.findOne(options);
			return polls?.toJSON() as IPoll;
		} catch (e) {
			console.error(e);
			return {} as IPoll;
		}
	}

	async getAll(options: IPollOptions): Promise<IPoll[]> {
		try {
			const polls = await sequelize.models.polls.findAll(options);
			return polls.map((model) => model.toJSON()) as IPoll[];
		} catch (e) {
			console.error(e);
			return [];
		}
	}

	async delete(options: IPollOptions): Promise<void> {
		try {
			await sequelize.models.polls.destroy(options);
		} catch (e) {
			console.error(e);
		}
	}

	async create({ data }: { data: IPoll | IPoll[] }): Promise<IPoll | IPoll[]> {
		try {
			let result;
			if (Array.isArray(data)) {
				result = await sequelize.models.polls.bulkCreate(data, {
					fields: [
						'projectId',
						'type',
						'state',
						'description',
						'name',
						'version',
					],
				});
				return result.map((model) => model.toJSON()) as IPoll[];
			}
			result = await sequelize.models.polls.create(
				{ ...data },
				{
					fields: [
						'projectId',
						'type',
						'state',
						'description',
						'name',
						'version',
					],
				},
			);
			return result.toJSON() as IPoll;
		} catch (e) {
			console.error(e);
			return [];
		}
	}

	async update({
		options,
		data,
	}: {
		options: IPollOptions;
		data: IPoll | IPoll[];
	}): Promise<IPoll[]> {
		try {
			await sequelize.models.polls.update({ ...data }, options);
			const polls = await sequelize.models.polls.findAll(options);
			return polls.map((model) => model.toJSON()) as IPoll[];
		} catch (e) {
			console.error(e);
			return [];
		}
	}
}
