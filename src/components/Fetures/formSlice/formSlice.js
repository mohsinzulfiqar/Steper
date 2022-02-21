import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
	name: "steper",
	initialState: {
		about: {},
		address: {},
		companyDetail: {},
		current: 0,
	},
	reducers: {
		aboutDetail: (state, action) => {
			state.about = action.payload;
		},
		aboutAddress: (state, action) => {
			state.address = action.payload;
		},
		addCompanyDetail: (state, action) => {
			state.companyDetail = action.payload;
		},
		next: (state) => {
			state.current += 1;
		},
		prev: (state) => {
			state.current -= 1;
		},
	},
});

export const { aboutDetail, aboutAddress, addCompanyDetail, next, prev } =
	formSlice.actions;
export const getAboutData = (state) => state.steper.about;
export const getAddressData = (state) => state.steper.address;
export const getCompanyDetail = (state) => state.steper.companyDetail;

export default formSlice.reducer;
