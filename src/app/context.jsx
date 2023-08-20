import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "./Reducer";
const AppContext = createContext();

const getLocalStorageData = () => {
	const resp = localStorage.getItem("list");
	const listData = JSON.parse(resp);
	if (listData) {
		return listData;
	}
	return [];
};

const initialState = {
	isAddTaskOpen: false,
	task: {
		id: "",
		taskName: "",
		description: "",
		tag: { id: "", tagName: "", color: "" },
		entryDate: { weekDay: "", dateOfMonth: "", month: "" },
		entryTime: "",
	},
	isFiltering: {
		status: false,
		selectedTagID: 411,
		filteredList: [],
	},
	list: getLocalStorageData(),
	isEditing: false,
};

export const AppProvider = ({ children }) => {
	// eslint-disable-next-line no-unused-vars
	const [state, dispatch] = useReducer(reducer, initialState);
	//AddTaskUI->TAG component

	useEffect(() => {
		localStorage.setItem("list", JSON.stringify(state.list));
	}, [state.list]);

	return (
		<AppContext.Provider value={{ state, dispatch }}>
			{children}
		</AppContext.Provider>
	);
};

// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalContext = () => {
	return useContext(AppContext);
};
