const date = new Date();
const renderCalendar = ()=>{
date.setDate(1);
const monthDays = document.querySelector('.days');
const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
const firstDayIndex = date.getDay();
const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
const nextDays = 7 - lastDayIndex - 1;
const months = [
  "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];

document.querySelector(".date h1").innerHTML= months[date.getMonth()];
document.querySelector(".date p").innerHTML= new Date().toDateString();
let days = "";
for(let x=firstDayIndex; x>0; x--){
  days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
}
for(let i=1; i<=lastDay; i++){
  if(i== new Date().getDate() && date.getMonth() == new Date().getMonth()){
    days += `<div class="today">${i}</div>`;
  }else{
    days += `<div>${i}</div>`;
  }
}
for(let j=1; j<=nextDays; j++){
  days += `<div class="next-date">${j}</div>`;
  monthDays.innerHTML = days;
}
}

document.querySelector('.prev').addEventListener('click', () => {
  date.setMonth(date.getMonth()-1);
  renderCalendar();
});
document.querySelector('.next').addEventListener('click', () => {
  date.setMonth(date.getMonth()+1);
  renderCalendar();
});
renderCalendar();

/* Jquery search */
var calendar2021={  jan: {1: "Сайхан амарна"}, 
                    feb: {1: "Сагсны тэмцээнтэй", 3: "Шагнал гардуулна даа", 17: "Жавхлан багшийн лаб 2-ыг хийнэ"}, 
                    mar: {2: "Энэ лабынхаа хугацааг сунгах уу яах вэ гэдэгээ шийднэ", 6: "Энд юу бичье дээ байз", 8: "Эмэгтэйчүүддээ баяр хүргэнэ дээ"}, 
                    apr: {1: "Бүгдээрээ худлаа ярьцаагаагаарай"}, 
                    may: {10: "Энэ сард ч ёстой юу ч болдоггүй сар даа"}, 
                    jun: {6: "Жавхлан багшийн төрсөн өдөр"},  
                    jul: {4: "Хичээл амарсаан ураа"}, 
                    aug: {1: "Хөдөө явдаг цаг даа", 25: "Хичээл сонголт эхэллээ"}, 
                    sep: {1: "9-н сарын нэгэн боллоо ерөөсөө бидний баяр даа"}, 
                    oct: {13: "Сур сур бас дахин сур"}, 
                    nov: {2: "Сурсаар л бай"}, 
                    dec: {20: "Өвлийн семистер хаагдах нь дээ", 30: "Дүн гаргаж дууслаа баярлалаа баяртай"} 
                }

$(document).ready(function () {
  $(document).tooltip();
  var langs = [
    calendar2021.jan[1],
    calendar2021.feb[1],
    calendar2021.feb[3],
    calendar2021.feb[17],
    calendar2021.mar[2],
    calendar2021.mar[6],
    calendar2021.mar[8],
    calendar2021.apr[1],
    calendar2021.may[10],
    calendar2021.jun[6],
    calendar2021.jul[4],
    calendar2021.aug[1],
    calendar2021.aug[25],
    calendar2021.sep[1],
    calendar2021.oct[13],
    calendar2021.nov[2],
    calendar2021.dec[20],
    calendar2021.dec[30]
    ];
  $('#myInput').autocomplete({
      source: langs,
      focus: showLabel,
      select: showLabel,
      change: showLabel
  });
  function showLabel(event, ui){
    var  x;
      for(x=0; x<18; x++){
        if(ui.item.label == langs[x]){
        switch(x){
		      case 0: {
            document.getElementById("datee").innerHTML = "Jan 1";
            break;
          }
		      case 1: {
            document.getElementById("datee").innerHTML = "Feb 1";
            break;
          }
          case 2: {
            document.getElementById("datee").innerHTML = "Feb 3";
            break;
          }
          case 3: {
            document.getElementById("datee").innerHTML = "Feb 17";
            break;
          }
          case 4: {
            document.getElementById("datee").innerHTML = "Mar 2";
            break;
          }
          case 5: {
            document.getElementById("datee").innerHTML = "Mar 6";
            break;
          }
          case 6:  {
            document.getElementById("datee").innerHTML = "Mar 8";
            break;
          }
          case 7: {
            document.getElementById("datee").innerHTML = "Apr 1";
            break;
          }
          case 8: {
            document.getElementById("datee").innerHTML = "May 10";
            break;
          }
          case 9: {
            document.getElementById("datee").innerHTML = "Jun 6";
            break;
          }
          case 10: {
            document.getElementById("datee").innerHTML = "Jul 4";
            break;
          }
          case 11: {
            document.getElementById("datee").innerHTML = "Aug 1";
            break;
          }
          case 12: {
            document.getElementById("datee").innerHTML = "Aug 25";
            break;
          }
          case 13: {
            document.getElementById("datee").innerHTML = "Sep 1";
            break;
          }
          case 14: {
            document.getElementById("datee").innerHTML = "Oct 13";
            break;
          }
          case 15: {
            document.getElementById("datee").innerHTML = "Nov 2";
            break;
          }
          case 16: {
            document.getElementById("datee").innerHTML = "Dec 20";
            break;
          }
          case 17: {
            document.getElementById("datee").innerHTML = "Dec 30";
            break;
          }
        }
        }
      }
  }
});