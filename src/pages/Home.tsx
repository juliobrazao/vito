import { useLocation } from "react-router-dom";
import Container from "../container";
import { useContext } from "react";
import { MainContext } from "../contexts/MainContext";
import CustomModal from "../components/CustomModal";
import LoginForm from "../components/LoginForm";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import Header from "../components/Header";

export default function Home() {
  const { t } = useTranslation();

  const location = useLocation();
  const langParam = new URLSearchParams(location.search).get("lang") ?? "en";

  i18n.changeLanguage(langParam);

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
      <Header />
      <Container>
        <button
          className="btn btn-primary"
          onClick={() => setShowModal(!showModal)}
        >
          {t("main.raise_modal")}
        </button>
        <CustomModal title={t("main.raise_modal")} content={<ModalBody />} />
      </Container>
    </>
  );
}
