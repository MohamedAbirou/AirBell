import { create } from "zustand";

export type ModalType =
  | "loginModal"
  | "registerModal"
  | "rentModal"
  | "searchModal";

interface ModalStore {
  type: ModalType | null;
  isOpen: boolean;
  onOpen: (type: ModalType) => void;
  onClose: (type: ModalType) => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  type: null,
  isOpen: false,
  onOpen: (type) => set({ isOpen: true, type }),
  onClose: (type) => set({ isOpen: false, type }),
}));
