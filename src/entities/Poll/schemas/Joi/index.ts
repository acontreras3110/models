import _Joi from 'joi';
import JoiDate from '@joi/date';

const Joi = _Joi.extend(JoiDate);

export default Joi.object().keys({
	token: Joi.string().guid({
		version: ['uuidv4'],
	}),
	projectId: Joi.string().required(),
	type: Joi.string().valid('ENTRY', 'EXIT', 'AST').required(),
	state: Joi.string().valid('ACTIVE', 'INACTIVE').required(),
	description: Joi.string(),
	name: Joi.string(),
	version: Joi.number(),
});
