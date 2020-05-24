import App from './App';
import LoginPage from './common/components/loginPage/loginPage.component';

export default [{
	component: App,
	routes: [{
		path: "/",
		exact: true,
		component: LoginPage,
	}]
}]
