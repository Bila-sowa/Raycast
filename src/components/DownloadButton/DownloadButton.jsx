import './DownloadButton.scss'

const DownloadButton = (props) => {
  const { children } = props

  return <button className="download-button">{children}</button>
}

export default DownloadButton
