import React, {useState} from 'react';
import './loginForm.scss';

export const SignInForm = () => {

	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);

	return(
		<div className="login-form">
			<form>
				<input type="text" name="email" id="email" tabIndex="1" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
				<input type="text" name="password" id="password" tabIndex="1" placeholder="password" onChange={(e) => setPassword(e.target.value)} />

				<input className="login-form-submit" type="submit" value="Sign in" disabled={!password && !email} />
			</form>
		</div>
	)
};

export const SignUpForm = () => {

	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	// const [passwordRepeat, setPasswordRepeat] = useState(null); not fixed


	return(
		<div className="login-form">
			<form>
				<input type="text" name="email" id="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
				<input type="text" name="password" id="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
				{/*<input type="text" name="password-repeat" id="password-repeat" placeholder="repeat password" />*/}

				<input className="login-form-submit" type="submit" value="Sign up" />
			</form>
		</div>
	)
};
