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
import { useState } from "react";


//? Tag component
function Tag(props) {
	const [SelectedTag, setSelectedTag] = useState("temp");

	// const [SelectedTag, setSelectedTag] = useState("temp");

	const handleTagSelection = (tag) => {
		setSelectedTag(tag.name);
		props.dispatch({ type: "TAG_SELECT", payload: tag });
	};

	return (
		<TagButton
			color={props.item.color}
			type="button"
			onClick={() => handleTagSelection(props.item)}
			variant={SelectedTag === props.tagName ? "$selected" : "$notSelected"}
		>
			{props.item.name}
		</TagButton>
	);
}

//! Main Component
const AddTaskUI = () => {
	// eslint-disable-next-line no-unused-vars
	const { state, dispatch } = useGlobalContext();

	const handleInput = (e) => {
		dispatch({ type: "TAKE_INPUT", payload: e });
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
								<Tag
									key={index}
									tagName={state.task.tag.tagName}
									item={item}
									dispatch={dispatch}
								></Tag>
							);
						})}
					</TagButtonWrapper>
					<AddToTaskBTN isEditing={state.isEditing}>
						<IoPushOutline />
						{!state.isEditing ? "Add Task" : "Confirm Edit"}
					</AddToTaskBTN>
				</Form>
			</Card>
		</ModalWrapper>
	);
};

export default AddTaskUI;
