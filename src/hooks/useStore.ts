import { useEffect, useState } from 'react'

const useStore = <T>(
  storage: typeof localStorage | typeof sessionStorage,
  key: string,
  defaultValue?: T
) => {
  const [value, setValue] = useState(() => {
    const savedValue = storage.getItem(key)

    if (savedValue === null)
      return typeof defaultValue === 'function' ? defaultValue() : defaultValue

    try {
      return JSON.parse(savedValue)
    } catch (error) {
      console.error(error)
    }

    return typeof defaultValue === 'function' ? defaultValue() : defaultValue
  })

  useEffect(() => {
    storage.setItem(key, JSON.stringify(value))
  }, [value])

  return [value, setValue]
}

export default useStore
