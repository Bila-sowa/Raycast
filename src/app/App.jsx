import { AppProvider } from '@/context/appContext'
import Hero from '@/components/Hero'
import './styles.scss'

const App = () => {
  return (
    <AppProvider>
      <Hero></Hero>
    </AppProvider>
  )
}

export default App
