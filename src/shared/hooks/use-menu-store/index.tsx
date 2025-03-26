import { create } from 'zustand'

export type MenuType = 'links' | 'search' | 'login'

type useMenuStoreProps = {
  isOpen: boolean
  toggleMenu: () => void
  type: MenuType
  setType: (newType: MenuType) => void
}

export const useMenuStore = create<useMenuStoreProps>((set) => ({
  isOpen: false,
  toggleMenu: () => set((store) => ({ isOpen: !store.isOpen })),
  type: 'links',
  setType: (newType) => set(() => ({ type: newType }))
}))
