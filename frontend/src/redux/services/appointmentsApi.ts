import Appointment from "@/app/types/Appointent.type";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "http://localhost:8000/appointments";

export const getAppointmentsList = createAsyncThunk(
  "getAppointmentsList",
  async () => {
    const res = await fetch(BASE_URL);
    return res?.json();
  }
);

export const getAppointmentById = createAsyncThunk(
  "getAppointmentById",
  async (id: number) => {
    const res = await fetch(`${BASE_URL}/${id}`);
    return res?.json();
  }
);

export const createAppointment = createAsyncThunk(
  "createAppointment",
  async (body: Appointment) => {
    const res = await fetch(`${BASE_URL}`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    return res?.json();
  }
);

export const updateAppointment = createAsyncThunk(
  "updateAppointment",
  async (body: Appointment) => {
    const res = await fetch(`${BASE_URL}/${body.id}`, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    return res?.json();
  }
);

export const deleteAppointment = createAsyncThunk(
  "deleteAppointment",
  async (id: string) => {
    const res = await fetch(
      `${BASE_URL}/${id}`,
      {
        method: "DELETE",
      }
    );

    return res?.json();
  }
);
