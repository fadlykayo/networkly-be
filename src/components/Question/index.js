import React, { useState, useEffect } from 'react';
import { Input, Button } from 'antd';
import { CheckOutlined, ArrowRightOutlined } from '@ant-design/icons';

import { Container } from './style';

const Questions = ({
	data,
	index,
	isSubmit,
	inputDataHandler,
	submitBtnHandler
}) => {
	const [value, setValue] = useState({});

	useEffect(() => {
		// Focus to the first question input
		document.getElementById('0').focus();
	}, []);

	const clickHandler = (link, i) => {
		console.log(i);
		location.href = `#${ link }`;

		setTimeout(() => {
			document.getElementById(i.toString()).focus();
		}, 1100);
	};

	const inputHandler = e => {
		console.log(e.target.name, e.target.value);
		console.log(value);
		setValue({
			...value,
			[e.target.name]: e.target.value,
		});

		inputDataHandler(e.target.name, e.target.value);
	};

	const submitHandler = () => {
		submitBtnHandler();
	};

	return (
		<Container>
			<div className='title'>
				<h2>
					<span className='count'>
						{ index + 1 } &nbsp;
						<ArrowRightOutlined />
					</span>&nbsp;
					<span className='title'>
						{ data.title }
					</span>
				</h2>
			</div>
			<Input
				placeholder='Type your answer here...'
				name={ data.label }
				id={ index }
				className='typeForm-input'
				onPressEnter={ () => clickHandler(data.next, data.id) }
				// style={{ marginBottom: '5%', backgroundColor: '#F1ECE2' }}
				onChange={
					inputHandler
				}
			/>
			<br />
			{
				isSubmit ?
					<Button id='submit-btn' onClick={ submitHandler }>SUBMIT</Button> :
					<div>
						<Button
							// hidden={ isMobile }
							icon={ <CheckOutlined /> }
							id='enter-btn'
							onClick={ () => clickHandler(data.next, data.id) }
						>
							OK
						</Button>
						<span className='press-enter'> press <span className='bold'>ENTER</span></span>
					</div>
			}
		</Container>
	);
};

export default Questions;
