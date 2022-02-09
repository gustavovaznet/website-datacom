//HOW WE WORK

//IMPORTING
import React, { useContext } from 'react';
import styled from 'styled-components';
import SubHeading from '../components/SubHeading';
import HowWeWorkElement from '../components/HowWeWorkElement';
import { languageStore } from './../contexts/LanguageContext';
import content from '../content';
import iconImg01 from '../assets/1.svg';
import iconImg02 from '../assets/2.svg';
import iconImg03 from '../assets/3.svg';
import iconImg04 from '../assets/4.svg';

//CONTAINER
const Container = styled.div`
	max-width: 100%;
	background-color: #f8f3fd;
	position: relative;
`

//CONTENT
const Content = styled.div``

const Ul = styled.ul`
	@media (min-width: 960px) {
		display: flex;
		flex-wrap: wrap;
		align-items: stretch;
	}
`
//HOWWEWORK
const HowWeWork = () => {
	const { state: language } = useContext(languageStore);
	const { howWeWork } = content[language];
	//RETURN
	return (
		<Container className='sidePadding topBottomPadding'>
			<Content className='maxWidth'>
				<SubHeading>{howWeWork.heading}</SubHeading>
				<Ul>
					<HowWeWorkElement
						imgSrc={iconImg01}
						title={howWeWork.boxes.first.title}
						text={howWeWork.boxes.first.text}
					/>
					<HowWeWorkElement
						imgSrc={iconImg02}
						title={howWeWork.boxes.second.title}
						text={howWeWork.boxes.second.text}
					/>
					<HowWeWorkElement
						imgSrc={iconImg03}
						title={howWeWork.boxes.third.title}
						text={howWeWork.boxes.third.text}
					/>
					<HowWeWorkElement
						imgSrc={iconImg04}
						title={howWeWork.boxes.fourth.title}
						text={howWeWork.boxes.fourth.text}
					/>
				</Ul>
			</Content>
		</Container>
	)
}

export default HowWeWork;
