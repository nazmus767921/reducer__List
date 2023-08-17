import { Flex, FlexCol } from "../styles/components.styles";
// import AddTaskUI from "./AddTaskUI/AddTaskUI";
// import ListCard from "./ListCard";
import NavBar from "./NavBar/NavBar";
import styled from "styled-components";
import TaskLists from "./TaskLists/TaskLists";

const HomeNavContainer = styled(FlexCol)`
	flex: 0 0 45%;
	height: 100vh;
`;

const HomeListsContainer = styled(FlexCol)`
	flex: 0 0 55%;
	height: 100vh;
	margin: 0 10em 0 0;
`;

const Home = styled(Flex)`
	padding: 0 2em;
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

			{/* <AddTaskUI /> */}
		</Home>
	);
};

export default ListApp;
