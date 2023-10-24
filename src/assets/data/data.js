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
            { position1 : "150px" , position2 : "130px" }
        ]
    },{
        id : 2,
        cate : "2",
        value : "ช่องท้องด้านบนซ้าย",
        hightlightPic : llqHighlight,
        activePic : llqActive,
        boxes : [
            { position1 : "210px" , position2 : "160px" }
        ]
    },{
        id : 3,
        cate : "3",
        value : "ช่องท้องด้านล่างซ้าย",
        hightlightPic : luqHighlight,
        activePic : luqActive,
        boxes : [
            { position1 : "172px" , position2 : "160px" }
        ]
    },{
        id : 4,
        cate : "4",
        value : "ช่องท้องด้านล่างขวา",
        hightlightPic : rlqHighlight,
        activePic : rlqActive,
        boxes : [
            { position1 : "212px" , position2 : "98px" }
        ]
    },{
        id : 5,
        cate : "5",
        value : "ช่องท้องด้านบนขวา",
        hightlightPic : ruqHighlight,
        activePic : ruqActive,
        boxes : [
            { position1 : "172px" , position2 : "100px" }
        ]
    },{
        id : 6,
        cate : "6",
        value : "ท้องน้อย",
        hightlightPic : suprapubicHighlight,
        activePic : suprapubicActive,
        boxes : [
            { position1 : "230px" , position2 : "130px" }
        ]
    },{
        id : 7,
        cate : "7",
        value : "รอบสะดือ",
        hightlightPic : umbilicusHighlight,
        activePic : umbilicusActive,
        boxes : [
            { position1 : "192px" , position2 : "130px" }
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
            { position1 : "105px" , position2 : "64px" },
            { position1 : "65px" , position2 : "100px" },
            { position1 : "50px" , position2 : "132px" },
            { position1 : "58px" , position2 : "169px" },
        ]
    },{
        id : 2,
        cate : "2",
        value : "ข้อนิ้วส่วนต้น",
        hightlightPic : pipHighlight,
        activePic : pipActive,
        boxes : [
            { position1 : "132px" , position2 : "74px" },
            { position1 : "102px" , position2 : "103px" },
            { position1 : "90px" , position2 : "135px" },
            { position1 : "95px" , position2 : "169px" },
            { position1 : "165px" , position2 : "232px" },
        ]
    },{
        id : 3,
        cate : "3",
        value : "ข้อโคนนิ้วมือ",
        hightlightPic : mcpHighlight,
        activePic : mcpActive,
        boxes : [
            { position1 : "165px" , position2 : "88px" },
            { position1 : "152px" , position2 : "112px" },
            { position1 : "145px" , position2 : "139px" },
            { position1 : "145px" , position2 : "167px" },
            { position1 : "207px" , position2 : "207px" },
        ]
    }
];

export const servicesData = {
    stomachhAche,
    fingerPain
};