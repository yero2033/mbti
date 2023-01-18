
/*
    var pointArray = [
  선인장, 0
  율마, 1
  틸란, 2
  수국, 3
  허브, 4
  드라이프라워, 5
  ]
*/



const qnaList = [
  {
    q: '1. 이성 사이에 진정한 친구는 있다, 없다?',
    a: [
      { answer: 'a. 이성 사이에 친구가 어딨어? 절대 없어', type: [1, 2, 4 ] },
      { answer: 'b. 친구 있지, 절대 이성으로만 안 보일뿐', type: [0, 5] },
      { answer: 'c. 난 잘 모르겠어..', type: [3] },
    ]
  },
  {
    q: '2. 좋아하는 사람이 생겨 연락하고자 한다 ',
    a: [
      { answer: 'a. 바로 먼저 연락한다.', type: [0, 3, 2] },
      { answer: 'b. 언제 연락할지, 어떻게 말할지 심사숙고하여 연락한다.', type: [1, 5 ] },
      { answer: 'c. 상대방에게 먼저 연락 올 때까지 기다린다.', type: [4] },
    ]
  },
  {
    q: '3. 당신의 고백 스타일은?',
    a: [
      { answer: 'a. 호감이 보이면 바로 고백한다', type: [1, 3, 2] },
      { answer: 'b. 상대방이 고백할 때까지 기다린다', type: [0, 5] },
      { answer: 'c. 완벽한 분위기, 완벽한 타이밍에서 고백한다.', type: [4] }
    ]
  },
  {
    q: '4. 호감가는 고백 멘트를 고른다면?',
    a: [
      { answer: 'a. 박력 그 자체, "야 나랑 사귀자" ', type: [1, 2, 4 ] },
      { answer: 'b. 섬세한 "나 너 많이 좋아해, 나랑 사귈래?" ', type: [0, 3] },
      { answer: 'c. 센스있는 "우리 내일은 연인으로 만날까요" ', type: [5 ] },
    ]
  },
  {
    q: '5. 오늘 연인과 첫 데이트 하는 날이다. 첫 날 허용할 수 있는 스킨십의 범위는?',
    a: [
      { answer: 'a. 쑥스러워.. 손 잡기 정도??', type: [1 ,4 ] },
      { answer: 'b. 요즘 시대가 어느 때인데, 가벼운 뽀뽀까지 가능이야', type: [0, 3]},
      { answer: 'c. 어차피 내 연인인데 왜?? 모든 스킨십 다 돼!', type: [2, 5] },
    ]
  },

  {
    q: '6. 기념일이 다가온다. 당신은 어떻게 할 것인가? (ex - 100, 200일)',
    a: [
      { answer: 'a. 무슨 기념일이야, 그냥 평소처럼 해', type: [4, 5 ] },
      { answer: 'b. 맛있는 밥이나 사줄까? 아니면 꽃이라도?', type: [0, 3 ] },
      { answer: 'c. 이미 깜짝 이벤트 다 준비해놨어', type: [1, 2] },
    ]
  },
  {
    q: '7. 연인이 오늘 머리를 바꾸고 옷도 새로 샀다',
    a: [
      { answer: 'a. 눈치 못 채고 그냥 있는다', type: [1 ] },
      { answer: 'b. 눈치는 채나 말은 꺼내지 않는다', type: [2, 4 ] },
      { answer: 'c. "오 대박 오늘 머리도 바꾸고 옷도 새로 샀네?"라고 하며 단번에 눈치챈다', type: [0, 3, 5 ] },
    ]
  },
  {
    q: '8. 연인이 데이트가 끝난 후, 집에 데려다 달라고 한다',
    a: [
      { answer: 'a. 각자 만났던 장소에서 헤어진다.', type: [0, 4 ] },
      { answer: 'b. 연인이 살고 있는 집의 역이나 정류장까지 데려다준다.', type: [3, 2] },
      { answer: 'c. 집 앞까지 데려다준다.', type: [1, 5 ] },
    ]
  },
  {
    q: '9. 연인에게 하루종일 연락이 안 온다..',
    a: [
      { answer: 'a. 뭐.. 언젠가 연락 오겠지. 내가 할 일 하며 기다린다', type: [0, 5] },
      { answer: 'b. 초조해서 마음 졸이며 인스타, 페북, 카톡 등 모든 SNS 다 들어가본다.', type: [1] },
      { answer: 'c. 연인에게 연락 올 때까지 무한 카톡, 무한 전화', type: [2, 3, 4 ] },
    ]
  },
  {
    q: '10. 연인이 연락도 없이 보고싶다고 우리집 앞에 와서 기다린다. ',
    a: [
      { answer: 'a. 아니 갑자기 오면 어떡해.. 하 나 준비도 안 했는데 왜 와. 짜증나네', type: [4, 2] },
      { answer: 'b. 아 그래?? 나 할 것들 좀만 마무리하고 나갈게', type: [0, 1] },
      { answer: 'c. 헐 대박, 어디야?? 당장 나갈게!', type: [5, 3 ] },
    ]
  },
  {
    q: '11. 내가 추구하는 연애관은? ',
    a: [
      { answer: 'a. 각자 할 것 하며, 평안하고 안정적인 연애가 좋다.', type: [1, 4] },
      { answer: 'b. 보고싶을 때 보고, 데이트도 많이 하고 꽁냥꽁냥하는 연애가 좋아.', type: [0, 5] },
      { answer: 'c. 연애는 마음가는대로! 불타오르는 연애가 최고지.', type: [2, 3] },
    ]
  },
  {
    q: '12. 연인과 데이트 도중 화를 참을 수 없을만큼 심하게 싸웠다. 어떻게 할 것인가?',
    a: [
      { answer: 'a. "아 화나네. 따라오지마 오늘 집 갈 거니까." 라고 말하며 집으로 간다.', type: [3, 4] },
      { answer: 'b. "야! 너 화내지마. 너 잘못이지. 내가 뭘 잘못했는데?" 소리지르며 끝까지 불같이 화낸다.', type: [0, 2] },
      { answer: 'c. "아니 그건 아니고, 하.." 조용히 운다.', type: [1, 5] },
    ]
  }
]

const infoList = [
  {
    name: '눈에 띄진 않지만 꾸준한 관심이 필요한 <선인장>',
    desc: '혼자서도 알아서 잘 지내는 타입의 당신! 하지만, 관심이 아예 필요 없는 것은 아니에요. 잘 지내는 것 같다고 눈에 담지 않으면 조금씩 상처받기도 한답니다. 알아차리기 쉽지 않아서 꾸준히 살펴봐야 알 수 있어요. 그렇다고 한꺼번에 관심을 퍼붓게 되면 과부하가 걸리고 말죠. 매일 부담스럽지 않은 시선과 관심을 준다면 어느 날 예쁜 꽃을 피울 거예요.'
  },
  {
    name: '상큼한 피톤치드 향 뿜뿜, 칭찬에 예민한 <율마>',
    desc: '칭찬을 정말 좋아하는 당신! 누군가가 격려를 해주거나 관심을 주면 바로 쌩쌩해져요. 조금이라도 소홀하면 금방 시들어버리지만 율마의 상큼한 피톤치드향은 상대에게도 행복한 에너지를 선물한답니다. 긍정적인 피드백을 주는 것이 제일 중요하겠죠?'
  },
  {
    name: '다재다능하고 의젓해서 의지가 되는 <틸란>',
    desc: '알아서 뭐든지 척척 스스로 잘하는 당신! 남에게 힘이 되어주는 의젓한 타입이랍니다. 그렇다고 너무 다 의지하게 되면 어느 날 갑자기 지칠 수 있으니 틸란도 만능이 아님을 명심해야 해요. 고맙고 든든하다는 인정을 받을 때 큰 성장을 해요.'
  },
  {
    name: '화려하고 주목받는 것을 좋아하는 <수국>',
desc: '화려한 것과 성과를 중시하는 당신! 호기심이 많고 여러 상황에서 자신과 재능을 나타내고 싶은 욕구가 많아요. 누구보다 화려하고 매력 있지만, 남보다 앞서고 싶은 마음 때문에 가끔 놓치는 것이 생기곤 해요. 잠깐 멈추는 때를 아는 지혜를 배운다면 다음에도 화려한 꽃을 피울 수 있을 거예요.'
  },
  {
    name: '주변에 사람이 끊이지 않는 인기쟁이 <허브>',
desc: '언제나 인기가 많은 당신! 남의 어려움을 빠르게 알아채고 배려하면서 행동하는 습관이 몸에 배어 있어요. 타인을 위하는 것은 세상에 선한 영향력을 가져다주지요. 하지만, 보살핌을 제대로 받지 않으면 가장 약한 식물이기도 하답니다. 허브에게도 자신의 인생이 있음을 기억해야 하겠죠?'
  },
  {
    name: '늦지만 큰 결실을 이루는 대기만성형 <드라이플라워>',
desc: '인내와 성실함이 장점인 당신! 남들이 앞서 나갈 때는 특출나지 않지만, 나중에서야 큰 결실을 이루게 되는 타입이랍니다. 남들보다는 그 시기가 늦을 수 있지만, 큰일은 바로 이루어지지 않는 법이죠. 꾸준함을 포기하지 않으면 언젠가 그 노력이 빛을 볼 때가 있을 거예요.'
  }
]