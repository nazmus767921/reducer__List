import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "./Reducer";
const AppContext = createContext();

const getLocalStorageData = () => {
	const resp = localStorage.getItem("prevList");
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
		entryDate: { weekDay: "", dateOfMonth: undefined, month: "" },
		entryTime: "",
	},
	list: getLocalStorageData(),
	prevList: [],
	isEditing: false,
};

export const AppProvider = ({ children }) => {
	// eslint-disable-next-line no-unused-vars
	const [state, dispatch] = useReducer(reducer, initialState);
	//AddTaskUI->TAG component

	useEffect(() => {
		localStorage.setItem("prevList", JSON.stringify(state.prevList));
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
