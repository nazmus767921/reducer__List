import styled from "styled-components";
import { IoIosAdd } from "react-icons/io";
import { styles } from "../../styleGuide";
import AddTaskUI from "../AddTaskUI/AddTaskUI";
import { useGlobalContext } from "../../context";

const AddButton = styled.button`
	font-size: 1.25rem;
	font-weight: 500;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 0.2em;
	background-color: ${styles.colors["bg-dark"]};
	border-radius: 0.75em;
	padding: 0.6em 1.5em;
	height: fit-content;
	transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
	&:hover {
		color: ${styles.colors["bg-dark"]};
		background-color: ${styles.colors["yellow-500"]};
	}
`;

const AddNewTaskBtn = () => {
	const { dispatch } = useGlobalContext();
	return (
		<>
			<AddTaskUI />
			<AddButton onClick={() => dispatch({ type: "TOGGLE_OPEN_ADD_TASK" })}>
				<IoIosAdd style={{ width: "1.35em", height: "1.35em" }} />
				New Task
			</AddButton>
		</>
	);
};

export default AddNewTaskBtn;
