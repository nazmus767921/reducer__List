import styled from "styled-components";
import { styles } from "../styleGuide";

const { colors } = styles;

export const Title = styled.h1`
	font-size: 3em;
	text-align: center;
	color: ${colors["yellow"]};
`;

// Create a Wrapper component that'll render a <section> tag with some styles
export const Wrapper = styled.section`
	color: ${colors["white-100"]};
	width: 100vw;
	height: 100vh;
	display: flex;
	place-content: center;
	place-items: center;
	padding: 4em;
	background: ${colors.bg};
`;

//! Layouts

// felx divs
export const Flex = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: ${(props) => (props.$center ? "center" : "flex-start")};
`;

export const FlexCol = styled(Flex)`
	flex-direction: column;
	align-items: ${(props) => (props.$center ? "center" : "flex-start")};
`;

export const FlexCardWrap = styled(Flex)`
	gap: 10px;
`;

//! Typography

// paragrapghs
export const SmallPara = styled.p`
	font-size: 0.7em;
`;
