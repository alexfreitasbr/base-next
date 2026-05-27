import { devtools, persist } from 'zustand/middleware';
import { create } from 'zustand';

interface ModalState {
  modal: React.ReactNode | null;
  ariaLabelledby:string
  ariaDescribedby:string
}

type Action = {
  setModal: (modal: React.ReactNode | null) => void;
}

export const modalStore = create<ModalState & Action>()(
  devtools(
    persist(
      (set) => ({
        modal: null,
        ariaLabelledby:"",
        ariaDescribedby:"",

        setModal: (modal: React.ReactNode | null) => set({ modal }, false, 'modal/set_modal'),
      }),
      { name: 'modal-storage' } // Nome da chave no localStorage
    )
  )
);