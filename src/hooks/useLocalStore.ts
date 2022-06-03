import useStore from './useStore'

const useLocalStore = <T>(key: string, defaultValue?: T) =>
  useStore(localStorage, key, defaultValue)

export default useLocalStore
