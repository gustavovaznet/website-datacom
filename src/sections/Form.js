//FORM

//IMPORTING
import React, { useContext } from 'react';
import styled from 'styled-components';
import preferences from '../preferences';
import SubHeading from '../components/SubHeading';
import SecondaryButton from '../components/SecondaryButton';
import { languageStore } from './../contexts/LanguageContext';
import content from '../content';
import illustrationImg from '../assets/illustration2.svg';

//CONTAINER
const Container = styled.div`
	max-width: 100%;
	background-color: white;
`
//CONTENT
const Content = styled.div``
//TEXT
const Text = styled.p`
	color: ${preferences.colors.neutral};
	margin-bottom: 32px;
`
//FORMEL
const FormEl = styled.form`
	label {
		color: ${preferences.colors.neutral};
		font-size: 18px;
		display: block;
		margin-bottom: 8px;
		font-weight: 600;

		@media (min-width: 960px) {
			font-size: 20px;
		}

		@media (min-width: 1600px) {
			font-size: 22px;
		}
	}
	input,
	textarea {
		border: 1px solid #bdbcc0;
		background-color: transparent;
		padding: 16px;
		display: block;
		width: 100%;
		color: ${preferences.colors.neutral};
		font-family: Rajdhani;
		transition: all 0.2s;
		max-width: 100%;
		resize: none;
		font-size: 18px;

		&:focus {
			outline-color: ${preferences.colors.main};
		}

		&:hover {
			border-color: ${preferences.colors.main};
		}
	}

	fieldset {
		:not(:last-child) {
			margin-bottom: 24px;
		}

		:last-of-type {
			margin-bottom: 32px;
		}
	}
`
//FLEX CONTAINER
const FlexContainer = styled.div`
	@media (min-width: 1260px) {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
	}
`
//FORM CONTENT
const FormContent = styled.div`
	flex: 1 1 auto;
	align-self: stretch;
	max-width: 600px;
`
//IMG
const Img = styled.img`
	display: none;

	@media (min-width: 1260px) {
		align-self: flex-end;
		height: 100%;
		width: 70%;
		max-width: 50%;
		display: initial;
	}
`
//BUTTON CONTAINER
const ButtonContainer = styled.div`
	text-align: center;
`
//FORM
const Form = () => {
	const { state: language } = useContext(languageStore);
	const { reachOutToUs } = content[language];
	return (
		<Container className='sidePadding topBottomPadding' id='form'>
			<Content className='maxWidth'>
				<SubHeading>{reachOutToUs.heading}</SubHeading>
				<FlexContainer>
					<FormContent>
						<Text className='commonText'>{reachOutToUs.paragraph}</Text>
						<FormEl name='contact' method='post'>
							<input type='hidden' name='form-name' value='contact' />
							<fieldset>
								<label htmlFor='name'>{reachOutToUs.name}</label>
								<input type='text' id='name' name='name' required />
							</fieldset>
							<fieldset>
								<label htmlFor='email'>{reachOutToUs.email}</label>
								<input type='email' id='email' name='email' required />
							</fieldset>
							<fieldset>
								<label htmlFor='message'>{reachOutToUs.message}</label>
								<textarea
									name='message'
									id='message'
									cols='30'
									rows='10'
									required
								></textarea>
							</fieldset>
							<ButtonContainer>
								<SecondaryButton type='submit'>
									{reachOutToUs.button}
								</SecondaryButton>
							</ButtonContainer>
						</FormEl>
					</FormContent>
					<Img src={illustrationImg} alt='Illustration' />
				</FlexContainer>
			</Content>
		</Container>
	)
}

export default Form;
