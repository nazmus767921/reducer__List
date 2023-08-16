import { useState } from "react";
import styled from "styled-components";
import { styles } from "../../styleGuide";
import { LiaTimesSolid } from "react-icons/lia";
import { IoPushOutline } from "react-icons/io5";
import { Flex } from "../../styles/components.styles";
import ExpandableTextArea from "./ExpandableTextArea";

const tagLines = [
	{
		id: 1,
		name: "Important",
		color: styles.colors["red-500"],
	},
	{
		id: 2,
		name: "For Later",
		color: styles.colors["teal-500"],
	},
	{
		id: 3,
		name: "Not So important",
		color: styles.colors["gray-100"],
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

const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1em;
`;

const TagButton = styled.button`
	font-size: 0.6em;
	background-color: ${(props) =>
		props.variant === "$active" ? props.color : "#000"};
	color: ${styles.colors["white-100"]};
	display: flex;
	width: fit-content;
	padding: 0.2em 0.7em;
	border-radius: 9999px;
	&:hover {
		background-color: ${styles.colors["red-600"]};
	}
`;

const TagButtonWrapper = styled(Flex)`
	flex-wrap: wrap;
	gap: 0.5em;
`;

const AddToTaskBTN = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.3em;
	font-size: 0.8em;
	font-weight: 500;
	color: ${styles.colors["bg"]};
	border-radius: 0.5em;
	background-color: ${styles.colors["yellow-500"]};
	padding: 0.3em 0.5em;
	&:hover {
		background-color: ${styles.colors["yellow-600"]};
	}
`;

const AddTaskUI = () => {
	// eslint-disable-next-line no-unused-vars
	const [TagSelected, setTagSelected] = useState(true);

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

					<ExpandableTextArea />

					<TagButtonWrapper>
						{tagLines.map((item, index) => {
							return (
								<TagButton
									color={item.color}
									key={index}
									type="button"
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
