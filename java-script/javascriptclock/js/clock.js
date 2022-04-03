let textinfo = prompt("Lütfen adınızı giriniz : ");

document.querySelector('#myName').innerText = textinfo;

function showTime() {
    let date = new Date();
    let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    
    document.querySelector('#myClock').innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${days[date.getUTCDay()]}`;
    let time = setInterval(showTime, 1000);
}

showTime();




