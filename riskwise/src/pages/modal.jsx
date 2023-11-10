import React from "react";
import Swal from "sweetalert2";
import ButtonGroup from "../components/common/ButtonGroup";

const ModalList = () => {
  const showModal = () => {
    Swal.fire({
      title: "Error!",
      text: "Do you want to continue",
      icon: "error",
      confirmButtonText: "Cool",
    });
  };

  return (
    <div>
      <ButtonGroup
        text="SweetAlert Modal"
        type="sm-pr"
        clickHandler={() => showModal()}
      />
    </div>
  );
};

export default ModalList;
