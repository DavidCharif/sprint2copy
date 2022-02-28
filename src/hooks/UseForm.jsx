import { useState } from 'react'

const UseForm = (initialState = {}) => {
  const [values, setValue] = useState(initialState)
  // console.log(initialState);
  // console.log(values);

  const handleInputChange = ({target}) => {
    // console.log(target.value);
    setValue({
      ...values,
      [target.name] : target.value
    })
    // console.log(values);
  }
  const resetForm = () => {
    setValue(initialState)
  }



  return [values,handleInputChange,resetForm]
}

export default UseForm