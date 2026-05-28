"use client";

import { modalStore } from "@/store/modalStore";
import { CircleX } from "lucide-react";

export const RootModal = () => {
  const {
    isOpen,
    component: ModalComponent,
    props,
    closeModal,
    ariaLabelledby,
    ariaDescribedby,
  } = modalStore();

  if (!isOpen || !ModalComponent) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={closeModal}
    >
      <dialog
        open
        className="relative w-full max-w-lg rounded-xl bg-white p-6 shadow-xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby={ariaLabelledby}
        aria-describedby={ariaDescribedby}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeModal}
          className="absolute right-4 top-4"
        >
          <CircleX className="h-5 w-5 transition-transform duration-200 hover:rotate-180" />
        </button>

        <ModalComponent {...props} />
      </dialog>
    </div>
  );
};