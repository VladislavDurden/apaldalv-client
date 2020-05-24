const axios = require('axios');
const apiUrl = 'https://apaldalv-api.herokuapp.com/auth';

export const signUp = (email, password) => {
	const url = `${apiUrl}/register`;

	axios({
		method: 'post',
		url: url,
		data: {
			email: email,
			password: password,
		}
	});
};

export const signIn = (email, password) => {
	const endpointPath = '/login';

	console.log(email, password);
};
