//FOOTER

//IMPORTING
import React from 'react';
import styled from 'styled-components';

//CONTAINER
const Container = styled.footer`
	background-color: #800000;
	display: flex;
	justify-content: center;
	text-align: center;
	color: #fff;
	font-weight: 600;

	line-height: 28px;
	font-size: 18px;
    padding: 1.6rem;

	@media (min-width: 512px) and (min-height: 512px) {
		font-size: 16px;
	}

	@media (min-width: 768px) and (min-height: 512px) {
		font-size: 20px;
	}
`
//FOOTER CONTAINER
const FooterContainer = styled.div`
	padding: 3.2rem 2.4rem;
`

//FOOTER
const Footer = () => {
	//RETURN
	return (
		<Container>
			<FooterContainer>
				<p>
					Datacom 2021-2022 © All Rights Reserved
				</p>
			</FooterContainer>
		</Container>
	)
}

export default Footer;
