

function shareKakao() {
    Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: '나와 어울리는 꽃과 식물은?',
          description: '행복정원 MBTI 테스트',
          imageUrl:
            'https://github.com/yero2033/mbti/blob/master/img/main.png',
          link: {
            mobileWebUrl: 'https://developers.kakao.com',
            webUrl: 'https://developers.kakao.com',
          },
        },
        itemContent: {
          profileText: 'Kakao',
          profileImageUrl: 'https://github.com/yero2033/mbti/blob/master/img/share.png',
          titleImageUrl: 'https://github.com/yero2033/mbti/blob/master/img/share.png',
          titleImageText: '나와 어울리는 꽃과 식물은?',
          titleImageCategory: '행복정원 MBTI',

        },
        social: {
          likeCount: 10,
          commentCount: 20,
          sharedCount: 30,
        },
        buttons: [
          {
            title: '웹으로 이동',
            link: {
              mobileWebUrl: 'https://developers.kakao.com',
              webUrl: 'https://developers.kakao.com',
            },
          },
          {
            title: '앱으로 이동',
            link: {
              mobileWebUrl: 'https://developers.kakao.com',
              webUrl: 'https://developers.kakao.com',
            },
          },
        ],
      });
}