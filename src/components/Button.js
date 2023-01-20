import './Button.scss'

const Button = ({ children }) => {
  return (
    <button className='btn btn-rounded'>{children}</button>
  )
}

export default Button