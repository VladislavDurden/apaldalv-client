import React, {useState} from 'react';
import {SignInForm, SignUpForm} from './loginForm/loginForm.component';
import './loginPage.scss';

const LoginPage = () => {

	const [isSignIn, changeIsSignIn] = useState(true);

	return (
		<div className="login-page">
			<h1 className="main-hello-text">Hi, mate!</h1>
			{
				isSignIn
					? SignInForm()
					: SignUpForm()
			}
			<div className="choose-form">
				<h1>
					{
						isSignIn
							? "If you DON'T register click here"
							: "If you ALREADY register click here"
					}
				</h1>
				<input type="button" value={isSignIn ? 'Sign up' : 'Sign in'} onClick={() => changeIsSignIn(!isSignIn)}/>
			</div>
			<h1 className="main-hello-text">It's not a Facebook :)</h1>
		</div>
	);
};

export default LoginPage;
