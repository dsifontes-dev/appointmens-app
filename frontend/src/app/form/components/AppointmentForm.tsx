"use client";
import Button from "@/app/components/Button";
import Appointment from "@/app/types/Appointent.type";
import React, { memo, useCallback, useMemo, useState } from "react";
import Form from "./Form";
import FormBody from "./FormBody";
import Title from "./Title";
import Input from "./Input";
import TimeSection from "./TimeSection";
import moment from "moment";

const initialState: Appointment = {
  name: "",
  date: "",
  time_from: "13:00",
  time_to: "13:00",
  description: "",
};

interface Props {
  appointment?: Appointment;
  isEditMode?: boolean;
  onSave: (data: Appointment) => void;
  onCancel: () => void;
  onDelete: () => void;
}

function AppointmentsForm({
  appointment,
  isEditMode,
  onSave,
  onCancel,
  onDelete,
}: Props) {
  const [formState, setFormState] = useState<Appointment>(
    appointment ?? initialState
  );

  const currentDate = useMemo(() => {
    const momentDate = moment();
    return momentDate.format("YYYY-MM-DD").toString();
  }, []);

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      onSave(formState);
    },
    [formState]
  );

  const onChangeForm = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormState((prevProps) => ({
        ...prevProps,
        [event.target.id]: event.target.value,
      }));
    },
    [formState]
  );

  const formTitle = useMemo(
    () => (!!appointment ? "Editar cita" : "Agendar cita"),
    [appointment]
  );

  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      e.stopPropagation();
      onCancel();
    },
    []
  );

  const handleDelete = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      e.stopPropagation();
      if (confirm(`Deseas borrar tu cita con ${formState.name}?`)) onDelete();
    },
    [appointment]
  );

  return (
    <Form onSubmit={handleSubmit}>
      <FormBody>
        <Title>{formTitle}</Title>
        <label htmlFor="name">Nombre</label>
        <Input
          value={formState.name}
          id="name"
          type="text"
          placeholder="Nombre completo"
          onChange={onChangeForm}
          required
        />
        <label htmlFor="date">Fecha</label>
        <Input
          value={formState.date}
          type="date"
          id="date"
          placeholder="Fecha"
          onChange={onChangeForm}
          min={currentDate}
          required
        />
        <TimeSection>
          <div>
            <label htmlFor="time_from">Hora de inicio</label>
            <Input
              value={formState.time_from}
              id="time_from"
              type="time"
              placeholder="Hora de inicio"
              onChange={onChangeForm}
              required
            />
          </div>
          <div>
            <label htmlFor="time_to">Hora de fin</label>
            <Input
              value={formState.time_to}
              id="time_to"
              type="time"
              placeholder="Hora de fin"
              onChange={onChangeForm}
              required
            />
          </div>
        </TimeSection>

        <label htmlFor="description">Descripción</label>
        <Input
          value={formState.description}
          id="description"
          type="textarea"
          placeholder="Opcional"
          onChange={onChangeForm}
        />

        <Button id="name" type="submit" buttontype="primary">
          Guardar
        </Button>

        <Button
          id="name"
          buttontype="secondary"
          onClick={(e) => handleCancel(e)}
        >
          Cancelar
        </Button>

        {isEditMode && (
          <Button
            id="name"
            buttontype="danger"
            onClick={(e) => handleDelete(e)}
          >
            Eliminar
          </Button>
        )}
      </FormBody>
    </Form>
  );
}

export default memo(AppointmentsForm);
