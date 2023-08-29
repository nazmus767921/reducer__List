import { useGlobalContext } from "../../context";
import ListCard from "../ListCard";
import styled from "styled-components";
import ListFilter from "../ListFilter/ListFilter";
import { devices } from "../../styleGuide";

const ListsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 3em;
	gap: 1em;
	padding: 2em 0;
	overflow-y: scroll;
	&::-webkit-scrollbar {
		display: none;
	}
	-ms-overflow-style: none;
	scrollbar-width: none;

	@media only screen and (${devices.md}) {
		padding: 2em 2em;
	}
`;

const TaskLists = () => {
	const { state } = useGlobalContext();
	const taskList =
		state.isFiltering.status !== true
			? state.list
			: state.isFiltering.filteredList;
	return (
		<ListsContainer>
			<ListFilter />

			{state.isFiltering.status === true &&
			state.isFiltering.filteredList.length <= 0 ? (
				<h2>No matching task</h2>
			) : state.list.length ? (
				taskList.map((task, index) => {
					return <ListCard key={index + 1} {...task} />;
				})
			) : (
				<h2>No task assigned to today</h2>
			)}
		</ListsContainer>
	);
};

export default TaskLists;
