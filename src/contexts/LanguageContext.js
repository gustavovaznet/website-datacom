//LANGUAGE CONTEXT

//IMPORTING
import React, { createContext, useReducer } from 'react';

let initialState;
const languageFromUrl = window.location.pathname.split('/')[1];
const acceptableLanguages = ['en', 'rs'];

//LANGUAGE CHECK
if (acceptableLanguages.includes(languageFromUrl)) {
	initialState = languageFromUrl
} else {
	initialState = 'en'
}

export const languageStore = createContext(initialState)

//LANGUAGE PROVIDER
export const LanguageProvider = ({ children }) => {
	const [state, dispatch] = useReducer((state, action) => {
		switch (action.type) {
			case 'Switch to English':
				return 'en'
			case 'Switch to Portuguese':
				return 'pt'
			default:
				return 'en'
		}
	}, initialState);
	//RETURN
	return <Provider value={{ state, dispatch }}>{children}</Provider>
}

const { Provider } = languageStore;
