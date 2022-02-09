//LAST WORK

//IMPORTING
import React, { useContext } from 'react';
import styled from 'styled-components';
import preferences from '../preferences';
import SubHeading from '../components/SubHeading';
import Project from '../components/Project';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { languageStore } from './../contexts/LanguageContext';
import content from '../content';
import workImg01 from '../assets/work-01.png';
import workImg02 from '../assets/work-02.png';
import workImg03 from '../assets/work-03.png';

//CONTAINER
const Container = styled.div`
	max-width: 100%;
	background-color: white;
`
//CONTENT
const Content = styled.div`
	.carousel {
		&.carousel-slider {
			overflow: initial !important;
		}
		.control-dots .dot {
			box-shadow: none !important;
			background: ${preferences.colors.main} !important;

			&:focus {
				outline: none;
			}
		}
		.control-dots {
			bottom: -16rem !important;

			.dot {
				width: 20px;
				height: 20px;
			}
		}
		.slide {
			background: white;
		}
	}
	margin-bottom: 16rem;
`
//EXPERTISE
const Expertise = () => {
	const { state: language } = useContext(languageStore);
	const { latestWork } = content[language];
	return (
		<Container backgroundColor='#fff' className='sidePadding topBottomPadding'>
			<Content className='maxWidth'>
				<SubHeading>{latestWork.heading}</SubHeading>
				<Carousel
					style={styles}
					showThumbs={false}
					showStatus={false}
					swipeScrollTolerance={50}
					showArrows={false}
					autoPlay={true}
				>
					<Project
						imgSrc={workImg01}
						title={latestWork.projects.work01.heading}
						websiteUrl='/'
						text={latestWork.projects.work01.text}
					/>
					<Project
						imgSrc={workImg02}
						title={latestWork.projects.work02.heading}
						websiteUrl='/'
						text={latestWork.projects.work02.text}
					/>
					<Project
						imgSrc={workImg03}
						title={latestWork.projects.work03.heading}
						websiteUrl='/'
						text={latestWork.projects.work03.text}
					/>
				</Carousel>
			</Content>
		</Container>
	)
}

export default Expertise;
