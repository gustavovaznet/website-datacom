//APP

//IMPORTING
import React, { useContext } from 'react';
import './App.scss';
import FirstSection from './sections/FirstSection';
import Expertise from './sections/Expertise';
import LatestWork from './sections/LatestWork';
import HowWeWork from './sections/HowWeWork';
import Form from './sections/Form';
import Footer from './components/layout/Footer';
import { LanguageProvider } from './contexts/LanguageContext';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { languageStore } from './contexts/LanguageContext';

//HOME
const Home = () => (
	<>
		<FirstSection />
		<Expertise />
		<LatestWork />
		<HowWeWork />
		<Form />
		<Footer />
	</>
);

//APP
function App() {
	const { state: language } = useContext(languageStore);
	const supportedLanguages = ['en', 'pt'];
	return (
		<Router onUpdate={() => window.scrollTo(0, 0)}>
			<Switch>
				<Route
					path='/:lang/'
					exact
					render={(props) =>
						supportedLanguages.includes(props.match.params.lang) ? (
							<Home {...props} />
						) : (
							<Redirect to={`/${language}`} />
						)
					}
				/>
				<Redirect to={`/${language}`} />
			</Switch>
		</Router>
	);
}

//APP WRAPPER
function AppWrapper({ children }) {
	//RETURN
	return <LanguageProvider>{children}</LanguageProvider>
}
//WRAPPED APP
function WrappedApp() {
	//RETURN
	return (
		<AppWrapper>
			<App />
		</AppWrapper>
	);
}

export default WrappedApp;
