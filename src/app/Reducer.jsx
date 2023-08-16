import { getDate } from "./Components/NavBar/NavBar";

export const reducer = (state, action) => {
	if (action.type === "TAKE_INPUT") {
		const e = action.payload;
		const newTask = {
			...state.task,
			[e.target.name]: e.target.value,
			id: state.list.length + 1,
		};
		return { ...state, task: newTask };
	}

	if (action.type === "TAG_SELECT") {
		//
		const tag = action.payload;
		const newTag = { id: tag.id, tagName: tag.name, color: tag.color };
		const newTask = { ...state.task, tag: newTag };
		return { ...state, task: newTask };
	}

	if (action.type === "SUBMIT_TASK") {
		const { MONTHS, WEEKDAY, weekDay, Month, dateOfMonth } = getDate();
		const newDate = {
			weekDay: WEEKDAY[weekDay],
			dateOfMonth: dateOfMonth,
			month: MONTHS[Month],
		};
		const e = action.payload;
		e.preventDefault();
		let newList = [];
		if (state.task.tag.tagName.length > 0) {
			const newTask = { ...state.task, entryDate: newDate };
			newList = [...state.list, newTask];
		} else {
			const tempTag = { id: undefined, tagName: "undefined" };
			const tempTask = { ...state.task, tag: tempTag };
			newList = [...state.list, tempTask];
		}

		const emptyTask = {
			id: "",
			taskName: "",
			description: "",
			tag: { id: "", tagName: "" },
		};
		return { ...state, list: newList, task: emptyTask };
	}

	if (action.type === "DELETE_TASK") {
		const id = action.payload;
		const newList = state.list.filter((task) => task.id !== id);
		return { ...state, list: newList };
	}
};
