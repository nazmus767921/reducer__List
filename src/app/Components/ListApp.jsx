import { Flex } from "../styles/components.styles";
import ListCard from "./ListCard";
import NavBar from "./NavBar/NavBar";

const ListApp = () => {
	return (
		<Flex $center>
			<NavBar />
			{/* <ListCard /> */}
		</Flex>
	);
};

export default ListApp;
