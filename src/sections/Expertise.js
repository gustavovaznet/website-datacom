//EXPERTISE

//IMPORTING
import React, { useContext } from 'react';
import styled from 'styled-components';
import SubHeading from '../components/SubHeading';
import ExpertiseBox from '../components/ExpertiseBox';
import OurExpertiseDecorations from '../components/decorations/OurExpertise';
import { languageStore } from './../contexts/LanguageContext';
import content from '../content';
import expertiseImg01 from '../assets/bullseye.svg';
import expertiseImg02 from '../assets/devices.svg';
import expertiseImg03 from '../assets/speed.svg';

//CONTAINER
const Container = styled.div`
	max-width: 100%;
	background-color: #f8f3fd;
	overflow: hidden;
`
//CONTENT
const Content = styled.div`
	position: relative;
	height: 100%;
	width: 100%;
	* {
		z-index: 9;
		position: relative;
	}
`
//FLEX CONTAINER
const FlexContainer = styled.div`
	@media (min-width: 960px) {
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
		align-items: stretch;
	}
`
//EXPERTISE
const Expertise = () => {
	const { state: language } = useContext(languageStore);
	const { expertise } = content[language];
	return (
		<Container className='sidePadding topBottomPadding'>
			<Content className='maxWidth'>
				<OurExpertiseDecorations />
				<SubHeading>{expertise.heading}</SubHeading>
				<FlexContainer>
					<ExpertiseBox
						imgSrc={expertiseImg01}
						title={expertise.boxes.first.heading}
						text={expertise.boxes.first.text}
					/>
					<ExpertiseBox
						imgSrc={expertiseImg02}
						title={expertise.boxes.second.heading}
						text={expertise.boxes.second.text}
					/>
					<ExpertiseBox
						imgSrc={expertiseImg03}
						title={expertise.boxes.third.heading}
						text={expertise.boxes.third.text}
					/>
				</FlexContainer>
			</Content>
		</Container>
	)
}

export default Expertise;
