import { useState } from "react";
import { styles } from "../../styleGuide";
import { LiaTimesSolid } from "react-icons/lia";
import { IoPushOutline } from "react-icons/io5";
import ExpandableTextArea from "./ExpandableTextArea";
import { useGlobalContext } from "../../context";
import {
	tagLines,
	ModalWrapper,
	Card,
	Input,
	Form,
	TagButton,
	TagButtonWrapper,
	AddToTaskBTN,
} from "./AddTaskUI.styles";

const AddTaskUI = () => {
	// eslint-disable-next-line no-unused-vars
	const [TagSelected, setTagSelected] = useState(true);
	const { state, dispatch } = useGlobalContext();

	const handleInput = (e) => {
		dispatch({ type: "TAKE_INPUT", payload: e });
	};

	const handleTagSelection = (tag) => {
		dispatch({ type: "TAG_SELECT", payload: tag });
	};

	return (
		<ModalWrapper display={state.isAddTaskOpen ? "show" : "hidden"}>
			<Card>
				<button
					type="button"
					style={{ alignSelf: "flex-end" }}
					onClick={() => dispatch({ type: "TOGGLE_OPEN_ADD_TASK" })}
				>
					<LiaTimesSolid
						style={{
							color: styles.colors["bg-dark"],
							width: "2em",
							height: "2em",
						}}
					/>
				</button>
				<Form onSubmit={(e) => dispatch({ type: "SUBMIT_TASK", payload: e })}>
					<Input
						type="text"
						name="taskName"
						value={state.task.taskName}
						onChange={(e) => handleInput(e)}
						placeholder="Task Name"
						required
					/>

					<ExpandableTextArea />

					<TagButtonWrapper>
						{tagLines.map((item, index) => {
							return (
								<TagButton
									color={item.color}
									key={index}
									type="button"
									onClick={() => handleTagSelection(item)}
									variant={TagSelected ? "$active" : null}
								>
									{item.name}
								</TagButton>
							);
						})}
					</TagButtonWrapper>
					<AddToTaskBTN>
						<IoPushOutline />
						Add Task
					</AddToTaskBTN>
				</Form>
			</Card>
		</ModalWrapper>
	);
};

export default AddTaskUI;
