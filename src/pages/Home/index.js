import React, { useState, useEffect } from 'react';
import { SectionsContainer, Section } from 'react-fullpage';

import { Question } from 'components';

import { Container } from './style';

const questionList = [
	{
		id: 1,
		title: 'lets start with your first name? *',
		label: 'first_name',
		next: 'last_name',
	},
	{
		id: 2,
		title: 'and your last name? *',
		label: 'last_name',
		next: 'city',
	},
	{
		id: 3,
		title: 'what city and state are you from? (or put a zipcode) *',
		label: 'city',
		next: 'occupation',
	},
	{
		id: 4,
		title: 'got a job? or are you a student? *',
		label: 'occupation',
		next: '',
	}
];

const Home = () => {
	useEffect(() => {
		window.scrollTo(0, 0); // (x-coord, y-coord)
	}, []);

	const [formData, setFormData] = useState({});

	const anchorHandler = anchor_data => { // return array of anchor tags
		return anchor_data.map(item => (
			item.label
		));
	};

	let options = {
		anchors: anchorHandler(questionList), // (default []) Defines the anchor links (#example) to be shown on the URL for each section.
		scrollBar: false, // (default false) Determines whether to use scroll bar for the vertical sections on site or not.
		navigation: true, // (default false) If set to true, it will show a navigation bar made up of small circles.
		verticalAlign: true, // (default true) Vertically centering of the content using flexbox. You might want to wrap your content in a div to avoid potential issues. (Uses flex-direction: column; display: flex; justify-content: center;)
		sectionPaddingTop: '0px', // (default 0) Defines the top padding for each section with a numerical value and its measure
		sectionPaddingBottom: '0px', // (default 0) Defines the bottom padding for each section with a numerical value and its measure
		arrowNavigation: false // (default true) Determines whether to use control arrows for the slides to move right or left.
	};

	const inputDataHandler = (name, value) => {
		setFormData({
			...formData,
			[name]: value
		});
	};

	const submitBtnHandler = () => {
		// API call here
		alert({ // show success message on completion
			title: '',
			text: 'Thanks for completing the survey !!',
			// icon: 'success',
			dangerMode: false,
		});
	};

	return (
		<Container>
			<SectionsContainer { ...options }>
				{
					questionList.map((question, i) => {
						return (
							<Section key={ i } >
								<header className='app-header'>
									<Question
										data={ question }
										index={ i }
										isSubmit={ i === (questionList.length - 1) }
										inputDataHandler={ inputDataHandler }
										submitBtnHandler={ submitBtnHandler }
									/>
								</header>
							</Section>
						);
					})
				}
			</SectionsContainer>
		</Container>
	);
};

export default Home;