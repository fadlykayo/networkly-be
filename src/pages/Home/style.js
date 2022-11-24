import styled from 'styled-components';
import { space, layout, color } from 'styled-system';

const Container = styled.div`
	${ space }
  ${ layout }
  ${ color }
  
	border: solid 1px red;
	
	.app-header {
		min-height: 70vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		// padding-bottom: 10%;
		padding-right: 10%;
		margin : 10px;
	}
`;

export { Container };
