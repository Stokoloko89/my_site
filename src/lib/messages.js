import { supabaseClient } from '../utils/client';

// @ts-ignore
export async function createNewMessage({ name, email }) {
	let { error, data } = await supabaseClient.from('profiles').insert([{ name, email }]);

	if (error) {
		throw error;
	}
	return data;
}
