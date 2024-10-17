"use client";
import Appointment from "./components/Appointment";
import AppointmentType from "./types/Appointent.type";
import { Container } from "./components/Container";
import { memo, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import Spinner from "./components/Spinner";
import Button from "./components/Button";
import Body from "./components/Body";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getAppointmentsList } from "@/redux/services/appointmentsApi";

function Home() {
  const router = useRouter();

  const dispatch = useAppDispatch();
  const {
    value: appointments,
    isLoading,
    isError,
  } = useAppSelector((state) => state.appointmentsListReducer);

  console.log({ appointments });
  useEffect(() => {
    dispatch(getAppointmentsList());
  }, []);

  const handleClick = useCallback(
    (id?: number) => {
      router.push(`form/${id}`);
    },
    [router]
  );

  const handleClickAdd = useCallback(() => {
    router.push(`form`);
  }, [router]);

  if (isLoading) return <Spinner />;
  if (!!isError) return <div>No se pudieron cargar los datos</div>;

  return (
    <div>
      <Body>
        <div>
          <Button buttontype="primary" onClick={handleClickAdd}>
            Agendar cita
          </Button>
        </div>
        <Container>
          {appointments?.map((item: AppointmentType) => (
            <Appointment
              key={item.id}
              appointment={item}
              handleClick={handleClick}
            />
          ))}
        </Container>
      </Body>
    </div>
  );
}

export default memo(Home);
