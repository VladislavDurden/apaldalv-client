import App from './App';
import LoginPage from './common/components/loginPage/loginPage.component';

const homeUrl = '/apaldalv-client';

export default [{
	component: App,
	routes: [{
		path: homeUrl,
		exact: true,
		component: LoginPage,
	}]
}]
