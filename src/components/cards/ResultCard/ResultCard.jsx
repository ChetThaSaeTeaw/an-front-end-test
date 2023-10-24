export default function ResultCard({ stomachAche , fingerPain }) {
  return (
    <div className='flex flex-col items-center justify-center p-6 w-96 mt-10 border border-gray-100 rounded shadow-2xl'>
        <h2 className='text-xl text-slate-500 font-bold'>สรุปรายการของคุณ</h2>
        <div className="flex items-start justify-start pt-5 w-full">
            <p>ปวดท้องบริเวณ : </p>
            <p className="px-2 font-semibold">{!stomachAche ? "-" : stomachAche}</p>
        </div>
        <div className="flex items-start justify-start pt-5 w-full">
            <p>ปวดนิ้วบริเวณ : </p>
            <p className="px-2 font-semibold">{!fingerPain ? "-" : fingerPain}</p>
        </div>
    </div>
  )
}
