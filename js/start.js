const main = document.querySelector("#main");
const qna = document.querySelector("#qna");


function addAnswer(answerText, qIdx){
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
            children[i].style.WebketAnimation ="fadeOut 1s";
            children[i].style.animation ="fadeOut 1s";
        }

        setTimeout(() => {
            for(let i=0; i<children.length; i++){
                children[i].style.display = 'none';
            }
            goNext(++qIdx); /*질문증가해서 또 호출*/
        }, 450);
    }, false);
}

function goNext(qIdx){
    var q = document.querySelector(".qBox");
    q.innerHTML = qnaList[qIdx].q; 
    for(let i in qnaList[qIdx].a){
        addAnswer(qnaList[qIdx].a[i].answer, qIdx);
    }
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

