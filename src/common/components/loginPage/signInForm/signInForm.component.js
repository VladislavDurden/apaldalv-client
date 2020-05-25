import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from '@material-ui/core/Button';

import {signIn} from "../../../services/auth";

const SignInSchema = Yup.object().shape({
	email: Yup.string()
		.email('incorrect email format!')
		.required('email is required'),
	password: Yup.string()
		.required('password is required')
});

export const SignInForm = () => {
	return(
		<div className="login-form">
			<Formik
				onSubmit={({email, password}) => {
					signIn(email, password);
				}}
				initialValues={{email: '', password: ''}}
				validationSchema={SignInSchema}
			>
				<Form>
					<div className="form-group">
						<Field name="email" className="form-control" placeholder="email" type="email"/>
						<div className="error-message">
							<ErrorMessage name="email" />
						</div>
					</div>
					<div className="form-group">
						<Field name="password" className="form-control" placeholder="******" type="password"/>
						<div className="error-message">
							<ErrorMessage name="password" />
						</div>
					</div>
					<div className="form-group">
						<Button type="submit" variant="contained" color="primary">Sign in</Button>
					</div>
				</Form>
			</Formik>
		</div>
	)
};
