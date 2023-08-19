import getDate from "./Components/GetDate";

export const reducer = (state, action) => {
	//? empty the task property for future input when submits
	const emptyTask = {
		id: "",
		taskName: "",
		description: "",
		tag: { id: "", tagName: "" },
	};

	if (action.type === "TOGGLE_OPEN_ADD_TASK") {
		return {
			...state,
			isAddTaskOpen: !state.isAddTaskOpen,
			isEditing: false,
			task: emptyTask,
		};
	}

	if (action.type === "TAKE_INPUT") {
		const e = action.payload;
		const newTask = {
			...state.task,
			[e.target.name]: e.target.value,
			// id: state.list.length + 1,
		};
		return { ...state, task: newTask };
	}

	if (action.type === "TAG_SELECT") {
		const tag = action.payload;
		const newTag = { id: tag.id, tagName: tag.name, color: tag.color };
		const newTask = { ...state.task, tag: newTag };
		return { ...state, task: newTask };
	}

	if (action.type === "SUBMIT_TASK") {
		//? important for setting the date.
		const { MONTHS, WEEKDAY, weekDay, Month, dateOfMonth, time } = getDate();
		const newDate = {
			weekDay: WEEKDAY[weekDay],
			dateOfMonth: dateOfMonth,
			month: MONTHS[Month],
		};

		//? stops the page from reloading while submitting.
		const e = action.payload;
		e.preventDefault();

		// if (state.prevList.length > 0) {
		// 	//
		// 	state = { ...state, list: state.prevList };
		// }

		//? submitting conditions
		let newList = [];

		//checks if the editing mode is on
		if (state.isEditing) {
			const EditedList = state.list.map((task) => {
				if (task.id === state.task.id) {
					return { ...state.task };
				}
				return { ...task };
			});
			newList = EditedList;
			return { ...state, list: newList, task: emptyTask, isAddTaskOpen: false };
		}

		//checks if any of the tags are selected
		if (state.task.tag.tagName.length > 0) {
			const newTask = {
				...state.task,
				entryDate: newDate,
				entryTime: time(),
				id: state.list.length + 1,
			};
			newList = [...state.list, newTask];
			return { ...state, list: newList, task: emptyTask, isAddTaskOpen: false };
		} else {
			//if everything is okay
			const tempTag = { id: 404, tagName: "undefined" };
			const tempTask = {
				...state.task,
				tag: tempTag,
				entryDate: newDate,
				entryTime: time(),
				id: state.list.length + 1,
			};
			newList = [...state.list, tempTask];
			return { ...state, list: newList, task: emptyTask, isAddTaskOpen: false };
		}
	}

	if (action.type === "DELETE_TASK") {
		const id = action.payload;
		const newList = state.list.filter((task) => task.id !== id);
		const newPrevList = state.prevList.filter((task) => task.id !== id);
		return { ...state, list: newList, prevList: newPrevList };
	}

	if (action.type === "EDIT_TASK") {
		const editingTask = state.list.filter((task) => {
			return task.id === action.payload.id;
		});

		return {
			...state,
			isEditing: true,
			isAddTaskOpen: true,
			task: { ...editingTask[editingTask.length - 1] },
		};
	}

	if (action.type === "FILTER_LIST") {
		//
		if (action.payload.id === 411) {
			if (state.prevList.length > 0) {
				return { ...state, list: state.prevList };
			}
		} else {
			if (state.prevList.length <= 0) {
				state = { ...state, prevList: state.list };
				const filteredList = state.list.filter(
					(task) => task.tag.id === action.payload.id
				);

				return { ...state, list: filteredList };
			}
			if (state.prevList.length > 0) {
				state = { ...state, list: state.prevList };
				const filteredList = state.list.filter(
					(task) => task.tag.id === action.payload.id
				);

				return { ...state, list: filteredList };
			}
		}
	}

	return state;
};
