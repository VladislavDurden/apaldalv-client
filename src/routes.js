import App from './App';
import LoginPage from './common/components/loginPage/loginPage.component';
import Account from './common/components/account/account.component';

export default [{
	component: App,
	routes: [{
		path: "/",
		exact: true,
		component: LoginPage,
	}, {
		path: "/account",
		exact: true,
		component: Account,
	}]
}]
