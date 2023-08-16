import { useState } from "react";
// // import "./InputField.css"; // Import your CSS file for styling

const ExpandingInputField = () => {
	const [inputValue, setInputValue] = useState("");

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
		e.target.style.height = "auto";
		e.target.style.height = `${e.target.scrollHeight}px`;
	};

	return (
		<textarea
			className="expanding-input"
			value={inputValue}
			style={{ overflow: "hidden" }} //
			onChange={handleInputChange}
			placeholder="Type something..."
		/>
	);
};

export default ExpandingInputField;
