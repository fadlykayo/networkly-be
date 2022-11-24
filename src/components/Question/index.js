import React, { useState, useEffect } from 'react';
import { Input, Button } from 'antd';
import { CheckOutlined, ArrowRightOutlined, CaretRightOutlined } from '@ant-design/icons';

import { Text } from 'components';
import { MiscHelper } from 'helpers';

import {
	Container,
	ButtonContainer,
	ImageContainer,
	StyledInput,
} from './style';

const Questions = ({
	data,
	index,
	isSubmit,
	inputDataHandler,
	submitBtnHandler
}) => {
	const [answer, setAnswer] = useState({});

	useEffect(() => {
		// Focus to the first question input
		document.getElementById('0').focus();
	}, []);

	const clickHandler = (link, i) => {
		location.href = `#${ link }`;

		setTimeout(() => {
			document.getElementById(i.toString()).focus();
		}, 1100);
	};

	const inputHandler = e => {
		setAnswer({
			...answer,
			[e.target.name]: e.target.value,
		});

		inputDataHandler(e.target.name, e.target.value);
	};

	const submitHandler = () => {
		submitBtnHandler();
	};

	const renderQuestion = () => {
		return data.label === 'picture' ?
			<ImageContainer>
				asdadsa
			</ImageContainer>
			:
			<StyledInput
				id={ index }
				placeholder='Type your answer here...'
				name={ data.label }
				onPressEnter={ () => clickHandler(data.next, data.id) }
				onChange={ inputHandler }
				fontSize={ ['1.3rem', '1.8rem', '2rem'] }
				mb={ ['1.5rem', '2rem', '2.2rem'] }
			/>;
	};

	return (
		<Container>
			<Text.Paragraph fontSize={ ['1.5rem', '2rem', '2.2rem'] }>
				<span><CaretRightOutlined /></span>&nbsp;
				<span>{ data.title }</span>
			</Text.Paragraph>

			{ renderQuestion() }

			<ButtonContainer>
				{
					isSubmit ?
						<Button id='submit-btn' onClick={ submitHandler }>
							<CheckOutlined />
							SUBMIT
						</Button>
						:
						<React.Fragment>
							{
								MiscHelper.deviceDetect()
									? null
									:
									<Button id='enter-btn' onClick={ () => clickHandler(data.next, data.id) }>
										<CheckOutlined />
										OK
									</Button>
							}
							<span className='press-enter'>press <span className='bold'>ENTER</span></span>
						</React.Fragment>
				}
			</ButtonContainer>

		</Container>
	);
};

export default Questions;
