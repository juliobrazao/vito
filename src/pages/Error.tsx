import { Button } from "react-bootstrap";
import Container from "../container";
import CustomModal from "../components/CustomModal";
import ErrorReportForm from "../components/ErrorReportForm";
import { useContext } from "react";
import { MainContext } from "../contexts/MainContext";
import Header from "../components/Header";
import { useTranslation } from "react-i18next";

export default function Error() {
  const { t } = useTranslation();
  const { handleToggleModal } = useContext(MainContext);

  return (
    <>
      <Header />
      <Container>
        <h1>{t("error.message")}</h1>

        <Button variant="danger" onClick={handleToggleModal}>
          {t("error.title")}
        </Button>
        <CustomModal title={t("error.title")} content={<ErrorReportForm />} />
      </Container>
    </>
  );
}
