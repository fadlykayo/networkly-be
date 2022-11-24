import React, { useState, useEffect } from 'react';
import { SectionsContainer, Section } from 'react-fullpage';
import swal from 'sweetalert';

import { Question } from 'components';
import { MiscHelper } from 'helpers';

import { Container } from './style';

const questionList = [
	{
		id: 1,
		title: 'What\'s your name?',
		label: 'first_name',
		next: 'last_name',
	},
	{
		id: 2,
		title: 'What\'s your surname?',
		label: 'last_name',
		next: 'email',
	},
	{
		id: 3,
		title: 'What\'s your email?',
		label: 'email',
		next: 'phone',
	},
	{
		id: 4,
		title: 'What\'s your phone number?',
		label: 'phone',
		next: 'linkedIn',
	},
	{
		id: 5,
		title: 'What\'s your LinkedIn profile URL?',
		label: 'linkedIn',
		next: 'telegram',
	},
	{
		id: 6,
		title: 'What\'s your Telegram @?',
		label: 'telegram',
		next: 'picture',
	},
	{
		id: 7,
		title: 'Upload your profile picture!',
		label: 'picture',
		next: '',
	},
];

const Home = () => {
	useEffect(() => {
		window.scrollTo(0, 0); // (x-coord, y-coord)
	}, []);

	const [answers, setAnswers] = useState({});

	const anchorHandler = anchor_data => { // return array of anchor tags
		return anchor_data.map(item => (
			item.label
		));
	};

	let options = {
		anchors: anchorHandler(questionList), // (default []) Defines the anchor links (#example) to be shown on the URL for each section.
		scrollBar: false, // (default false) Determines whether to use scroll bar for the vertical sections on site or not.
		navigation: !MiscHelper.deviceDetect(), // (default false) If set to true, it will show a navigation bar made up of small circles.
		verticalAlign: true, // (default true) Vertically centering of the content using flexbox. You might want to wrap your content in a div to avoid potential issues. (Uses flex-direction: column; display: flex; justify-content: center;)
		sectionPaddingTop: '0px', // (default 0) Defines the top padding for each section with a numerical value and its measure
		sectionPaddingBottom: '0px', // (default 0) Defines the bottom padding for each section with a numerical value and its measure
		arrowNavigation: false // (default true) Determines whether to use control arrows for the slides to move right or left.
	};

	const inputDataHandler = (name, value) => {
		setAnswers({
			...answers,
			[name]: value
		});
	};

	const submitBtnHandler = () => {
		// API call here
		swal({
			title: 'Submitted!',
			text: 'Thank you for completing the registration!',
			// icon: 'success',
			dangerMode: false,
		});
	};

	return (
		<Container mx={ [5, 6, 7] }>
			<SectionsContainer { ...options }>
				{
					questionList.map((question, i) => {
						return (
							<Section key={ i } >
								<Question
									data={ question }
									index={ i }
									isSubmit={ i === (questionList.length - 1) }
									inputDataHandler={ inputDataHandler }
									submitBtnHandler={ submitBtnHandler }
								/>
							</Section>
						);
					})
				}
			</SectionsContainer>
		</Container>
	);
};

export default Home;