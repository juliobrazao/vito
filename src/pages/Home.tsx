import { useLocation } from "react-router-dom";
import Container from "../container";
import { useContext } from "react";
import { MainContext } from "../contexts/MainContext";
import CustomModal from "../components/CustomModal";
import LoginForm from "../components/LoginForm";

export default function Home() {
  const location = useLocation();
  const userParam = new URLSearchParams(location.search).get("name") ?? "void";

  const { showModal, setShowModal } = useContext(MainContext);

  const ModalBody = () => {
    return (
      <>
        <LoginForm />
      </>
    );
  };

  return (
    <>
      <Container>
        <button
          className="btn btn-primary"
          onClick={() => setShowModal(!showModal)}
        >
          Raise Modal
        </button>
        <CustomModal title={`Hello, ${userParam}!`} content={<ModalBody />} />
      </Container>
    </>
  );
}
