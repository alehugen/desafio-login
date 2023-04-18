import { defineStore } from 'pinia'
import { PackageProps } from '../DTO/Package'

export const usePackageStore = defineStore('Package', {
  // eslint-disable-next-line no-unused-labels
  state: () => {
    return { selected: {} as PackageProps }
  }
})