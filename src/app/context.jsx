import { createContext, useContext, useReducer } from "react";
import { reducer } from "./Reducer";
const AppContext = createContext();

const initialState = {
	// inputValue: "",
	task: {
		id: "",
		taskName: "",
		description: "",
		tag: { id: "", tagName: "", color: "" },
		entryDate: { weekDay: "", dateOfMonth: undefined, month: "" },
	},
	list: [],
};

export const AppProvider = ({ children }) => {
	// eslint-disable-next-line no-unused-vars
	const [state, dispatch] = useReducer(reducer, initialState);
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
