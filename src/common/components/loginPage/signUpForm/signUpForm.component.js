import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {Button, TextField} from '@material-ui/core';

import {signUp} from "../../../services/auth";

const SignUpSchema = Yup.object().shape({
	email: Yup.string()
		.email('incorrect email format!')
		.required('email is required'),
	password: Yup.string()
		.required('password is required')
		.min(6, 'Must be longer 6 symbols'),
	passwordConfirm: Yup.string()
		.oneOf([Yup.ref('password'), null], "passwords must match")
		.required('password confirm is required')
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
						<Field name="passwordConfirm" className="form-control" placeholder="******" type="password"/>
						<div className="error-message">
							<ErrorMessage name="passwordConfirm" />
						</div>
					</div>
					<div className="form-group">
						<Button type="submit" variant="contained" color="primary">Sign up</Button>
					</div>
				</Form>
			</Formik>
		</div>
	)
};
