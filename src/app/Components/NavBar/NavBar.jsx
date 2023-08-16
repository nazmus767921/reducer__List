/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";
import { Flex, FlexCol, Title } from "../../styles/components.styles";
import { styles } from "../../styleGuide";
import AddNewTaskBtn from "./AddNewTaskBtn";

const Nav = styled(Flex)`
	color: ${styles.colors["white-100"]};
	width: 100vw;
	padding: 0.5em 5em;
`;

const Date = styled.h3`
	font-size: 0.8em;
	font-weight: 500;
	opacity: 60%;
`;

const NavBar = () => {
	return (
		<Nav
			$between
			$centery
		>
			<FlexCol>
				<Title>Today's Task</Title>
				<Date>WednesDay, 20 Jun</Date>
			</FlexCol>
			<AddNewTaskBtn></AddNewTaskBtn>
		</Nav>
	);
};

export default NavBar;
