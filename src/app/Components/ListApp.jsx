import { Flex, FlexCol } from "../styles/components.styles";
import NavBar from "./NavBar/NavBar";
import styled from "styled-components";
import TaskLists from "./TaskLists/TaskLists";
import { devices } from "../styleGuide";

const HomeNavContainer = styled(FlexCol)`
	flex: 0 0 45%;
	height: 100vh;
`;

const HomeListsContainer = styled(FlexCol)`
	flex: 0 0 55%;
	height: 100vh;
	margin: 0 0 0 0;
`;

const Home = styled(Flex)`
	padding: 0 2em;
	flex-direction: column;
	@media only screen and (${devices.xl}) {
		flex-direction: row;
	}
`;

const ListApp = () => {
	return (
		<Home $center>
			<HomeNavContainer $center>
				<NavBar />
			</HomeNavContainer>
			<HomeListsContainer>
				<TaskLists />
			</HomeListsContainer>
		</Home>
	);
};

export default ListApp;
