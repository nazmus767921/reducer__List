import styled from "styled-components";
import { devices, styles } from "../../styleGuide";
import { useGlobalContext } from "../../context";
import { Flex } from "../../styles/components.styles";

//? data
const tagLines = [
	{
		id: 411,
		name: "Show All",
		color: styles.colors["white-100"],
	},
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
	{
		id: 404,
		name: "undefined",
		color: styles.colors["white-100"],
	},
];

//? styled components
const TagButtonWrapper = styled(Flex)`
	flex-wrap: wrap;
	gap: 0.5em;
	font-size: 1.5em;
	justify-content: center;
	padding: 0.2em;
	border: 1px solid #acacac;
	border-radius: 1em;
	width: fit-content;
	@media only screen and (${devices.md}) {
		justify-content: space-between;
		padding: 0.2em;
		border: 1px solid #acacac;
		border-radius: 2em;
		font-size: 1em;
	}
`;

const TagButton = styled.button`
	font-size: 1em;
	background-color: ${(props) =>
		props.variant === "$selected" ? styles.colors["yellow-500"] : ""};
	color: ${(props) =>
		props.variant === "$selected"
			? styles.colors["bg"]
			: styles.colors["white-100"]};
	display: flex;
	width: fit-content;
	padding: 0.2em 0.7em;
	border-radius: 9999px;
	&:hover {
		color: ${styles.colors["bg"]};
		background-color: ${styles.colors["yellow-500"]};
	}
`;

const CountBubble = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	background-color: ${styles.colors["yellow-500"]};
	color: ${styles.colors["bg-dark"]};
	font-weight: 500;
	border-radius: 999em;
	width: 1.1em;
	height: 1.1em;
	right: -0.4em;
	top: -0.6em;
`;

const TagContainer = styled.div`
	position: relative;
`;

//? Tag component
function Tag(props) {
	const { state } = useGlobalContext();
	const handleTagSelection = (tag) => {
		props.dispatch({ type: "FILTER_LIST", payload: tag });
	};

	const matchingTagCount = state.list.filter(
		(task) => task?.tag?.id === props.item.id
	).length;

	return (
		<TagContainer>
			{matchingTagCount > 0 && <CountBubble>{matchingTagCount}</CountBubble>}
			<TagButton
				color={props.item.color}
				type="button"
				onClick={() => handleTagSelection(props.item)}
				variant={
					props.item.id === state.isFiltering.selectedTagID
						? "$selected"
						: "$notSelected"
				}
			>
				{props.item.name}
			</TagButton>
		</TagContainer>
	);
}

const ListFilter = () => {
	const { state, dispatch } = useGlobalContext();
	return (
		<TagButtonWrapper>
			{tagLines.map((item, index) => {
				return (
					<Tag
						key={index}
						tagName={state.task.tag.tagName}
						item={item}
						dispatch={dispatch}
					/>
				);
			})}
		</TagButtonWrapper>
	);
};

export default ListFilter;
