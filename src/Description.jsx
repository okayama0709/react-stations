// @ts-check
import React, { useEffect, useState } from 'react'
import DogImage from './DogImage'

function DogApi(setDogUrl) {
  const url = 'https://dog.ceo/api/breeds/image/random' // URLを定義
  fetch(url)
    .then(res => res.json())
    .then(data => {
      setDogUrl(data.message) // 状態を更新
    })
    .catch(error => {
      console.error(error)
    })
}

export const Description = () => {
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/hound-english/n02089973_1132.jpg ',
  )

  useEffect(() => {
    DogApi(setDogUrl)
  }, [])

  function buttonClick() {
    console.log('クリックされました')
    DogApi(setDogUrl)
    const button = document.querySelector('.button')
    button.addEventListener('click', () => {
      DogApi(setDogUrl)
    })
  }

  return (
    <>
      <DogImage dogUrl={dogUrl} />
      <button onClick={buttonClick} className="button">
        更新
      </button>
    </>
  )
}

export default Description
