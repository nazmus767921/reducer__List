import styled from "styled-components";
import { styles } from "../styleGuide";

const { colors } = styles;

export const Title = styled.h1`
	font-size: 3em;
	font-weight: 600;
	text-align: center;
	color: ${colors["yellow-500"]};
`;

// Create a Wrapper component that'll render a <section> tag with some styles
export const Wrapper = styled.section`
	color: ${colors["white-100"]};
	width: 100vw;
	height: 100vh;
	/* padding: 4em; */
	background: ${colors.bg};
`;

//! Layouts

// felx divs
export const Flex = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: ${(props) =>
		props.$center
			? "center"
			: props.$between
			? "space-between"
			: props.$around
			? "space-around"
			: "flex-start"};
	align-items: ${(props) => (props.$centery ? "center" : "stretch")};
`;

export const FlexCol = styled(Flex)`
	flex-direction: column;
	align-items: ${(props) => (props.$centery ? "center" : "stretch")};
	justify-content: ${(props) =>
		props.$center
			? "center"
			: props.$between
			? "space-between"
			: props.$around
			? "space-around"
			: "stretch"};
`;

export const FlexCardWrap = styled(Flex)`
	gap: 10px;
`;

//! Typography

// paragrapghs
export const SmallPara = styled.p`
	font-size: 0.7em;
`;
