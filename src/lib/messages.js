import { supabaseClient } from '../utils/client';

// @ts-ignore
export async function createNewMessage({ name, email, message }) {
	let { error, data } = await supabaseClient.from('profiles').insert([{ name, email, message }]);

	if (error) {
		throw error;
	}
	return data;
}
