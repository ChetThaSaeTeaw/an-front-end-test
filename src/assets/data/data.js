// images
import epigastriumActive from '../images/stomatchache/epigastrium-active.png';
import epigastriumHighlight from '../images/stomatchache/epigastrium-highlight.png';
import llqActive from '../images/stomatchache/llq-active.png';
import llqHighlight from '../images/stomatchache/llq-highlight.png';
import luqActive from '../images/stomatchache/luq-active.png';
import luqHighlight from '../images/stomatchache/luq-highlight.png';
import rlqActive from '../images/stomatchache/rlq-active.png';
import rlqHighlight from '../images/stomatchache/rlq-highlight.png';
import ruqActive from '../images/stomatchache/ruq-active.png';
import ruqHighlight from '../images/stomatchache/ruq-highlight.png';
import suprapubicActive from '../images/stomatchache/suprapubic-active.png';
import suprapubicHighlight from '../images/stomatchache/suprapubic-highlight.png';
import umbilicusActive from '../images/stomatchache/umbilicus-active.png';
import umbilicusHighlight from '../images/stomatchache/umbilicus-highlight.png';

import dipHighlight from '../images/handpain/dip-highlight.png';
import dipActive from '../images/handpain/dip-active.png';
import pipHighlight from '../images/handpain/pip-highlight.png';
import pipActive from '../images/handpain/pip-active.png';
import mcpHighlight from '../images/handpain/mcp-highlight.png';
import mcpActive from '../images/handpain/mcp-active.png';

const stomachhAche = [
    {
        id : 1,
        cate : "1",
        value : "ลิ้นปี่",
        hightlightPic : epigastriumHighlight,
        activePic : epigastriumActive,
        boxes : [
            { position1 : "125px" , position2 : "105px" }
        ]
    },{
        id : 2,
        cate : "2",
        value : "ช่องท้องด้านบนซ้าย",
        hightlightPic : llqHighlight,
        activePic : llqActive,
        boxes : [
            { position1 : "173px" , position2 : "130px" }
        ]
    },{
        id : 3,
        cate : "3",
        value : "ช่องท้องด้านล่างซ้าย",
        hightlightPic : luqHighlight,
        activePic : luqActive,
        boxes : [
            { position1 : "142px" , position2 : "128px" }
        ]
    },{
        id : 4,
        cate : "4",
        value : "ช่องท้องด้านล่างขวา",
        hightlightPic : rlqHighlight,
        activePic : rlqActive,
        boxes : [
            { position1 : "175px" , position2 : "80px" }
        ]
    },{
        id : 5,
        cate : "5",
        value : "ช่องท้องด้านบนขวา",
        hightlightPic : ruqHighlight,
        activePic : ruqActive,
        boxes : [
            { position1 : "143px" , position2 : "83px" }
        ]
    },{
        id : 6,
        cate : "6",
        value : "ท้องน้อย",
        hightlightPic : suprapubicHighlight,
        activePic : suprapubicActive,
        boxes : [
            { position1 : "188px" , position2 : "105px" }
        ]
    },{
        id : 7,
        cate : "7",
        value : "รอบสะดือ",
        hightlightPic : umbilicusHighlight,
        activePic : umbilicusActive,
        boxes : [
            { position1 : "158px" , position2 : "105px" }
        ]
    }
];

const fingerPain = [
    {
        id : 1,
        cate : "1",
        value : "ข้อนิ้วส่วนปลาย",
        hightlightPic : dipHighlight,
        activePic : dipActive,
        boxes : [
            { position1 : "80px" , position2 : "48px" },
            { position1 : "50px" , position2 : "72px" },
            { position1 : "40px" , position2 : "102px" },
            { position1 : "45px" , position2 : "130px" },
        ]
    },{
        id : 2,
        cate : "2",
        value : "ข้อนิ้วส่วนต้น",
        hightlightPic : pipHighlight,
        activePic : pipActive,
        boxes : [
            { position1 : "105px" , position2 : "50px" },
            { position1 : "77px" , position2 : "77px" },
            { position1 : "70px" , position2 : "105px" },
            { position1 : "75px" , position2 : "130px" },
            { position1 : "130px" , position2 : "180px" },
        ]
    },{
        id : 3,
        cate : "3",
        value : "ข้อโคนนิ้วมือ",
        hightlightPic : mcpHighlight,
        activePic : mcpActive,
        boxes : [
            { position1 : "126px" , position2 : "65px" },
            { position1 : "120px" , position2 : "85px" },
            { position1 : "112px" , position2 : "106px" },
            { position1 : "115px" , position2 : "130px" },
            { position1 : "160px" , position2 : "160px" },
        ]
    }
];

export const servicesData = {
    stomachhAche,
    fingerPain
};