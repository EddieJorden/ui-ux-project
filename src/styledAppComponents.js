import styled from 'styled-components';

export const StyledAppDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
`;

export const StyledComponentWindow = styled.div`
	background-color: white;
	color: black;
	box-shadow: 5px 5px 10px;
	border-radius: 10px;
	display: flex;

	@media only screen and (max-width: 1096px) {
		width: 100vw;
		justify-content: center;
	}
`;

export const StyledRadioButtonDiv = styled.div`
	text-align: left;
	display: flex;
	margin-left: 30px;
	margin-bottom: 30px;
`;

export const StyledBodyContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const StyledBody = styled.div`
	max-height: 100%;

	display: flex;
	justify-content: space-between;

	@media only screen and (max-width: 1096px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 30px;
	}
`;

export const StyledGridDiv = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 0px 30px;

	@media only screen and (max-width: 1096px) {
		margin-bottom: 30px;
	}
`;

export const GridContainer = styled.div`
	display: flex;
	flex-direction: column-reverse;
	justify-content: flex-end;
`;

export const StyledPieInformationdiv = styled.div`
	font-size: 14px;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: start;
	margin: 30px 0px;
`;

export const PieFooterContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const TopBarContainer = styled.div`
	font-size: 42px;
	text-align: left;
	margin: 15px;
	padding: 8px;
	border-radius: 5px;
`;
