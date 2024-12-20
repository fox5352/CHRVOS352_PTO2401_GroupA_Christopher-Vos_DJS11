import { MouseEvent, ReactNode, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
//components
import GenreTag from './GenreTag'

/**
 * TagButton component for toggling a query parameter in the URL search params.
 */
function TagButton({
  param,
  children,
}: {
  param: string
  children: ReactNode
}) {
  const query = 'q'
  const [isActive, setIsActive] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams()

  /**
   * Updates the `isActive` state based on the current URL search parameters.
   */
  useEffect(() => {
    const isActiveParam = searchParams.get(query)
    setIsActive(isActiveParam === param)
  }, [searchParams, param])

  /**
   * Toggles the search parameter in the URL between the specified `param` value and empty.
   *
   * @param {MouseEvent} event - The click event for the button.
   */
  const toggleParam = (event: MouseEvent) => {
    event.stopPropagation()
    if (searchParams.get(query) === param) {
      searchParams.delete(query)
    } else {
      searchParams.set('page', '0')
      searchParams.set(query, param)
    }
    setSearchParams(searchParams)
  }

  return (
    <button className="flex" onClick={toggleParam} type="button">
      <GenreTag variant={isActive ? 'filled' : 'outline'}>{children}</GenreTag>
    </button>
  )
}

export default TagButton
