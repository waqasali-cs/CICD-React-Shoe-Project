/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

export default function Select({title, options}) {
  return (
      <div>
          <select defaultValue={""} className='w-24 border border-gray-300 p-4' >
              <option value="" disabled hidden >{title}</option>
              {options.map((option) => (<option value={option} key={option}>{option}</option>))} 
          </select>
    </div>
  )
}
