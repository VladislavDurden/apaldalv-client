import React, {useState} from 'react';
import {SignInForm} from "./signInForm/signInForm.component";
import {SignUpForm} from './signUpForm/signUpForm.component';
import './loginPage.scss';

const LoginPage = () => {

	const [isSignIn, changeIsSignIn] = useState(true);

	return (
		<div className="login-page">
			{
				isSignIn
					? SignInForm()
					: SignUpForm()
			}
			<div className="choose-form">
				<input type="button" value={!isSignIn ? 'SIGN IN' : 'SIGN UP'} onClick={() => changeIsSignIn(!isSignIn)}/>
			</div>
		</div>
	);
};

export default LoginPage;
