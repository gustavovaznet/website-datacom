//HEADER

//IMPORTING
//REACT
import React from 'react';
//STYLED COMPONENTS
import styled from 'styled-components';
//LANGUAGE SWITCHER
import LanguageSwitcher from '../LanguageSwitcher';
//ASSETS
import logoImg from '../../assets/logo.svg';

//CONTAINER
const Container = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 56px;

	@media (min-width: 960px) {
		margin-bottom: 128px;
	}
`
//HEADER
const Header = () => {
	//RETURN
	return (
		<Container>
			<a href='/'>
				<img src={logoImg} alt='Logo' />
			</a>
			<LanguageSwitcher />
		</Container>
	)
}

//EXPORTING
export default Header;