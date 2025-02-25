/**
 * 로그를 랜덤하게 생성한다.
 * @returns {string}
 */
export default function generateRandomLog(): string {
  const logMessages = [
    '사용자가 로그인 했습니다.',
    'API 호출 성공',
    '데이터베이스 연결 오류 발생',
    '새로운 주문이 생성되었습니다.',
    '세션이 만료되었습니다.',
    '파일 업로드가 완료되었습니다.',
    '주문 상태가 변경되었습니다.',
    '로그인 시도 실패',
    '서버에 예상치 못한 오류가 발생했습니다.',
    '사용자가 로그아웃 했습니다.',
    '비밀번호 변경 성공',
    '사용자가 프로필을 업데이트했습니다.',
    '회원가입 성공',
    '이메일 인증이 완료되었습니다.',
    '관리자가 시스템을 업데이트했습니다.',
    '사용자가 아이템을 장바구니에 추가했습니다.',
    '장바구니에서 아이템이 삭제되었습니다.',
    '결제 성공',
    '결제 실패 - 카드 정보 오류',
    '사용자가 패스워드를 잊어버리고 리셋을 요청했습니다.',
    '새로운 상품이 등록되었습니다.',
    '상품이 품절되었습니다.',
    '로그아웃 시도 실패 - 세션 만료',
    '파일 다운로드가 완료되었습니다.',
    '시스템 성능이 저조합니다.',
    'API 호출 지연 - 응답시간 초과',
    '서버가 재시작되었습니다.',
    '정기 백업이 완료되었습니다.',
    '사용자가 이메일을 변경했습니다.',
    '사용자가 두 단계 인증을 설정했습니다.',
    '시스템 보안 업데이트가 설치되었습니다.',
    '리소스가 부족하여 작업이 중단되었습니다.',
    '사용자가 다른 장치에서 로그인 했습니다.',
    '사용자가 비밀번호를 변경했습니다.',
    '서비스가 일시적으로 중단되었습니다.',
    '사용자가 댓글을 작성했습니다.',
    '댓글에 답글이 달렸습니다.',
    '사용자가 피드백을 제출했습니다.',
    '시스템에서 데이터가 누락되었습니다.',
    '특정 사용자에 대한 권한이 변경되었습니다.',
    '로그인 실패 - 비밀번호 오류',
    '권한이 없는 사용자가 접근을 시도했습니다.',
    '서버가 과부하로 인해 일부 요청을 처리하지 못했습니다.',
    '사용자가 아이템을 구독했습니다.',
    '아이템 구독 취소',
    '사용자가 고객 지원 티켓을 생성했습니다.',
    '고객 지원 티켓이 해결되었습니다.',
    '시스템에서 오류가 발생하여 작업이 중단되었습니다.',
    '서버가 성공적으로 업데이트되었습니다.',
    '보안 경고: 비정상적인 로그인 시도',
    'API 호출 중 오류가 발생했습니다.',
    '사용자가 자신의 계정을 삭제했습니다.',
    '시스템에서 데이터 복구가 완료되었습니다.',
    '서비스 장애가 해결되었습니다.',
  ];
  const randomMessage = logMessages[Math.floor(Math.random() * logMessages.length)];
  const now = new Date();
  const formattedDate = now.toISOString().slice(0, 19).replace('T', ' ');
  return `[${formattedDate}] ${randomMessage}`;
}
