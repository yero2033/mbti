const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const endPoint = 9;
const select = [0, 0, 0, 0, 0, 0]; /*결과 담을 빈 배열*/


function calResult(){
    var result = select.indexOf(Math.max(...select)); /*최대값반환*/
    return result;
}


function setResult(){
    let point = calResult();
    const resultName = document.querySelector('.resultName');
    resultName.innerHTML = infoList[point].name;

    var resultImg = document.createElement('img');
    const imgDiv = document.querySelector('#resultImg');
    var imgURL = 'img/image-' + point + '.png';
    resultImg.src = imgURL;
    resultImg.alt = point;
    resultImg.classList.add('img-fluid');
    imgDiv.appendChild(resultImg);

    const resultDesc = document.querySelector('.resultDesc');
    resultDesc.innerHTML = infoList[point].desc;
}

function goResult(){
    qna.style.WebketAnimation ="fadeOut 1s";
    qna.style.animation ="fadeOut 1s";
    setTimeout(() => {
     result.style.WebketAnimation ="fadeIn 1s";
     result.style.animation ="fadeIn 1s";
     setTimeout(() => {
        qna.style.display="none";
        result.style.display ="block";
        }, 450) })
    setResult();
}

function addAnswer(answerText, qIdx, idx){
    var a = document.querySelector(".aBox");
    var answer = document.createElement('button');
    answer.classList.add('answerList');
    answer.classList.add('my-3');
    answer.classList.add('py-3');
    answer.classList.add('mx-auto');
    answer.classList.add('fadeIn');
    a.appendChild(answer);
    answer.innerHTML = answerText;
    answer.addEventListener("click", function(){ /*버튼 3개를 없애고 넘어가기*/
        var children = document.querySelectorAll('.answerList');
        for(let i=0; i<children.length; i++){/*어떤버튼을 눌러도 전부 지운다*/
            children[i].disabled = true;
            children[i].style.WebketAnimation ="fadeOut 0.5s";
            children[i].style.animation ="fadeOut 0.5s";
        }
        setTimeout(() => {
            var target = qnaList[qIdx].a[idx].type;
            for(let i=0; i<target.length; i++){
                select[target[i]] += 1;
            }
            for(let i=0; i<children.length; i++){
                children[i].style.display = 'none';
            }
            goNext(++qIdx); /*질문증가해서 또 호출*/
        }, 450)
    }, false);
}

function goNext(qIdx){
    if(qIdx == endPoint){//마지막 질문에서 더 넘어가려하면 결과 페이지로 이동
        goResult();
        return;
    }

    var n = document.querySelector(".qNum");
    n.innerHTML = qIdx+1;
    
    var q = document.querySelector(".qBox");
    q.innerHTML = qnaList[qIdx].q; 
    for(let i in qnaList[qIdx].a){
        addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
    }
    var status = document.querySelector('.statusBar');
    status.style.width = (100/endPoint)*(qIdx+1)+'%';
}

function begin(){
   main.style.WebketAnimation ="fadeOut 1s";
   main.style.animation ="fadeOut 1s";
   setTimeout(() => {
    qna.style.WebketAnimation ="fadeIn 1s";
    qna.style.animation ="fadeIn 1s";
    setTimeout(() => {
       main.style.display="none";
       qna.style.display ="block";
       }, 450);
       let qIdx = 0;
       goNext(qIdx);
   }, 450);

       //main.style.display = "none";
   // qna.style.display = "block";
}

