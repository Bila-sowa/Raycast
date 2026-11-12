import { createContext, useMemo } from 'react'
import useBurgerMenu from '@/hooks/useBurgerMenu'
import useNavButtons from '@/hooks/useNavButtons'

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext({})

export const AppProvider = (props) => {
  const { children } = props

  const { isOpen, setIsOpen, handleEscape } = useBurgerMenu()
  const { getNavButtons } = useNavButtons()

  const value = useMemo(
    () => ({
      getNavButtons,
      isOpen,
      setIsOpen,
      handleEscape,
    }),
    [getNavButtons, isOpen, setIsOpen, handleEscape],
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
