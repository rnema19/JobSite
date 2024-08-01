/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const Card = ({children,bg = 'bg-gray-300'}) => {
  return (
    <div className={`${bg} p-6 rounded-lg shadow-md`}>
        {children}
    </div>
  )
}

export default Card