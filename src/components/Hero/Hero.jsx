import Header from '../Header'
import DownloadButton from '../DownloadButton'
import productSrc from '@/assets/product_1.png'
import './Hero.scss'

const Hero = () => {
  return (
    <div className="hero">
      <Header></Header>
      <section>
        <img src={productSrc}></img>
        <h1>
          <span>Supercharged </span>
          <br></br>productivity
        </h1>
        <p>
          Raycast is a blazingly fast, totally extendable launcher. It lets you complete tasks,
          calculate, share common links, and much more.
        </p>
        <DownloadButton>Download for Mac</DownloadButton>
      </section>
    </div>
  )
}

export default Hero
