// 1. HTML 요소 가져오기 (DOM 선택)
const introParagraph = document.getElementById('intro-paragraph');
const changeButton = document.getElementById('change-text-button');

// 2. 버튼 클릭 이벤트 리스너 추가
changeButton.addEventListener('click', function() {
    // 3. 버튼 클릭 시 실행될 함수 (로직)
    if (introParagraph.textContent === '웹 개발을 시작하는 초보 개발자입니다. 잘 부탁드립니다!') {
        introParagraph.textContent = '저는 배우는 것을 즐기며, 새로운 기술에 도전하는 것을 좋아합니다!';
        } else {
            introParagraph.textContent = '웹 개발을 시작하는 초보 개발자입니다. 잘 부탁드립니다!';
        }

        // 콘솔에 메세지 출력 (개발자 도구에서 확인 가능)
        console.log('소개 문단이 변경되었습니다!')
});

// 페이지 로드 시 콘솔에 메시지 출력
console.log('JavaScript 파일이 성공적으로 로드되었습니다.')