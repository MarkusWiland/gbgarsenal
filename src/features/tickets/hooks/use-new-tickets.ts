import { create } from 'zustand';

type NewTicketsState = {
  isOpen: boolean;
  gameday: string; // Lägg till en gameday-variabel
  storeGameday: (gameday: string) => void; // Uppdatera gameday
  onOpen: () => void;
  onClose: () => void;
};

export const useNewTickets = create<NewTicketsState>((set) => ({
  isOpen: false,
  gameday: "", // Initialt värde för gameday
  storeGameday: (gameday) => set({ gameday }), // Uppdaterar gameday
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
