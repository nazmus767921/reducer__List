import { useGlobalContext } from "../../context";
import { Flex, FlexCol } from "../../styles/components.styles";
import ListCard from "../ListCard";
import styled from "styled-components";

const ListsContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1em;
	padding: 2em 2em;
	overflow-y: scroll;
	&::-webkit-scrollbar {
		display: none;
	}
	-ms-overflow-style: none;
	scrollbar-width: none;
`;

const TaskLists = () => {
	const { state } = useGlobalContext();
	return (
		<ListsContainer>
			{state.list.map((task, index) => {
				return (
					<ListCard
						key={index + 1}
						{...task}
					/>
				);
			})}
		</ListsContainer>
	);
};

export default TaskLists;