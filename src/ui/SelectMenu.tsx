import { ChangeEvent, useState } from 'react'

export interface SelectMenuProps {
  name: string
  title: string
  defaultIdx?: number
  className?: string
  options: { value: string; text: string }[]
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void
}

export default function SelectMenu({
  title,
  name,
  options,
  defaultIdx = 0,
  className = '',
  onChange,
}: SelectMenuProps) {
  // Setting the initial selected value as the first option
  const [selectedValue, setSelectedValue] = useState(options[defaultIdx].value)

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value)
    onChange(event) // Call the parent onChange handler
  }

  return (
    <form className={`max-w-sm mx-auto ${className}`}>
      <label
        htmlFor="countries"
        className="block mb-2 text-sm font-medium text-white"
      >
        {title}
      </label>
      <select
        name={name}
        className="text-white bg-zinc-950 border border-gray-300 text-sm rounded-lg focus:ring-indigo-500 focus:border-purple-500 block w-full p-2.5"
        value={selectedValue}
        onChange={handleChange}
      >
        {options.map((opt, idx) => (
          <option key={idx} value={opt.value}>
            {opt.text}
          </option>
        ))}
      </select>
    </form>
  )
}
