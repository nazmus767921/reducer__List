import styled from "styled-components";
import { Flex } from "../../styles/components.styles";
import { styles } from "../../styleGuide";

const tagLines = [
	{
		id: 1,
		name: "Important",
		color: styles.colors["red-500"],
	},
	{
		id: 2,
		name: "For Later",
		color: styles.colors["yellow-500"],
	},
	{
		id: 3,
		name: "Not So important",
		color: styles.colors["teal-500"],
	},
];

const ModalWrapper = styled.div`
	display: ${(props) => (props.display === "show" ? "flex" : "none")};
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 99;
	width: 100vw;
	height: 100vh;
	background-color: #11141fe7;
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
	font-size: ${(props) => (props.$smaller ? "1.8em" : "2em")};
	border: 0px;
	outline: none;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1.75em;
`;

const TagButton = styled.button`
	font-size: 1em;
	background-color: ${(props) =>
		props.variant === "$selected" ? props.color : "#ddd"};
	color: ${(props) =>
		props.variant === "$selected"
			? styles.colors["white-100"]
			: styles.colors["gray-200"]};
	display: flex;
	width: fit-content;
	padding: 0.2em 0.7em;
	border-radius: 9999px;
	&:hover {
		color: ${styles.colors["white-100"]};
		background-color: #5d5d5d;
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
	font-size: 1.5em;
	font-weight: 500;
	color: ${styles.colors["bg"]};
	border-radius: 0.5em;
	background-color: ${(props) =>
		props.isEditing === true
			? styles.colors["teal-500"]
			: styles.colors["yellow-500"]};
	padding: 0.3em 0.5em;
	&:hover {
		background-color: ${(props) =>
			props.isEditing === true
				? styles.colors["teal-600"]
				: styles.colors["yellow-600"]};
	}
`;

export {
	tagLines,
	ModalWrapper,
	Card,
	Input,
	Form,
	TagButton,
	TagButtonWrapper,
	AddToTaskBTN,
};
