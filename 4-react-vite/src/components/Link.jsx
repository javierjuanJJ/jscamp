import { useRouter } from "../hooks/useRouter"

export function Link ({ href, children, ...restOfProps }) {
  const { navigateTo, currentPath } = useRouter()

  const isActive = href === currentPath ? 'active' : ''

  const handleClick = (event) => {
    event.preventDefault()
    navigateTo(href)
  }

  return (
    <a href={href} className={isActive} {...restOfProps} onClick={handleClick}>
      {children}
    </a>
  )
}