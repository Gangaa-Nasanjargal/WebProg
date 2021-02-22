const date = new Date();
const months = [
"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];
const weekDaysArr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const weekDays = document.querySelector('.weekdays');
document.querySelector(".jan h1").innerHTML = months[0];
document.querySelector(".feb h1").innerHTML = months[1];
document.querySelector(".mar h1").innerHTML = months[2];
document.querySelector(".apr h1").innerHTML = months[3];
document.querySelector(".may h1").innerHTML = months[4];
document.querySelector(".jun h1").innerHTML = months[5];
document.querySelector(".jul h1").innerHTML = months[6];
document.querySelector(".aug h1").innerHTML = months[7];
document.querySelector(".sep h1").innerHTML = months[8];
document.querySelector(".oct h1").innerHTML = months[9];
document.querySelector(".nov h1").innerHTML = months[10];
document.querySelector(".dec h1").innerHTML = months[11];

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
                
                var  x;
                for(x in calendar2021.jan){
                    document.getElementById("jan").innerHTML += x + "<br>";
                    document.getElementById("jan1").innerHTML += calendar2021.jan[x] + "<br>";
                }
                for(x in calendar2021.feb){
                    document.getElementById("feb").innerHTML += x + "<br>";
                    document.getElementById("feb1").innerHTML += calendar2021.feb[x] + "<br>";
                }
                for(x in calendar2021.mar){
                    document.getElementById("mar").innerHTML += x + "<br>";
                    document.getElementById("mar1").innerHTML += calendar2021.mar[x] + "<br>";
                }
                for(x in calendar2021.apr){
                    document.getElementById("apr").innerHTML += x + "<br>";
                    document.getElementById("apr1").innerHTML += calendar2021.apr[x] + "<br>";
                }
                for(x in calendar2021.may){
                    document.getElementById("may").innerHTML += x + "<br>";
                    document.getElementById("may1").innerHTML += calendar2021.may[x] + "<br>";
                }
                for(x in calendar2021.jun){
                    document.getElementById("jun").innerHTML += x + "<br>";
                    document.getElementById("jun1").innerHTML += calendar2021.jun[x] + "<br>";
                }
                for(x in calendar2021.jul){
                    document.getElementById("jul").innerHTML += x + "<br>";
                    document.getElementById("jul1").innerHTML += calendar2021.jul[x] + "<br>";
                }
                for(x in calendar2021.aug){
                    document.getElementById("aug").innerHTML += x + "<br>";
                    document.getElementById("aug1").innerHTML += calendar2021.aug[x] + "<br>";
                }
                for(x in calendar2021.sep){
                    document.getElementById("sep").innerHTML += x + "<br>";
                    document.getElementById("sep1").innerHTML += calendar2021.sep[x] + "<br>";
                }
                for(x in calendar2021.oct){
                    document.getElementById("oct").innerHTML += x + "<br>";
                    document.getElementById("oct1").innerHTML += calendar2021.oct[x] + "<br>";
                }
                for(x in calendar2021.nov){
                    document.getElementById("nov").innerHTML += x + "<br>";
                    document.getElementById("nov1").innerHTML += calendar2021.nov[x] + "<br>";
                }
                for(x in calendar2021.dec){
                    document.getElementById("dec").innerHTML += x + "<br>";
                    document.getElementById("dec1").innerHTML += calendar2021.dec[x] + "<br>";
                }
let a = ""; 
for(let i=0; i<=6; i++){
     a = a +`<div>${weekDaysArr[i]}</div>`
     weekDays.innerHTML = a;
}
for(let a=0; a<12; a++){
   const lastDay= new Date(date.getFullYear(), date.getMonth(0)+a, 0).getDate();
   let days = "";
    if(a==0){
        for(let i=1; i<=lastDay; i++){
            days = days + `<div>${i}</div>`;
            const monthDays = document.querySelector('.days0').innerHTML = days;
        }
    }else if(a==1){
        for(let i=1; i<=lastDay; i++){
            days = days + `<div>${i}</div>`;
            const monthDays = document.querySelector('.days1').innerHTML = days;
        }
    }else if(a==2){
        for(let i=1; i<=lastDay; i++){
            days = days + `<div>${i}</div>`;
            const monthDays = document.querySelector('.days2').innerHTML = days;
        }
    }else if(a==3){
        for(let i=1; i<=lastDay; i++){
            days = days + `<div>${i}</div>`;
            const monthDays = document.querySelector('.days3').innerHTML = days;
        }
    }else if(a==4){
        for(let i=1; i<=lastDay; i++){
            days = days + `<div>${i}</div>`;
            const monthDays = document.querySelector('.days4').innerHTML = days;
        }
    }else if(a==5){
        for(let i=1; i<=lastDay; i++){
            days = days + `<div>${i}</div>`;
            const monthDays = document.querySelector('.days5').innerHTML = days;
        }
    }else if(a==6){
        for(let i=1; i<=lastDay; i++){
            days = days + `<div>${i}</div>`;
            const monthDays = document.querySelector('.days6').innerHTML = days;
        }
    }else if(a==7){
        for(let i=1; i<=lastDay; i++){
            days = days + `<div>${i}</div>`;
            const monthDays = document.querySelector('.days7').innerHTML = days;
        }
    }else if(a==8){
        for(let i=1; i<=lastDay; i++){
            days = days + `<div>${i}</div>`;
            const monthDays = document.querySelector('.days8').innerHTML = days;
        }
    }else if(a==9){
        for(let i=1; i<=lastDay; i++){
            days = days + `<div>${i}</div>`;
            const monthDays = document.querySelector('.days9').innerHTML = days;
        }
    }else if(a==10){
        for(let i=1; i<=lastDay; i++){
            days = days + `<div>${i}</div>`;
            const monthDays = document.querySelector('.days10').innerHTML = days;
        }
    }else{
        for(let i=1; i<=lastDay; i++){
            days = days + `<div>${i}</div>`;
            const monthDays = document.querySelector('.days11').innerHTML = days;
        }
    }
    
}

