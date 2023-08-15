import { styles } from "../styleGuide";
import { Flex, FlexCol, SmallPara } from "../styles/components.styles";
import styled from "styled-components";

const { colors } = styles;

// Card
const Card = styled.div`
	color: ${colors["bg-dark"]};
	background-color: ${colors["white-100"]};
	padding: 20px 30px;
	border-radius: 10px;
`;

const FlexCardWrap = styled(Flex)`
	gap: 2em;
`;

const VerticalLine = styled.div`
	background-color: ${colors["yellow"]};
	width: 2px;
	border-radius: 9999px;
`;

const Date = styled.h3`
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
	color: ${colors["red-500"]};
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

const ListCard = () => {
	return (
		<Card>
			<FlexCardWrap>
				<FlexCol>
					<Date>27.12.2001</Date>
					<Time>
						10:00
						<SmallPara> AM</SmallPara>
					</Time>
				</FlexCol>
				<VerticalLine />
				<FlexCol>
					<Tag>Tagline</Tag>
					<Title>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</Title>
					<Description>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</Description>
				</FlexCol>
			</FlexCardWrap>
		</Card>
	);
};

export default ListCard;
