import styled from 'styled-components';
import { space, layout, color } from 'styled-system';

const Container = styled.div`
	${ space }
  ${ layout }

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 70vh;
	border: solid 1px red;
`;

export { Container };
