export default function RippleButton({ as: Tag = 'button', className = '', children, ...rest }) {
  const handleClick = (e) => {
    const el = e.currentTarget
    const rect = el.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const span = document.createElement('span')
    span.className = 'ripple-span'
    span.style.width = span.style.height = `${size}px`
    span.style.left = `${e.clientX - rect.left - size / 2}px`
    span.style.top = `${e.clientY - rect.top - size / 2}px`
    el.appendChild(span)
    setTimeout(() => span.remove(), 650)
    rest.onClick?.(e)
  }

  return (
    <Tag className={className} onClick={handleClick} {...rest}>
      {children}
    </Tag>
  )
}
