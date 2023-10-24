import React , { useState , useEffect } from 'react';

// componets
import SelectBox from '../../SelectBox/SelectBox';
import ImagesBox from '../../ImagesBox/ImagesBox';

// images
import handPic from '../../../assets/images/handpain/default-finger.png';
import buttonHover from '../../../assets/images/handpain/others-highlight.png';

// data
import { servicesData } from '../../../assets/data/data'; 

export default function FingerPainCard({ setFingerPain }) {

  const [ selectPain , setSelectPain ] = useState("");
  const [ caption , setCaption ] = useState(true);

  useEffect(() => {
      switch (selectPain) {
        case "0" : 
          setFingerPain("ข้ออื่นๆ หรือไม่ได้ปวดบริเวณข้อ");
          setCaption(false);
          break;
        case "1" :
          setFingerPain(servicesData.fingerPain[0].value);
          setCaption(true);
          break;
        case "2" :
          setFingerPain(servicesData.fingerPain[1].value);
          setCaption(true);
          break;
        case "3" :
          setFingerPain(servicesData.fingerPain[2].value);
          setCaption(true);
          break;
        default :
          setFingerPain("");
          break;
      }
  },[selectPain]);

  return (
    <div className='flex flex-col items-center justify-center p-10 w-96 mt-10 border border-gray-100 rounded shadow-2xl'>
        <h2 className='text-xl text-slate-500 font-bold'>จุดไหนที่คุณปวดนิ้วมากที่สุด ?</h2>
        <div className='relative flex items-center justify-center'>
          <img 
              src={handPic}
              alt="image"
              className='my-5 w-full'
          />
          {selectPain === "0" 
            ?  
            servicesData.fingerPain.map((item , index) => {
              return (
                <React.Fragment key={index}>
                  <ImagesBox hightlightPic={item.hightlightPic} activePic={item.activePic} caption={caption} />
                </React.Fragment>
              )
            })
            : 
            servicesData.fingerPain.map((item , index) => {
              return (
                <React.Fragment key={index}>
                  {selectPain === item.cate ? <ImagesBox hightlightPic={item.hightlightPic} activePic={item.activePic} caption={caption} /> : null}
                </React.Fragment>
              )
            })
            }
          <img
            src={buttonHover}
            alt="button-hover-image"
            className='absolute w-full opacity-0 hover:opacity-100'
            onClick={() => setSelectPain("0")}
          />
          {servicesData.fingerPain[0].boxes.map((item , index) => {
            return (
              <React.Fragment key={index}>
                <SelectBox position1={item.position1} position2={item.position2} cate={servicesData.fingerPain[0].cate} setSelectPain={setSelectPain} />
              </React.Fragment>
            )
          })}
          {servicesData.fingerPain[1].boxes.map((item , index) => {
            return (
              <React.Fragment key={index}>
                <SelectBox position1={item.position1} position2={item.position2} cate={servicesData.fingerPain[1].cate} setSelectPain={setSelectPain} />
              </React.Fragment>
            )
          })}
          {servicesData.fingerPain[2].boxes.map((item , index) => {
            return (
              <React.Fragment key={index}>
                <SelectBox position1={item.position1} position2={item.position2} cate={servicesData.fingerPain[2].cate} setSelectPain={setSelectPain} />
              </React.Fragment>
            )
          })}
        </div>
    </div>
  )
}

