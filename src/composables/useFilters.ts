import AssetsIdentifier from '@/components/icons/AssetsIdentifier.vue'
import NameIdentifier from '@/components/icons/NameIdentifier.vue'
import NetworkIdentifier from '@/components/icons/NetworkIdentifier.vue'
import { ref, type Component, type Ref } from 'vue'

type FilterProps = {
  name: string
  id: string
  icon: Component
  isActive: Ref<boolean>
}

/**
 * A hook for filters.
 *
 * @return {{filters: FilterProps[]}} An object containing filters.
 */

export const useFilters = () => {
  const filters: FilterProps[] = [
    {
      name: 'Name/identifier',
      id: 'name',
      icon: NameIdentifier,
      isActive: ref<boolean>(false),
    },
    {
      name: 'Assets identifier',
      id: 'assets',
      icon: AssetsIdentifier,
      isActive: ref<boolean>(false),
    },
    {
      name: 'Network identifier',
      id: 'network',
      icon: NetworkIdentifier,
      isActive: ref<boolean>(false),
    },
  ]

  return {
    filters,
  }
}
