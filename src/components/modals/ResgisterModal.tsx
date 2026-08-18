"use client";
import { useAuthModal } from "@/store/useAuthModalStore";
import { Modal } from "./Modal";

export const ResgisterModal = () => {
  const { openLogin, isResgisterOpen, closeRegister } = useAuthModal();
  return (
    <Modal title="Register" onClose={closeRegister} isOpen={isResgisterOpen}>
      <p>Register</p>
    </Modal>
  );
};
