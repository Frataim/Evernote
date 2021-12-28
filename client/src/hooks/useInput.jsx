import { useState } from "react";

function useInput({name, defaultValue='', type='text'}) {
  const [value, setValue] = useState(defaultValue)

  function handleChange(e) {
    setValue(e.target.value)
  }

  function clearValue() {
    setValue('')
  }

  function getValue() {
    return value
  }

  return ({
    attr: {
      name,
      type,
      value,
      handleChange,
    },
    getValue,
    clearValue
  })
}

export default useInput;
