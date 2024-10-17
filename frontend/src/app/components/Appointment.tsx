import moment from "moment";
import "moment/locale/es";
import { useMemo } from "react";
import styled from "styled-components";
import AppointmentType from "../types/Appointent.type";

export const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  margin: 8px;
  padding: 16px;
  flex: 0 0 275px;
  border: 1px solid #fff;
  cursor: pointer;

  &:hover {
    border: 1px solid #000;
  }
`;

export const Name = styled.div`
  font-weight: 600;
`;

export const Date = styled.div`
  font-size: 14px;
`;

interface Props {
  appointment: AppointmentType;
  handleClick: (id?: number) => void;
}

const Appointment = ({
  appointment: { id, name, date, time_from },
  handleClick,
}: Props) => {
  const relativeDate = useMemo(() => {
    let momentDate = moment(date, "YYYY-MM-DD");
    const relative = momentDate.fromNow();
    return relative;
  }, [date]);

  return (
    <Container onClick={() => handleClick(id)}>
      <Name>{name}</Name>
      <Date>
        {relativeDate}, a las {time_from}h
      </Date>
    </Container>
  );
};

export default Appointment;
