export default function SelectBox({ position1 , position2 , cate , setSelectPain }) {
  return (
    <div 
        // className={`absolute p-2 w-4 rounded-full bg-blue-500`}
        className={`absolute p-4 w-4 rounded-full`}
        style={{ top :  `${position1} ` , left :  `${position2} ` }}
        onClick={() => setSelectPain(cate)}
    >
    </div>
  )
}
