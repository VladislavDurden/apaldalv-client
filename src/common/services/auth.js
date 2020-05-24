import history from '../../history';
import axios from 'axios';
const apiUrl = 'https://apaldalv-api.herokuapp.com/auth';

export const signUp = (email, password) => {
	const url = `${apiUrl}/register`;
	const userData = {
		email: email,
		password: password,
	};

	return axios.post(url, userData)
		.then(() => {
			history.push('/account');
		})
		.catch((err) => {
			console.log(err);
		})
};

export const signIn = (email, password) => {
	const endpointPath = '/login';

	console.log(email, password);
};
