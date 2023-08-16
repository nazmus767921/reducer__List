import { useState } from "react";
import { styled } from "styled-components";
import { styles } from "../../styleGuide";
import { useGlobalContext } from "../../context";

const TextArea = styled.textarea`
	background-color: transparent;

	color: ${styles.colors["bg-dark"]};
	border-radius: 0.3em;
	font-size: ${(props) => (props.$smaller ? "1.7em" : "2em")};
	border: 0px;
	outline: none;
	overflow: hidden;
	max-width: 40ch;
	min-width: 40ch;
	max-height: 40ch;
`;

const ExpandableTextArea = () => {
	const { state, dispatch } = useGlobalContext();

	const handleInputChange = (e) => {
		// setInputValue(e.target.value);
		dispatch({ type: "TAKE_INPUT", payload: e });
		e.target.style.height = "auto";
		e.target.style.height = `${e.target.scrollHeight}px`;
	};

	return (
		<TextArea
			$smaller
			// value={inputValue}
			name="description"
			value={state.task.description}
			onChange={(e) => handleInputChange(e)}
			placeholder="description"
		/>
	);
};

export default ExpandableTextArea;
