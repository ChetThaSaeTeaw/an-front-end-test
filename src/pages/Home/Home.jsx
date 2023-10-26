import React , { useState , useEffect } from 'react';

// components
import SEO from '../../components/SEO/SEO';
import FingerPainCard from '../../components/cards/FingerPainCard/FingerPainCard';
import StomachAcheCard from '../../components/cards/StomachAcheCard/StomachAcheCard';
import ResultCard from '../../components/cards/ResultCard/ResultCard';

// images
import favicon from '../../assets/images/etc/agnos_health_logo.jpg';

export default function Home() {

  const [ step , setStep ] = useState(1);
  const [ buttonDisable , setButtonDisable ] = useState(false);
  const [ stomachAche , setStomachAche ] = useState("");
  const [ fingerPain , setFingerPain ] = useState("");

  function handleStep () {
    if (step <= 3) {
      if (step === 1 && stomachAche !== "") {
          setStep(next => next + 1);
          setButtonDisable(false);
      } else if (step === 2 && fingerPain !== "") {
          setStep(next => next + 1);
          setButtonDisable(false);
      } else if (step === 3) {
        alert("ส่งรายการของคุณเรียบร้อยแล้ว");
        window.location.reload();
      }
    };
  };

  useEffect(() => {
      if (step === 1 && stomachAche) {
        setButtonDisable(true);
      } else if (step === 2 && fingerPain) {
        setButtonDisable(true);
      } else if (step === 3) {
        setButtonDisable(true);
      }
  },[stomachAche , fingerPain , step]);

  return (
    <>
        <SEO 
          title="Agnos Front-End Test"
          description="แบบทดสอบ Front-End Developer"
          favicon={favicon}
        />
        <section className='flex flex-col items-center justify-center w-full h-screen p-10 container mx-auto'>
            <h1 className='text-2xl font-bold'>Agnos Front-End Test</h1>
            {step === 1 ? <StomachAcheCard setStomachAche={setStomachAche} /> : null}
            {step === 2 ? <FingerPainCard setFingerPain={setFingerPain} /> : null}
            {step === 3 ? <ResultCard stomachAche={stomachAche} fingerPain={fingerPain} /> : null}
            <button 
              type='submit'
              className={!buttonDisable ? 'bg-gray-500 text-white font-bold my-4 py-2 px-4 rounded-lg w-80 opacity-50 cursor-not-allowed' : 'bg-blue-500 text-white font-bold my-4 py-2 px-4 rounded-lg w-80 hover:bg-blue-600'}
              onClick={() => handleStep()}
            >
              {step < 3 ? "ต่อไป" : "ส่ง"}
            </button>
        </section>
    </>
  )
}
