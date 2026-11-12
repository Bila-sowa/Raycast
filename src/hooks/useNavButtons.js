const navButtons = [
  { label: 'Store', href: '#' },
  { label: 'Developer', href: '#' },
  { label: 'Teams', href: '#' },
  { label: 'Pro', href: '#', badge: 'New' },
  { label: 'Changelog', href: '#' },
  { label: 'Pricing', href: '#' },
  { label: 'Blog', href: '#' },
]

const useNavButtons = () => {
  const getNavButtons = () => navButtons

  return {
    getNavButtons,
  }
}

export default useNavButtons
