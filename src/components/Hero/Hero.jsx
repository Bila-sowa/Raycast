import DownloadButton from '../DownloadButton'
import Announcement from '../Announcement'
import productSrc from '@/assets/product_1.png'
import './Hero.scss'

const Hero = () => {
  return (
    <div className="hero">
      <section>
        <img src={productSrc} alt="Raycast command palette preview" />
        <h1>
          <span>Supercharged </span>
          <br />
          productivity
        </h1>
        <p className="description">
          Raycast is a blazingly fast, totally extendable launcher. It lets you complete tasks,
          calculate, share common links, and much more.
        </p>
        <div className="download-wrapper">
          <DownloadButton>Download for Mac</DownloadButton>
          <div>
            <span>v1.55.2</span>
            <span aria-hidden="true">|</span>
            <span>macOS 12+</span>
            <span aria-hidden="true">|</span>
            <span>Install via Homebrew</span>
          </div>
        </div>
        <Announcement></Announcement>
      </section>
    </div>
  )
}

export default Hero
