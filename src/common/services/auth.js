import history from '../../history';
import axios from 'axios';
import {baseUrl} from "../constants/constants";
const authUrl = `${baseUrl}/auth`;

export const signUp = (email, password) => {
	const url = `${authUrl}/register`;
	const userData = {
		email: email,
		password: password,
	};

	return axios.post(url, userData)
		.then(() => {
			history.push('/complete-completeProfile');
		})
		.catch((err) => {
			console.log(err);
		})
};

export const signIn = (email, password) => {
	const endpointPath = '/login';

	console.log(email, password);
};
