import { RxDotsHorizontal } from "react-icons/rx";
import Actions from "./Actions";
import {
	Card,
	Section,
	FlexCardWrap,
	VerticalLine,
	Date,
	Time,
	Tag,
	Title,
	Description,
	ListContent,
	ListContentTop,
	DateContainer,
} from "./ListCard.styles";
import { useState } from "react";

const ListCard = ({ id, taskName, description, tag, entryDate, entryTime }) => {
	const [showActions, setShowActions] = useState(false);

	const { weekDay, dateOfMonth, month } = entryDate;
	return (
		<Section>
			<Card>
				<FlexCardWrap>
					<DateContainer>
						<Date>
							{weekDay}, {dateOfMonth} {month}
						</Date>
						<Time>
							{entryTime}
							{/* <SmallPara></SmallPara> */}
						</Time>
					</DateContainer>
					<VerticalLine />
					<ListContent>
						<ListContentTop $between>
							<Tag color={tag.color}>{tag.tagName}</Tag>
							<button
								type="button"
								onClick={() => setShowActions((prev) => !prev)}
							>
								<RxDotsHorizontal />
							</button>
						</ListContentTop>
						<Title>{taskName}</Title>
						<Description>{description}</Description>
					</ListContent>
				</FlexCardWrap>
			</Card>
			{showActions && (
				<Actions task={{ id, taskName, description, tag, entryDate }} />
			)}
		</Section>
	);
};

export default ListCard;
