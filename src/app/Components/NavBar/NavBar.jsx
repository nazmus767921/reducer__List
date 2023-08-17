/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";
import { Flex, FlexCol, Title } from "../../styles/components.styles";
import { styles } from "../../styleGuide";
import AddNewTaskBtn from "./AddNewTaskBtn";
import getDate from "../GetDate";

const Nav = styled(Flex)`
	color: ${styles.colors["white-100"]};
	/* width: 100vw; */
	padding: 0.5em 5em;
`;

const Date = styled.h3`
	padding: 0.3em;
	font-size: 1.5em;
	font-weight: 500;
	opacity: 60%;
`;

const NavBar = () => {
	const { MONTHS, WEEKDAY, weekDay, Month, dateOfMonth } = getDate();

	return (
		<Nav
			$between
			$centery
		>
			<FlexCol>
				<Title>Today's Task</Title>
				<Date>
					{WEEKDAY[weekDay]}, {dateOfMonth} {MONTHS[Month]}
				</Date>
			</FlexCol>
			<AddNewTaskBtn></AddNewTaskBtn>
		</Nav>
	);
};

export default NavBar;
