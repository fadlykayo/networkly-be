import styled from 'styled-components';
import { space, layout, color, typography } from 'styled-system';
import { Input } from 'antd';

const Container = styled.div`
	${ space }
  ${ layout }
  
	.press-enter {
		font-size: 12px;
		color: black;
	}

	.bold {
		font-weight: bolder
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
`;

export {
	Container,
	ButtonContainer,
	ImageContainer,
	StyledInput
};