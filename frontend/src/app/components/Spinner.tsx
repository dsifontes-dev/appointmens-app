import styled from "styled-components";

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 4px solid rgba(0, 0, 0, 0.1);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border-left-color: #09f;

  animation: spin 1s ease infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Spinner = () => (
  <Container>
    <Loader />
  </Container>
);

export default Spinner;
