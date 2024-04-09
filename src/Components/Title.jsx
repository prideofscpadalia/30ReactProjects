import React from 'react'


export default function Title({classes,text}) {
  const classNames = !classes ? "title text-center" : `${classes} title`;

  return (
   <h1 className={classNames}>{!text ? "Title" : text}</h1>
  )
}