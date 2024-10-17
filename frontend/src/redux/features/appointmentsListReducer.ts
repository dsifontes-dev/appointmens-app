import Appointment from "@/app/types/Appointent.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getAppointmentById,
  getAppointmentsList,
} from "../services/appointmentsApi";

type AppointmentsListState = {
  isLoading: boolean;
  isError: boolean;
  value: Appointment[];
  current: Appointment | undefined;
};

const initialState: AppointmentsListState = {
  isLoading: false,
  isError: false,
  value: [],
  current: undefined,
};

export const appointmentsListSlice = createSlice({
  name: "appointmentsList",
  initialState,
  reducers: {
    getAppointments: (state) => state,
    resetCurrentAppointment: (state) => {
      state.current = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAppointmentsList.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAppointmentsList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.value = action.payload;
    });
    builder.addCase(getAppointmentsList.rejected, (state, action) => {
      state.isError = true;
    });
    builder.addCase(getAppointmentById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAppointmentById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.current = action.payload;
    });
    builder.addCase(getAppointmentById.rejected, (state) => {
      state.isError = true;
    });
  },
});

export const { getAppointments, resetCurrentAppointment } =
  appointmentsListSlice.actions;

export default appointmentsListSlice.reducer;
