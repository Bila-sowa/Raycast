import { AppProvider } from '@/context/appContext'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import './styles.scss'

const App = () => {
  return (
    <AppProvider>
      <Header></Header>
      <main className="content">
        <Hero></Hero>
      </main>
    </AppProvider>
  )
}

export default App
