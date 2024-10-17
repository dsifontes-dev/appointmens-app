"use client";
import { useParams } from "next/navigation";
import AppointmentsForm from "../components/AppointmentForm";
import { memo, useCallback, useEffect, useMemo, useState } from "react";
import Appointment from "@/app/types/Appointent.type";
import { useRouter } from "next/navigation";
import Spinner from "@/app/components/Spinner";
import {
  createAppointment,
  deleteAppointment,
  getAppointmentById,
  updateAppointment,
} from "@/redux/services/appointmentsApi";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { resetCurrentAppointment } from "@/redux/features/appointmentsListReducer";

function Form() {
  const router = useRouter();

  const params = useParams();
  const editId = useMemo(() => (params?.id ? params?.id[0] : ""), [params]);
  const isEditMode = useMemo(() => !!editId, [editId]);

  const dispatch = useAppDispatch();
  const {
    current: appointment,
    isLoading,
    isError,
  } = useAppSelector((state) => state.appointmentsListReducer);

  useEffect(() => {
    if (isEditMode) {
      dispatch(getAppointmentById(Number(editId)));
    }
  }, [isEditMode, editId]);

  const handleSave = useCallback(
    async (data: Appointment) => {
      try {
        const action = isEditMode ? updateAppointment : createAppointment;
        dispatch(action(data));

        if (!isLoading && !isError) {
          router.push("/");
        }
      } catch (error) {
        alert("Error al guardar la cita");
      }
    },
    [isEditMode, editId, router]
  );

  const handleDelete = useCallback(async () => {
    try {
      dispatch(deleteAppointment(editId));

      if (!isLoading && !isError) {
        router.push("/");
      }
    } catch (error) {
      alert("Error al eliminar la cita  ");
    }
  }, [isEditMode, editId, router]);

  const handleCancel = useCallback(() => {
    dispatch(resetCurrentAppointment());
    router.push("/");
  }, [router]);

  if (isLoading) return <Spinner />;

  return (
    <AppointmentsForm
      isEditMode={isEditMode}
      appointment={appointment}
      onSave={handleSave}
      onCancel={handleCancel}
      onDelete={handleDelete}
    />
  );
}

export default memo(Form);
