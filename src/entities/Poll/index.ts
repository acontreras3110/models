import { JoiSchema, Validate } from '../../shared/interfaces/IModel';
import IPoll from './types';
import repository from './repositories';
import IRepository from './repositories/IRepository';
import schemas from './schemas';

interface PollModel extends JoiSchema {
	validate: (datatype: Partial<IPoll>) => Validate;
	entity: IRepository;
}

const Model: PollModel = {
	schema: schemas.Joi,
	validate: (data: Partial<IPoll>): Validate => {
		const valid = schemas.Joi.validate(data, {
			stripUnknown: true,
		});

		return {
			isValid: !valid.error,
			message: valid.error?.message,
		};
	},
	entity: repository,
};

export default Model;
