/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";
import { Flex, FlexCol, Title } from "../../styles/components.styles";
import { styles } from "../../styleGuide";
import AddNewTaskBtn from "./AddNewTaskBtn";

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

// eslint-disable-next-line react-refresh/only-export-components
export const getDate = () => {
	const MONTHS = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];
	const WEEKDAY = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	const d = new window.Date();
	const weekDay = d.getDay();
	const Month = d.getMonth();
	const dateOfMonth = d.getDate();

	return { MONTHS, WEEKDAY, weekDay, Month, dateOfMonth };
};

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
