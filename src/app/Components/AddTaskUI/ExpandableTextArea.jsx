import { useState } from "react";
import { styled } from "styled-components";
import { styles } from "../../styleGuide";

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

const ExpandableTextArea = () => {
	const [inputValue, setInputValue] = useState("");

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
		e.target.style.height = "auto";
		e.target.style.height = `${e.target.scrollHeight}px`;
	};

	return (
		<TextArea
			$smaller
			value={inputValue}
			onChange={handleInputChange}
			placeholder="description"
		/>
	);
};

export default ExpandableTextArea;
