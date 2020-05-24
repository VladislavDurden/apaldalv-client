const axios = require('axios');
const apiUrl = 'https://apaldalv-api.herokuapp.com/auth';

export const signUp = (email, password) => {
	const url = `${apiUrl}/register`;

	axios.post(url, {
		params: {
			email: email,
			password: password,
		}
	})
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});
};

export const signIn = (email, password) => {
	const endpointPath = '/login';

	console.log(email, password);
};
