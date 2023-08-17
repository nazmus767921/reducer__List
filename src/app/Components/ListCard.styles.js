import { styled } from "styled-components";
import { Flex, FlexCol } from "../styles/components.styles";
import { styles } from "../styleGuide";
const { colors } = styles;

// Card
const Card = styled.div`
	color: ${colors["bg-dark"]};
	background-color: ${colors["white-100"]};
	padding: 20px 30px;
	border-radius: 10px;
	box-shadow: 4px 0 10px #552222;
	position: relative;
	z-index: 10;
`;

const Section = styled.div`
	position: relative;
	max-width: fit-content;
	min-width: 70%;
`;

const FlexCardWrap = styled(Flex)`
	gap: 2em;
`;

const VerticalLine = styled.div`
	background-color: ${colors["yellow-500"]};
	width: 2px;
	border-radius: 9999px;
`;

const Date = styled.h3`
	font-size: 1em;
	color: ${colors["bg-dark"]};
	font-weight: 500;
`;

const Time = styled(Date)`
	display: flex;
	gap: 0.1em;
	align-items: center;
	opacity: 70%;
`;

const Tag = styled.p`
	color: ${(props) => props.color};
`;

const Title = styled.h2`
	color: ${colors["bg-dark"]};
	font-size: 20px;
	font-weight: 500;
`;

const Description = styled.p`
	color: ${colors["bg"]};
	font-size: 1rem;
	font-weight: normal;
	opacity: 40%;
`;

const ListContent = styled(FlexCol)`
	width: 100%;
`;

const ListContentTop = styled(Flex)`
	margin: 0 0 0.5em 0;
	width: 100%;
`;

const DateContainer = styled(FlexCol)`
	gap: 0.3em;
`;

export {
	Card,
	Section,
	FlexCardWrap,
	VerticalLine,
	Date,
	Time,
	Tag,
	Title,
	Description,
	ListContent,
	ListContentTop,
	DateContainer,
};