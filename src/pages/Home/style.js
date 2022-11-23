import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	border: solid 1px black;

	.inner-container {
		width: 100px;
		height: 100px;
		border: solid 1px red;
	}
`;

export {
	Container
};