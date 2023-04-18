import { defineStore } from 'pinia'

export const usePackageStore = defineStore('pack', () => {
  // eslint-disable-next-line no-unused-labels
  state: () => {
    return { pack: {} }
  }
})