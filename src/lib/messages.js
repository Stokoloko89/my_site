import { supabaseClient } from '../utils/client';

// @ts-ignore
export async function createNewMessage({ message, name, email }) {
	let { error, data } = await supabaseClient.from('profiles').insert([{ name, email, message }]);

	if (error) {
		throw error;
	}
	return data;
}
