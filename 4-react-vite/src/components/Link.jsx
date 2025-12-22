import { useRouter } from "../hooks/useRouter"

export function Link ({ href, children, ...restOfProps }) {
  const { navigateTo, currentPath } = useRouter()

  let isActive = true
  if (href === '') {
    isActive = 'active'
  }
  else{
    isActive = currentPath === href ? 'active' : ''
  }

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