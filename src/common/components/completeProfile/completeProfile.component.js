import React from 'react';
import './completeProfile.scss'
import {
	Typography,
	Grid,
	FormControlLabel,
	TextField,
	Checkbox
} from '@material-ui/core';

const CompleteProfile = () => {
return(
	<div className="complete-profile">
		<div className="complete-profile-modal">
			<Grid container spacing={3}>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						id="firstName"
						name="firstName"
						label="First name"
						fullWidth
						autoComplete="given-name"
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						id="lastName"
						name="lastName"
						label="Last name"
						fullWidth
						autoComplete="family-name"
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						id="city"
						name="city"
						label="City"
						fullWidth
						autoComplete="shipping address-level2"
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						id="country"
						name="country"
						label="Country"
						fullWidth
						autoComplete="shipping country"
					/>
				</Grid>
				<Grid item xs={12}>
					<FormControlLabel
						control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
						label="Use this address for payment details"
					/>
				</Grid>
			</Grid>
		</div>
	</div>
)
};

export default CompleteProfile;
