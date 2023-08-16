import { Flex } from "../styles/components.styles";
import AddTaskUI from "./AddTaskUI/AddTaskUI";
// import ListCard from "./ListCard";
// import NavBar from "./NavBar/NavBar";

const ListApp = () => {
	return (
		<Flex $center>
			{/* <NavBar /> */}
			{/* <ListCard /> */}
			<AddTaskUI />
		</Flex>
	);
};

export default ListApp;
