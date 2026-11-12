const navButtons = [
  { label: 'Store', link: '#' },
  { label: 'Developer', link: '#' },
  { label: 'Teams', link: '#' },
  { label: 'Pro', link: '#', badge: 'New' },
  { label: 'Changelog', link: '#' },
  { label: 'Pricing', link: '#' },
  { label: 'Blog', link: '#' },
]

const useNavButtons = () => {
  const getNavButtons = () => navButtons

  return {
    getNavButtons,
  }
}

export default useNavButtons
