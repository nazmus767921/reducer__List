const getDate = () => {
	const MONTHS = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];
	const WEEKDAY = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	const d = new window.Date();
	const weekDay = d.getDay();
	const Month = d.getMonth();
	const dateOfMonth = d.getDate();
	const time = () => {
		if (d.getHours() > 12) {
			let newTime = `${d.getHours() - 12}:${d
				.getMinutes()
				.toString()
				.padStart(2, "0")} PM`;
			return newTime;
		} else {
			let newTime = `${d.getHours()}:${d
				.getMinutes()
				.toString()
				.padStart(2, "0")} AM`;
			return newTime;
		}
	};

	return { MONTHS, WEEKDAY, weekDay, Month, dateOfMonth, time };
};

export default getDate;
