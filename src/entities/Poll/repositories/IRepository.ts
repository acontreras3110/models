import IPoll, { IPollOptions } from '../types';

export default interface PollRepository {
	get(options: IPollOptions): Promise<IPoll | undefined>;

	getAll(options: IPollOptions): Promise<IPoll[]>;

	create({ data }: { data: IPoll | IPoll[] }): Promise<IPoll | IPoll[]>;

	delete(options: IPollOptions): Promise<void>;

	update({
		options,
		data,
	}: {
		options: IPollOptions;
		data: IPoll | IPoll[];
	}): Promise<IPoll | IPoll[]>;
}
