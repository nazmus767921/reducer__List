import { styles } from "../styleGuide";
import { RxDotsHorizontal } from "react-icons/rx";
import { Flex, FlexCol, SmallPara } from "../styles/components.styles";
import styled from "styled-components";
import Actions from "./Actions";

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

const ListContentTop = styled(Flex)`
	margin: 0 0 0.5em 0;
`;

const ListCard = () => {
	return (
		<Section>
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
						<ListContentTop $between>
							<Tag>Tagline</Tag>
							<button type="button">
								<RxDotsHorizontal />
							</button>
						</ListContentTop>
						<Title>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</Title>
						<Description>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</Description>
					</FlexCol>
				</FlexCardWrap>
			</Card>
			<Actions />
		</Section>
	);
};

export default ListCard;
