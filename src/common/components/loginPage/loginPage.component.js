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
			<input className='choose-form' type="button" value={!isSignIn ? 'Sign in' : 'Sign up'} onClick={() => changeIsSignIn(!isSignIn)}/>
		</div>
	);
};

export default LoginPage;
