import React, {useState} from 'react';
import * as Yup from 'yup';
import { Formik, Field } from 'formik';

import {signUp} from "../../../services/auth";

const SignUpSchema = Yup.object().shape({
	email: Yup.string().email('Incorrect email format!').required('Required'),
	password: Yup.string().required('Required'),
});

export const SignUpForm = () => {
	return(
		<div className="login-form">
			<Formik
				onSubmit={({email, password}) => {
					signUp(email, password);
				}}
				initialValues={{email: '', password: ''}}
				validationSchema={SignUpSchema}
				render={({handleSubmit}) => (
					<form onSubmit={handleSubmit}>
						<div className="form-group">
							<Field name="email" className="form-control" placeholder="email" type="email"/>
						</div>
						<div className="form-group">
							<Field name="password" className="form-control" placeholder="******" type="password"/>
						</div>
						<div className="form-group">
							<button type="submit" className="btn btn-primary btn-block">Sign up</button>
						</div>
					</form>
				)}
			/>
		</div>
	)
};
