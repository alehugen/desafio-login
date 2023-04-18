import { defineStore } from 'pinia'
import { PackageProps } from '../DTO/Package'

export const usePackageStore = defineStore('pack', () => {
  // eslint-disable-next-line no-unused-labels
  state: () => {
    return { pack: {} as PackageProps }
  }
})