const startBtn = document.querySelector('#start-btn');
const resetBtn = document.querySelector('.reset-btn');
let hour = document.querySelector('.hour');
let min = document.querySelector('.min');
let sec = document.querySelector('.sec');
let isTimerStart = false;
let interval;
let leftTime = sec.innerHTML;
startBtn.addEventListener('click',(e)=>{
    toggleBtn(isTimerStart);
    if(isTimerStart){
        isTimerStart=false;
        clearInterval(interval);
    }else{
        console.log("시작");
        startTimer();
        isTimerStart = true;
    }
});

resetBtn.addEventListener('click',(e)=>{
    console.log("리셋");
    sec.innerHTML = 10;
    leftTime = 10;
});

function startTimer(){
    interval = setInterval(()=>{
        console.log(leftTime);
        sec.innerHTML = setNumber(leftTime);
        if(leftTime < 0){
            alert("Time out");
            sec.innerHTML = setNumber(0);
            toggleBtn(isTimerStart);
            isTimerStart = false;
            clearInterval(interval);
        }
        leftTime--;
    },1000);
}

function setNumber(num){
    if(num.toString().length < 2){
        return '0' + num;
    }else{
        return num;
    }
}

function toggleBtn(isTimerStart){
    if(isTimerStart){//퍼즈 버튼 눌림
        startBtn.classList.remove('pause-btn');
        startBtn.classList.add('start-btn');
        startBtn.innerHTML = "START";
    }else{//시작 버튼 눌림
        startBtn.classList.remove('start-btn');
        startBtn.classList.add('pause-btn');
        startBtn.innerHTML = "PAUSE";
    }
}