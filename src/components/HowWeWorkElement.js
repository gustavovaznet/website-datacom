//HOW WE WORK ELEMENT

//IMPORTING
import React from 'react';
import styled from 'styled-components';
import preferences from '../preferences';

//CONTAINER
const Container = styled.div`
	p {
		color: ${preferences.colors.neutral};
	}

	display: flex;
	align-items: flex-start;
`
//LI
const Li = styled.li`
	&:not(:last-child) {
		margin-bottom: 40px;
	}

	@media (min-width: 960px) {
		flex: 1 0 40%;
		max-width: 600px;
		margin-bottom: 64px !important;

		&:nth-child(odd) {
			margin-right: 182px;
		}
	}

	@media (min-width: 1600px) {
		margin-bottom: 80px !important;
	}
`
//NUMBER ELEMENT
const NumberElement = styled.img`
	margin-right: 24px;
	height: 64px;
`
//TEXT CONTAINER
const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
`
//TITLE
const Title = styled.h3`
	font-weight: bold;
	font-size: 24px;
	color: ${preferences.colors.secondaryMain};
	margin-bottom: 8px;

	@media (min-width: 960px) {
		font-size: 32px;
	}
`
//HOWWEWORKELEMENT
const HowWeWorkElement = ({ imgSrc, title, text }) => {
	return (
		<Li>
			<Container>
				<NumberElement src={imgSrc} alt={imgSrc} />
				<TextContainer>
					<Title>{title}</Title>
					<p className='commonText'>{text}</p>
				</TextContainer>
			</Container>
		</Li>
	)
}

export default HowWeWorkElement;
