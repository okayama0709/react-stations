// @ts-check

export const DogImage = props => {
  console.log(props)
  return (
    <>
      <div className="ImgBox">
        <img src={props.dogUrl} alt="犬" />
      </div>
    </>
  )
}

export default DogImage
