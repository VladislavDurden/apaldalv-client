import App from './App';
import LoginPage from './common/components/loginPage/loginPage.component';
import CompleteProfile from './common/components/completeProfile/completeProfile.component';

export default [{
	component: App,
	routes: [{
		path: "/",
		exact: true,
		component: LoginPage,
	}, {
		path: "/complete-profile",
		exact: true,
		component: CompleteProfile,
	}]
}]
