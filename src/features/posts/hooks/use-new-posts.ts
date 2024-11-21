import { create } from 'zustand';
type NewPostState = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useNewPost = create<NewPostState>((set) => ({
  isOpen: false,
  onOpen: () => set({isOpen: true}),
  onClose: () => set({isOpen: false})
}));