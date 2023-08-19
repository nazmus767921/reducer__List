import styled from "styled-components";
import { styles } from "../../styleGuide";
import { useGlobalContext } from "../../context";
import { Flex } from "../../styles/components.styles";

//? data
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

//? Tag component
function Tag(props) {
	const handleTagSelection = (tag) => {
		props.dispatch({ type: "FILTER_LIST", payload: tag });
	};

	return (
		<>
			<TagButton
				color={props.item.color}
				type="button"
				onClick={() => handleTagSelection(props.item)}
				variant={
					props.item.name === props.tagName ? "$selected" : "$notSelected"
				}
			>
				{props.item.name}
			</TagButton>
		</>
	);
}

//? styled components
const TagButtonWrapper = styled(Flex)`
	flex-wrap: wrap;
	gap: 0.5em;
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

const ListFilter = () => {
	const { state, dispatch } = useGlobalContext();
	return (
		<TagButtonWrapper>
			{tagLines.map((item, index) => {
				return (
					<>
						<Tag
							key={index}
							tagName={state.task.tag.tagName}
							state={state}
							item={item}
							dispatch={dispatch}
						/>
					</>
				);
			})}
		</TagButtonWrapper>
	);
};

export default ListFilter;
