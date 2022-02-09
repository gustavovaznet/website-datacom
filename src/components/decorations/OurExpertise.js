//OUR EXPERTISE

//IMPORTING
import React from 'react';
import styled from 'styled-components';
import topRightImg from '../../assets/ellipseTopRight.svg';
import bottomLeftImg from '../../assets/ellipseBottomLeft.svg';

//TOP RIGHT
const TopRight = styled.img`
	left: 80%;
	top: -400px;
	animation-name: MoveAround;
	animation-iteration-count: infinite;
	animation-duration: 3s;
`
//BOTTOM LEFT
const BottomLeft = styled.img`
	top: 500px;
	left: -20%;
	animation-name: MoveAround;
	animation-iteration-count: infinite;
	animation-duration: 4s;
`
//CONTAINER
const Container = styled.div`
	display: none;
	img {
		position: absolute;
	}

	@media (min-width: 960px) {
		display: block;
	}
`

//OUR EXPERTISE
const OurExpertise = () => {
	//RETURN
	return (
		<Container>
			<TopRight src={topRightImg} alt='Ellipse' />
			<BottomLeft src={bottomLeftImg} alt='Ellipse' />
		</Container>
	)
}

export default OurExpertise;
