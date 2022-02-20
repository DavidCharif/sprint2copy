import { useState } from 'react'

const UseForm = (initialState = {}) => {
  const [values, setValue] = useState(initialState)


  const handleInputChange = ({target}) => {
    setValue({
      ...values,
      [target.name] : target.value
    })
  }
  const resetForm = () => {
    setValue(initialState)
  }



  return [values,handleInputChange,resetForm]
}

export default UseForm