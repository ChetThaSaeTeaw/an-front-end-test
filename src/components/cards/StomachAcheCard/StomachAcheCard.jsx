import React , { useState , useEffect } from 'react';

// componets
import SelectBox from '../../SelectBox/SelectBox';
import ImagesBox from '../../ImagesBox/ImagesBox';

// images
import bodyPic from '../../../assets/images/stomatchache/default-abs.png';
import buttonHover from '../../../assets/images/stomatchache/all-over-highlight.png';

// data
import { servicesData } from '../../../assets/data/data'; 

export default function StomachAcheCard({ setStomachAche }) {

  const [ selectPain , setSelectPain ] = useState("");
  const [ caption , setCaption ] = useState(true);

  useEffect(() => {
      switch (selectPain) {
        case "0" : 
          setStomachAche("ปวดทั่วท้อง");
          setCaption(false);
          break;
        case "1" :
          setStomachAche(servicesData.stomachhAche[0].value);
          setCaption(true);
          break;
        case "2" :
          setStomachAche(servicesData.stomachhAche[1].value);
          setCaption(true);
          break;
        case "3" :
          setStomachAche(servicesData.stomachhAche[2].value);
          setCaption(true);
          break;
        case "4" :
          setStomachAche(servicesData.stomachhAche[3].value);
          setCaption(true);
          break;
        case "5" :
          setStomachAche(servicesData.stomachhAche[4].value);
          setCaption(true);
          break;
        case "6" :
          setStomachAche(servicesData.stomachhAche[5].value);
          setCaption(true);
          break;
        case "7" :
            setStomachAche(servicesData.stomachhAche[6].value);
            setCaption(true);
            break;
        default :
          setStomachAche("");
          break;
      }
  },[selectPain]);

  return (
    <div className='flex flex-col items-center justify-center p-10 w-96 mt-10 border border-gray-100 rounded shadow-2xl'>
        <h2 className='text-xl text-slate-500 font-bold'>ปวดท้องที่บริเวณใดมากที่สุด ?</h2>
        <div className='relative flex items-center justify-center'>
          <img 
              src={bodyPic}
              alt="image"
              className='my-5 w-full'
          />
          {selectPain === "0" 
            ?  
            servicesData.stomachhAche.map((item , index) => {
              return (
                <React.Fragment key={index}>
                  <ImagesBox hightlightPic={item.hightlightPic} activePic={item.activePic} caption={caption} />
                </React.Fragment>
              )
            })
            : 
            servicesData.stomachhAche.map((item , index) => {
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
          {servicesData.stomachhAche[0].boxes.map((item , index) => {
            return (
              <React.Fragment key={index}>
                <SelectBox position1={item.position1} position2={item.position2} cate={servicesData.stomachhAche[0].cate} setSelectPain={setSelectPain} />
              </React.Fragment>
            )
          })}
          {servicesData.stomachhAche[1].boxes.map((item , index) => {
            return (
              <React.Fragment key={index}>
                <SelectBox position1={item.position1} position2={item.position2} cate={servicesData.stomachhAche[1].cate} setSelectPain={setSelectPain} />
              </React.Fragment>
            )
          })}
          {servicesData.stomachhAche[2].boxes.map((item , index) => {
            return (
              <React.Fragment key={index}>
                <SelectBox position1={item.position1} position2={item.position2} cate={servicesData.stomachhAche[2].cate} setSelectPain={setSelectPain} />
              </React.Fragment>
            )
          })}
          {servicesData.stomachhAche[3].boxes.map((item , index) => {
            return (
              <React.Fragment key={index}>
                <SelectBox position1={item.position1} position2={item.position2} cate={servicesData.stomachhAche[3].cate} setSelectPain={setSelectPain} />
              </React.Fragment>
            )
          })}
          {servicesData.stomachhAche[4].boxes.map((item , index) => {
            return (
              <React.Fragment key={index}>
                <SelectBox position1={item.position1} position2={item.position2} cate={servicesData.stomachhAche[4].cate} setSelectPain={setSelectPain} />
              </React.Fragment>
            )
          })}
          {servicesData.stomachhAche[5].boxes.map((item , index) => {
            return (
              <React.Fragment key={index}>
                <SelectBox position1={item.position1} position2={item.position2} cate={servicesData.stomachhAche[5].cate} setSelectPain={setSelectPain} />
              </React.Fragment>
            )
          })}
          {servicesData.stomachhAche[6].boxes.map((item , index) => {
            return (
              <React.Fragment key={index}>
                <SelectBox position1={item.position1} position2={item.position2} cate={servicesData.stomachhAche[6].cate} setSelectPain={setSelectPain} />
              </React.Fragment>
            )
          })}
        </div>
    </div>
  )
}
