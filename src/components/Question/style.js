import styled from 'styled-components';
import { space, layout, color } from 'styled-system';

const Container = styled.div`
	${ space }
  ${ layout }
  ${ color }
  
	.title {
		font-size: 24px;
		margin-bottom: 5%;
	}

	.count {
		font-size: 12px;
	}

	.typeForm-input { 
		margin-bottom: 5% !important;
		border: none !important;
		border-radius: 0 !important;
		background-color: @home-bg-color !important;
		font-size: x-large !important;
		padding: 30px 0px !important;
	}

	.typeForm-input:focus {
		box-shadow: none !important;
		border-bottom: 1px solid @home-text-color !important 
	}

	.press-enter {
		font-size: 12px;
		color: black;
	}

	.bold {
		font-weight: bolder
	}

	#enter-btn {
		background-color: rgb(29, 25, 25);
		color:  white;
		border-radius: 5px;
		font-weight: bold;
	}

	#submit-btn {
		background-color: blue;
		color:  white;
		border-radius: 5px;
		font-weight: bold;
	}
`;

export { Container };