import { FaTrash } from "react-icons/fa6";
import { TbEdit } from "react-icons/tb";
import styled from "styled-components";
import { FlexCol } from "../styles/components.styles";
import { styles } from "../styleGuide";
import { useGlobalContext } from "../context";

const ActionBTNWrapper = styled(FlexCol)`
	height: 100%;
	padding: 0 1em 0 1em;
`;

const ActionWrapper = styled(FlexCol)`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 100%;
	background-color: ${styles.colors["bg-dark"]};
	border-radius: 0 20px 20px 0;
`;

const Actions = ({ task }) => {
	//? context and States
	const { dispatch } = useGlobalContext();

	//? Event Handlers
	const handleDelete = (id) => {
		dispatch({ type: "DELETE_TASK", payload: id });
	};

	const handleEdit = (task) => {
		dispatch({ type: "EDIT_TASK", payload: task });
	};

	return (
		<ActionWrapper>
			<ActionBTNWrapper $around>
				<button
					type="button"
					onClick={() => handleDelete(task.id)}
				>
					<FaTrash
						style={{
							width: "1.25em",
							height: "1.25em",
							color: styles.colors["red-500"],
						}}
					/>
				</button>
				<button
					type="button"
					onClick={() => handleEdit(task)}
				>
					<TbEdit
						style={{
							width: "1.25em",
							height: "1.25em",
							color: styles.colors["teal-500"],
						}}
					/>
				</button>
			</ActionBTNWrapper>
		</ActionWrapper>
	);
};

export default Actions;
