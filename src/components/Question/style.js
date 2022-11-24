import styled from 'styled-components';
import { space, layout, color, typography } from 'styled-system';
import { Input } from 'antd';

const Container = styled.div`
	${ space }
  ${ layout }
  
	.enter-text {
		font-size: 12px;
		color: black;
	}

	.bold {
		font-weight: bolder
	}

	.preview {
		max-width: 200px;
	}

	#enter-btn {
		background-color: black;
		color:  white;
		margin-right: 10px;
	}

	#submit-btn {
		background-color: #7cd1f9;
		color:  white;
	}
`;

const StyledInput = styled(Input)`
	${ space }
  ${ layout }
	${ typography }

	border: none !important;
	border-radius: 0 !important;
	padding: 0px !important;
	padding-bottom: 3px;
	&:focus {
		box-shadow: none !important;
		border-bottom: 1px solid black !important 
	}
`;

const ButtonContainer = styled.div`
	margin-top: 5px;
`;

const ImageContainer = styled.div`
	margin-bottom: 35px;
	// border: solid 1px red;
`;

const PreviewContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 20px 0px;
	max-width: 200px;
	// border: solid 1px red;
`;

export {
	Container,
	ButtonContainer,
	ImageContainer,
	StyledInput,
	PreviewContainer
};