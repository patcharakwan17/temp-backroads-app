import React from 'react'
import { pageLinks } from '../data'

const PageLinks = ({ parentClass, itemClass}) => {
  return (
    <ul className={parentClass}>
    {
      pageLinks.map((link) => {
        return (
          <PageLinks key={link.id} link={link} itemClass={itemClass} />
        )
      })
    }
    </ul>
  )
}

export default PageLinks