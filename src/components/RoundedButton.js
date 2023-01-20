import './RoundedButton.scss'

const RoundedButton = ({ children, onClick, isActive }) => {
  return (
    <div className={`rounded-button ${isActive ? 'active' : ''}`} onClick={onClick}>{children}</div>
  )
}

export default RoundedButton