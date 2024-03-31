import { Button } from "react-bootstrap";
import Container from "../container";
import CustomModal from "../components/CustomModal";
import ErrorReportForm from "../components/ErrorReportForm";
import { useContext } from "react";
import { MainContext } from "../contexts/MainContext";

export default function Error() {
  const { handleToggleModal } = useContext(MainContext);

  return (
    <>
      <Container>
        <h1>This page does not exists!</h1>

        <Button variant="danger" onClick={handleToggleModal}>
          Send Error Report
        </Button>
        <CustomModal title="Error Report" content={<ErrorReportForm />} />
      </Container>
    </>
  );
}
