// @ts-ignore
import Joi from 'joi';

export interface Validate {
	isValid: boolean;
	message?: string;
}

interface Model {
	schema: unknown;
	validate(data: unknown): Validate;
	entity: unknown;
}

export interface JoiSchema extends Model {
	schema: Joi.Schema;
}

export default Model;
