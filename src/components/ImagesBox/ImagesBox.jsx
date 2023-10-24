export default function ImagesBox({ hightlightPic , activePic , caption }) {
  return (
    <>
        <img
            src={hightlightPic}
            alt="image"
            className='absolute'
        />
        {caption 
        ?  
            <img
            src={activePic}
            alt="image"
            className='absolute'
            /> 
        : 
            null
        }
    </>
  )
}
