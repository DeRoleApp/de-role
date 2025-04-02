import { Menus } from '@/utils/constants'
import { create } from 'zustand'

type UseMenuStoreProps = {
  isOpen: boolean
  toggleMenu: () => void
  type: Menus
  setType: (newType: Menus) => void
}

export const useMenuStore = create<UseMenuStoreProps>((set) => ({
  isOpen: false,
  toggleMenu: () => set((store) => ({ isOpen: !store.isOpen })),
  type: Menus.links,
  setType: (newType) => set(() => ({ type: newType }))
}))
