//PROJECT

//IMPORTING
import React, { useContext } from 'react';
import styled from 'styled-components';
import preferences from '../preferences';
import { languageStore } from './../contexts/LanguageContext';
import content from '../content';

//CONTAINER
const Container = styled.div`
	background-color: white;
	text-align: left;

	@media (min-width: 960px) {
		display: flex;
		justify-content: space-between;

		:not(:last-child) {
			margin-right: 32px;
		}
	}

	a {
		font-weight: 600;
		display: inline-block;
		margin-top: 24px;
		color: ${preferences.colors.main};
	}
`
//PROJECT TEXT CONTAINER
const ProjectTextContainer = styled.div`
	@media (min-width: 960px) {
		max-width: 450px;
		min-width: 350px;
		margin-left: 6rem;
	}

	@media (min-width: 1200px) {
		margin-left: 16rem;
		max-width: 45%;
	}

	@media (min-width: 1350px) {
		max-width: 45%;
	}

	@media (min-width: 1600px) {
		max-width: 45%;
	}
`
//TITLE
const Title = styled.h3`
	color: ${preferences.colors.secondaryMain};
	font-family: Rajdhani;
	font-style: normal;
	font-weight: bold;
	font-size: 32px;
	line-height: 41px;
	text-align: left;
	margin-top: 32px;
	margin-bottom: 16px;

	@media (min-width: 960px) {
		margin-top: 0;
	}

	@media (min-width: 1600px) {
		margin-top: 32px;
		font-size: 48px;
		margin-bottom: 24px;
	}
`
//TEXT
const Text = styled.p`
	color: ${preferences.colors.neutral};
	text-align: left;
	max-width: 650px;

	@media (min-width: 960px) {
		max-width: initial;
		/* min-width: 650px; */
	}
`
//IMAGE CONTAINER
const ImageContainer = styled.div`
	max-width: 500px;

	img {
		margin: 0 auto;
		display: block;
		max-width: 100%;
		width: 100%;
		height: 250px;
		object-fit: cover;

		@media (min-width: 960px) {
			height: 35%;
		}

		@media (min-width: 1200px) {
			height: 35%;
		}

		@media (min-width: 1600px) {
			height: 35%;
		}
	}

	@media (min-width: 960px) {
		max-width: initial;
	}

	@media (min-width: 960px) {
		flex: 1;
		max-width: 45%;
		height: 100%;
		margin: 0;
	}
`
//PROJECT
const Project = ({ imgSrc, title, text, websiteUrl }) => {
	const { state: language } = useContext(languageStore);
	const { latestWork } = content[language];
	return (
		<Container>
			<ImageContainer>
				<img src={imgSrc} alt={title} />
			</ImageContainer>

			<ProjectTextContainer>
				<Title>{title}</Title>
				<Text className='commonText'>{text}</Text>
				<a
					href={websiteUrl}
					className='commonText'
					target='_blank'
					rel='noopener noreferrer'
				>
					{latestWork.linkText}
				</a>
			</ProjectTextContainer>
		</Container>
	)
}

export default Project;
