import { observer } from "mobx-react-lite";
import { useStore } from "../../stores/store";
import { Modal } from "flowbite-react";

export const ModalContainer = observer(() => {
  const { modalStore } = useStore();
  return (
    <Modal
      dismissible
      show={modalStore.modal.open}
      onClose={modalStore.closeModal}
    >
      <Modal.Body>{modalStore.modal.body}</Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
});
