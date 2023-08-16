import styled from "styled-components";
import { styles } from "../../styleGuide";
import { LiaTimesSolid } from "react-icons/lia";
import { useState } from "react";
import { Flex } from "../../styles/components.styles";

const tagLines = [
	{
		id: 1,
		name: "Important",
	},
	{
		id: 2,
		name: "For Later",
	},
	{
		id: 3,
		name: "Maybe Will do",
	},
];

const ModalWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
`;

const Card = styled.div`
	color: ${styles.colors["bg-dark"]};
	background-color: ${styles.colors["white-100"]};
	padding: 1em 2em;
	margin: auto;
	border-radius: 0.3em;
	box-shadow: 6px 6px 10px ${styles.colors["bg-dark"]};
	display: flex;
	flex-direction: column;
	gap: 1em;
`;

const Input = styled.input`
	background-color: transparent;

	color: ${styles.colors["bg-dark"]};
	border-radius: 0.3em;
	font-size: ${(props) => (props.$smaller ? ".8em" : "1em")};
	border: 0px;
	outline: none;
`;

const TextArea = styled.textarea`
	background-color: transparent;

	color: ${styles.colors["bg-dark"]};
	border-radius: 0.3em;
	font-size: ${(props) => (props.$smaller ? ".8em" : "1em")};
	border: 0px;
	outline: none;
	overflow: hidden;
	max-width: 40ch;
	min-width: 40ch;
    max-height: 40ch;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1em;
`;

const TagButton = styled.button`
	font-size: 0.6em;
	background-color: ${(props) =>
		props.variant === "$active" ? styles.colors["red-500"] : "#000"};
	color: ${styles.colors["white-100"]};
	display: flex;
	width: fit-content;
	padding: 0.1em 0.4em;
	border-radius: 0.6em;
	&:hover {
		background-color: ${styles.colors["red-600"]};
	}
`;

const TagButtonWrapper = styled(Flex)`
	flex-wrap: wrap;
	gap: 0.5em;
`;

const AddToTaskBTN = styled.button`
	font-size: 0.8em;
	font-weight: 500;
	border-radius: 0.5em;
	background-color: ${styles.colors["yellow-500"]};
	padding: 0.3em 0.5em;
	&:hover {
		background-color: ${styles.colors["yellow-600"]};
	}
`;

const AddTaskUI = () => {
	const [TagSelected, setTagSelected] = useState(true);

	const [inputValue, setInputValue] = useState("");

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
		e.target.style.height = "auto";
		e.target.style.height = `${e.target.scrollHeight}px`;
	};

	return (
		<ModalWrapper>
			<Card>
				<button
					type="button"
					style={{ alignSelf: "flex-end" }}
				>
					<LiaTimesSolid style={{ color: styles.colors["bg-dark"] }} />
				</button>
				<Form>
					<Input
						type="text"
						placeholder="Task Name"
					/>
					<TextArea
						$smaller
						value={inputValue}
						onChange={handleInputChange}
						placeholder="description"
					/>
					<TagButtonWrapper>
						{tagLines.map((item, index) => {
							return (
								<TagButton
									key={index}
									type="button"
									variant={TagSelected ? "$active" : null}
								>
									{item.name}
								</TagButton>
							);
						})}
					</TagButtonWrapper>
					<AddToTaskBTN>Add Task</AddToTaskBTN>
				</Form>
			</Card>
		</ModalWrapper>
	);
};

export default AddTaskUI;
