// DO NOT DELETE
import React, { useEffect, useState } from 'react'
import './App.css'
import Description from './Description'
import Header from './Header'

/**
 * @type {() => JSX.Element}
 */

export const App = () => {
  return (
    <>
      <Header />
      <Description />
    </>
  )
}
