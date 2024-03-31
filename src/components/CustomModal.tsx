import { ReactNode, useContext } from "react";
import { Modal } from "react-bootstrap";
import { MainContext } from "../contexts/MainContext";

interface CustomModalProps {
  title?: string;
  content?: ReactNode;
}

export default function CustomModal({ title, content }: CustomModalProps) {
  const { showModal, handleToggleModal } = useContext(MainContext);

  return (
    <>
      <Modal centered={true} show={showModal} onHide={handleToggleModal}>
        <Modal.Header closeButton>
          <strong>{title ?? "Attention!"}</strong>
        </Modal.Header>
        <Modal.Body>{content}</Modal.Body>
      </Modal>
    </>
  );
}
