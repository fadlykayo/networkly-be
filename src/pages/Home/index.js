import React, { useState, useEffect } from 'react';
import { SectionsContainer, Section, ScrollToTopOnMount } from 'react-fullpage';

import { Question } from 'components';
// import './static/style';

// => in the render() method of your app
const questionData = [
	{
		title: 'lets start with your first name? *',
		id: 'first_name',
		link: 'last_name',
		i: 1
	},
	{
		title: 'and your last name? *',
		id: 'last_name',
		link: 'city',
		i: 2
	},
	{
		title: 'what city and state are you from? (or put a zipcode) *',
		id: 'city',
		link: 'occupation',
		i: 3
	},
	{
		title: 'got a job? or are you a student? *',
		id: 'occupation',
		link: '',
		i: 4
	}
];

const anchorFunc = anchor_data => { // return array of anchor tags
	return anchor_data.map(item => (
		item.id
	));
};

const Home = () => {
	let options = {
		sectionClassName: 'section',
		anchors: anchorFunc(questionData),
		scrollBar: false,
		navigation: true,
		verticalAlign: false,
		sectionPaddingTop: '50px',
		sectionPaddingBottom: '50px',
		arrowNavigation: false
	};

	const [formData, setFormData] = useState({});

	const inputDataHandler = (name, value) => {
		console.log(name, value);
		console.log(formData);
		setFormData({
			...formData,
			[name]: value
		});
	};

	const submitBtnHandler = () => {
		console.log(formData);
		// API call here
		alert({ // show success message on completion
			title: '',
			text: 'Thanks for completing the survey !!',
			icon: 'success',
			dangerMode: false,
		});
	};

	return (
		<div>
			<ScrollToTopOnMount />
			<SectionsContainer { ...options }>
				{
					questionData.map((item, i) => {
						return (
							<Section key={ i } >
								<div>
									<header className='App-header'>
										<Question
											item={ item }
											index={ i }
											isSubmit={ i == (questionData.length - 1) }
											inputDataHandler={ inputDataHandler }
											submitBtnHandler={ submitBtnHandler }
										/>
									</header>
								</div>
							</Section>
						);
					})
				}
			</SectionsContainer>
		</div>
	);
};

export default Home;