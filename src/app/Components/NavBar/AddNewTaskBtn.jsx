import styled from "styled-components";
import { IoIosAdd } from "react-icons/io";
import { styles, devices } from "../../styleGuide";
import AddTaskUI from "../AddTaskUI/AddTaskUI";
import { useGlobalContext } from "../../context";

const AddButton = styled.button`
	font-weight: 500;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 0.2em;
	background-color: ${styles.colors["bg-dark"]};
	border-radius: 0.75em;
	padding: 0.6em 0.6em;
	height: fit-content;
	transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
	&:hover {
		color: ${styles.colors["bg-dark"]};
		background-color: ${styles.colors["yellow-500"]};
	}
	@media only screen and (${devices.md}) {
		padding: 0.6em 1.5em;
		font-size: 1.25em;
		&::after {
			content: "New Task";
		}
	}
`;

const AddNewTaskBtn = () => {
	const { dispatch } = useGlobalContext();
	return (
		<>
			<AddTaskUI />
			<AddButton onClick={() => dispatch({ type: "TOGGLE_OPEN_ADD_TASK" })}>
				<IoIosAdd style={{ width: "1.35em", height: "1.35em" }} />
			</AddButton>
		</>
	);
};

export default AddNewTaskBtn;
