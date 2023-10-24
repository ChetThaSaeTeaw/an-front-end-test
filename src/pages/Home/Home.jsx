import React , { useState } from 'react';
import { Helmet } from 'react-helmet';

// components
import FingerPainCard from '../../components/cards/FingerPainCard/FingerPainCard';
import StomachAcheCard from '../../components/cards/StomachAcheCard/StomachAcheCard';
import ResultCard from '../../components/cards/ResultCard/ResultCard';

export default function Home() {

  const [ step , setStep ] = useState(1);
  const [ stomachAche , setStomachAche ] = useState("");
  const [ fingerPain , setFingerPain ] = useState("");

  function handleStep () {
    if (step <= 3) {
      if (step === 1 && stomachAche !== "") {
          setStep(next => next + 1);
      } else if (step === 2 && fingerPain !== "") {
          setStep(next => next + 1);
      } else if (step === 3) {
        alert("ส่งรายการของคุณเรียบร้อยแล้ว");
        window.location.reload();
      }
    };
  };

  return (
    <>
        <Helmet>
            <title>Agnos Front-End Test</title>
        </Helmet>
        <section className='flex flex-col items-center justify-start w-full h-screen p-10 container mx-auto'>
            <h1 className='text-3xl font-bold'>Agnos Front-End Test</h1>
            {step === 1 ? <StomachAcheCard setStomachAche={setStomachAche} /> : null}
            {step === 2 ? <FingerPainCard setFingerPain={setFingerPain} /> : null}
            {step === 3 ? <ResultCard stomachAche={stomachAche} fingerPain={fingerPain} /> : null}
            <button 
              type='submit'
              className={stomachAche === "" ? 'bg-gray-500 text-white font-bold my-4 py-2 px-4 rounded-lg w-96 opacity-50 cursor-not-allowed' : 'bg-blue-500 text-white font-bold my-4 py-2 px-4 rounded-lg w-96 hover:bg-blue-600'}
              onClick={() => handleStep()}
            >
              {step < 3 ? "ต่อไป" : "ส่ง"}
            </button>
        </section>
    </>
  )
}