import React, { useState, useEffect } from 'react';
import { Input, Button, Row } from 'antd';
import { CheckOutlined, ArrowRightOutlined, CaretRightOutlined } from '@ant-design/icons';

import { Text } from 'components';
import { MiscHelper } from 'helpers';

import {
	Container,
	ButtonContainer,
	ImageContainer,
	StyledInput,
	PreviewContainer,
} from './style';

const Questions = ({
	data,
	index,
	isSubmit,
	inputDataHandler,
	submitBtnHandler
}) => {
	const [answer, setAnswer] = useState({});
	const [previewImage, setPreviewImage] = useState(null);
	const [currentFile, setCurrentFile] = useState(null);

	useEffect(() => {
		// Focus to the first question input
		document.getElementById('0').focus();
	}, []);

	const onClickHandler = (link, i) => {
		// location.href = `#${ link }`;
		setTimeout(() => {
			document.getElementById(i.toString()).focus();
		}, 500);
	};

	const inputHandler = e => {
		setAnswer({
			...answer,
			[e.target.name]: e.target.value,
		});

		inputDataHandler(e.target.name, e.target.value);
	};

	const onSubmitHandler = () => {
		// Create an object of formData
		const formData = new FormData();

		// Update the formData object
		formData.append(
			'picture',
			currentFile,
			currentFile.name
		);

		// Request made to the backend api
		// Send formData object
		// axios.post('api/uploadfile', formData);

		submitBtnHandler(formData);
	};

	const selectFile = event => {
		setPreviewImage(URL.createObjectURL(event.target.files[0]));
		setCurrentFile(event.target.files[0]);
	};

	const renderQuestion = () => {
		return data.label === 'picture' ?
			<ImageContainer>
				<div>
					<div>
						<input
							id={ index }
							name={ data.label }
							type='file'
							accept='image/*'
							onChange={ selectFile }
						/>
					</div>

					{
						previewImage && (
							<PreviewContainer>
								<img className='preview' src={ previewImage } alt='profPic' />
							</PreviewContainer>
						)
					}
				</div>

			</ImageContainer>
			:
			<StyledInput
				id={ index }
				placeholder='Type your answer here...'
				name={ data.label }
				onPressEnter={ () => onClickHandler(data.next, data.id) }
				onChange={ inputHandler }
				fontSize={ ['1.3rem', '1.8rem', '2rem'] }
				mb={ ['1.5rem', '2rem', '2.2rem'] }
			/>;
	};

	return (
		<Container>
			<Text.H1 fontSize={ ['1.5rem', '2rem', '2.2rem'] } mb={ ['1.5rem', '2rem', '2.2rem'] }>
				<span><CaretRightOutlined /></span>&nbsp;
				<span>{ data.title }</span>
			</Text.H1>

			{ renderQuestion() }

			<ButtonContainer>
				{
					isSubmit ?
						<Button id='submit-btn' onClick={ onSubmitHandler } disabled={ !currentFile }>
							<CheckOutlined />
							SUBMIT
						</Button>
						:
						<React.Fragment>
							{
								MiscHelper.deviceDetect()
									? null
									:
									<Button id='enter-btn' onClick={ () => onClickHandler(data.next, data.id) }>
										<CheckOutlined />
										OK
									</Button>
							}
							<span className='enter-text'>press <span className='bold'>ENTER</span></span>
						</React.Fragment>
				}
			</ButtonContainer>

		</Container>
	);
};

export default Questions;
