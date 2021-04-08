import React, { useState } from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import MainLayout from "../../components/MainLayout/MainLayout";
import Modal from "../../components/Modal/Modal";
import FormInput from '../../components/Forms/FormInput'
import FormSelect from '../../components/Forms/FormSelect'


export default function ImportContact() {
  const [defaultModal, setDefaultModal] = useState(true);
  const closeModal = () => {
    setDefaultModal(false);
  };

  const createCustomer = () => {
      setDefaultModal(false)
  }
  return (
    <MainLayout>
      <Modal
        show={defaultModal}
        onClose={() => setDefaultModal(false)}
        title="Create New Category"
        posted={createCustomer}
      >
        <FormInput
          title="Name of Category"
          label_class = "label-normal"
          placeholder="Type name of categorty"
          className="input-normal"
        />
       
       
       
      </Modal>
    </MainLayout>
  );
}
