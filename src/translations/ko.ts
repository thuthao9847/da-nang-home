import { en } from './en'
export const ko = {
  navigation: {
    home: '홈',
    about: '회사 소개',
    contact: '문의하기',
    sale: '매물 판매',
    rent: '매물 임대',
    apartment: '아파트',
    villa: '빌라',
    house: '주택',
    land: '토지',
    office: '오피스',
    commercial: '상가'
  },
  home: {
    hero: {
      title: '베트남에서 꿈의 집을 찾아보세요',
      subtitle: '베트남 전역의 럭셔리 빌라, 모던 아파트, 상업 공간을 만나보세요',
      search: {
        title: '매물 검색',
        propertyType: '매물 유형',
        location: '지역',
        button: '검색',
        placeholder: '지역 또는 유형으로 검색'
      }
    },
    featured: { title: '추천 매물', subtitle: '엄선된 프리미엄 매물', viewAll: '전체 보기' },
    categories: {
      title: '유형별 둘러보기',
      subtitle: '다양한 유형 중에서 원하는 매물을 찾아보세요',
      apartment: { title: '아파트', description: '전망 좋은 현대적 공간', count: '234 매물' },
      villa: { title: '빌라', description: '개인 수영장이 있는 럭셔리 주택', count: '234 매물' },
      house: { title: '주택', description: '가족에게 안성맞춤', count: '234 매물' },
      office: { title: '오피스', description: '전문적인 업무 공간', count: '234 매물' },
      commercial: { title: '상가', description: '비즈니스 최적 입지', count: '234 매물' }
    },
    howWeHelp: {
      title: '우리가 도와드립니다',
      subtitle: '신뢰할 수 있는 부동산 파트너',
      buying: '구매',
      rating: '평가',
      selling: '판매',
      affordTitle: '예산 범위 계산',
      affordDescription: '예산 범위를 추정하고 구매자 프로필에 저장하세요.',
      costsTitle: '월별 비용 이해',
      costsDescription: '주택담보대출 상환액과 주거 관련 비용을 계산합니다.',
      paymentTitle: '다운페이 지원',
      paymentDescription: '다운페이 지원 프로그램과 금융 옵션을 안내합니다.',
      learnMore: '자세히 보기',
      spotlightText: '특별한 매물을 전문가 마케팅으로 돋보이게 하시겠어요?',
      letsChat: '상담하기',
      steps: {
        search: { title: '매물 검색', description: '선별된 매물을 둘러보세요' },
        tour: { title: '방문 예약', description: '전문 에이전트와 함께 방문' },
        purchase: { title: '거래 진행', description: '구매 전 과정 지원' }
      }
    }
  },
  sale: {
    title: '매물 판매',
    subtitle: '베트남에서 꿈의 매물을 찾아보세요',
    filters: { title: '필터', propertyType: '매물 유형', location: '지역', allProperties: '전체 매물', allLocations: '전체 지역' },
    noResults: '조건에 맞는 매물이 없습니다.',
    propertyDetails: { bedrooms: '침실', bathrooms: '욕실', area: 'm²', viewDetails: '자세히 보기', addToFavorites: '즐겨찾기 추가', removeFromFavorites: '즐겨찾기 해제' }
  },
  rent: {
    title: '매물 임대',
    subtitle: '베트남에서 이상적인 임대 매물을 찾아보세요',
    filters: { title: '필터', propertyType: '매물 유형', location: '지역', allProperties: '전체 매물', allLocations: '전체 지역' },
    noResults: '조건에 맞는 매물이 없습니다.',
    propertyDetails: { bedrooms: '침실', bathrooms: '욕실', area: 'm²', viewDetails: '자세히 보기', addToFavorites: '즐겨찾기 추가', removeFromFavorites: '즐겨찾기 해제', pricePerMonth: '월' }
  },
  about: {
    title: '회사 소개',
    subtitle: '베트남의 신뢰받는 부동산 파트너',
    intro: { title: '회사 소개', description: '우리는 베트남의 선도적 부동산 중개사로서, 럭셔리 주택, 아파트 및 상업용 부동산에 특화되어 있습니다.' },
    mission: { title: '미션', description: '정직과 전문성을 바탕으로 최고의 서비스를 제공합니다.' },
    values: { title: '핵심 가치', items: [ { title: '정직', description: '높은 윤리 기준으로 업무 수행' }, { title: '탁월함', description: '모든 분야에서 탁월함 추구' }, { title: '고객 중심', description: '고객의 만족을 최우선' }, { title: '혁신', description: '새로운 기술과 방법 도입' } ] },
    team: { title: '팀 소개', subtitle: '경험 많은 전문가', description: '최고의 부동산 경험을 제공합니다.' }
  },
  contact: {
    title: '문의하기',
    subtitle: '매물 또는 서비스에 대해 문의하세요',
    info: { title: '연락처', address: { label: '주소', value: '123 Nguyen Van Linh, Da Nang, Vietnam' }, phone: { label: '전화', value: '+84 123 456 789' }, email: { label: '이메일', value: 'info@dananghome.com' }, hours: { label: '영업시간', weekdays: '월–금: 9:00–18:00', saturday: '토: 9:00–13:00', sunday: '일: 휴무' } },
    form: { title: '메시지 보내기', name: { label: '이름', placeholder: '이름 입력' }, email: { label: '이메일', placeholder: '이메일 입력' }, phone: { label: '전화번호', placeholder: '전화번호 입력', optional: '선택 사항' }, message: { label: '메시지', placeholder: '메시지를 입력하세요...' }, submit: '보내기', sending: '전송 중...', success: '메시지가 전송되었습니다. 곧 연락드리겠습니다.', error: '전송 실패. 다시 시도하세요.' }
  },
  categories: { title: '유형별 둘러보기', subtitle: '다양한 유형 중에서 선택하세요', apartment: { title: '아파트', count: '234 매물' }, villa: { title: '빌라', count: '234 매물' }, studio: { title: '스튜디오', count: '234 매물' }, office: { title: '오피스', count: '234 매물' }, townhouse: { title: '타운하우스', count: '234 매물' }, commercial: { title: '상가', count: '234 매물' } },
  properties: { title: '추천 매물', subtitle: '베트남 전역의 프리미엄 매물', viewDetails: '자세히 보기', beds: '침실', baths: '욕실', area: 'm²' },
  howWeHelp: {
    title: '우리가 도와드립니다',
    subtitle: '신뢰할 수 있는 부동산 파트너',
    buying: '구매',
    rating: '평가',
    selling: '판매',
    affordTitle: '예산 범위 계산',
    affordDescription: '예산 범위를 추정하고 구매자 프로필에 저장하세요.',
    costsTitle: '월별 비용 이해',
    costsDescription: '주택담보대출 상환액과 주거 관련 비용을 계산합니다.',
    paymentTitle: '다운페이 지원',
    paymentDescription: '다운페이 지원 프로그램과 금융 옵션을 안내합니다.',
    learnMore: '자세히 보기',
    spotlightText: '특별한 매물을 전문가 마케팅으로 돋보이게 하시겠어요?',
    letsChat: '상담하기'
  },
  detail: { common: { descriptionTitle: '매물 상세', amenitiesTitle: '편의시설 및 특징', similarTitle: '유사 매물', contactAgent: '에이전트 문의', beds: '침실', baths: '욕실', area: 'm²', garage: '주차', built: '준공', pricePerMonth: '월' } },
  footer: { about: { title: '회사 소개', description: '다낭에서 이상적인 매물을 찾을 수 있도록 돕습니다.' }, contact: { title: '문의', address: { label: '주소', value: '123 Nguyen Van Linh, Da Nang, Vietnam' }, phone: { label: '전화', value: '+84 123 456 789' }, email: { label: '이메일', value: 'info@dananghome.com' }, hours: { label: '영업시간', weekdays: '월–금: 9:00–18:00', saturday: '토: 9:00–13:00', sunday: '일: 휴무' } }, quickLinks: { title: '빠른 링크', links: [ { name: '회사 소개', href: '/about' }, { name: '매물 판매', href: '/sale' }, { name: '매물 임대', href: '/rent' }, { name: '문의하기', href: '/contact' } ] }, newsletter: { title: '뉴스레터', description: '최신 매물과 시장 소식을 받아보세요.', placeholder: '이메일 주소', button: '구독', success: '구독해주셔서 감사합니다!', error: '구독 실패. 다시 시도하세요.' }, social: { title: '소셜 미디어', facebook: 'Facebook 팔로우', instagram: 'Instagram 팔로우', linkedin: 'LinkedIn 팔로우', youtube: 'YouTube 팔로우' }, copyright: '© {year} Da Nang Home. 판권 소유.' },
  advancedFilter: {
    title: '고급 검색',
    priceFrom: '가격 시작',
    to: '부터',
    sizeFrom: '면적 시작',
    location: '지역',
    bedsAny: '침실: 무관',
    bathsAny: '욕실: 무관',
    rooms: '객실',
    amenities: '편의시설',
    cancel: '취소',
    apply: '필터 적용',
    ariaMin: '최소값',
    ariaMax: '최대값'
  },
}
