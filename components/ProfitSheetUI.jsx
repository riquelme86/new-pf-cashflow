'use client'
import React from 'react';

export default function ExcelStyleProfitSheet() {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-lg border border-gray-400 overflow-auto">
        {/* Excel 스타일 테이블 */}
        <table className="w-full border-collapse" style={{ fontFamily: 'Arial, sans-serif', fontSize: '11px' }}>
          <tbody>
            {/* 행 4 - 사업명, 작성전제 등 */}
            <tr>
              <td className="border border-gray-400 bg-gray-200 text-center font-bold text-xs w-12 h-6">4</td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white min-w-20">사  업  명</td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white min-w-24"></td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white min-w-32" colSpan="3">
                KTX 울산역세권 주상복합 신축사업
              </td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white min-w-24"></td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white min-w-24">작 성 전 제</td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white min-w-32">건축심의 접수 前</td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white min-w-24"></td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white min-w-24">검  토  일</td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white min-w-32">2022-04-28</td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white min-w-24"></td>
            </tr>

            {/* 행 5 - 위치, 공사기간 등 */}
            <tr>
              <td className="border border-gray-400 bg-gray-200 text-center font-bold text-xs w-12 h-6">5</td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white">위      치</td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white"></td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white" colSpan="3">
                울산시 울주군 삼남읍 신화리 M5블록
              </td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white"></td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white">공사기간</td>
              <td className="border border-gray-400 px-2 py-1 text-xs text-right" style={{ backgroundColor: '#FFFF99' }}>37</td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white"></td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white">작  성  자</td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white">김성수 책임</td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white"></td>
            </tr>

            {/* 행 6 - 사업조건 */}
            <tr>
              <td className="border border-gray-400 bg-gray-200 text-center font-bold text-xs w-12 h-6">6</td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white">사업조건</td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white"></td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white">1. 사업구도</td>
              <td className="border border-gray-400 px-2 py-1 text-xs text-center" style={{ backgroundColor: '#FFFF99' }}>도급사업</td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white">[자체분양사업/분양불도급/도급]</td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white"></td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white">4. 도급범위</td>
              <td className="border border-gray-400 px-2 py-1 text-xs text-center bg-white">시 행 사</td>
              <td className="border border-gray-400 px-2 py-1 text-xs text-center bg-white">시 공 사</td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white">5. 인허가</td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white">건축심의 접수 前</td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white"></td>
            </tr>

            {/* 행 7 - 도급단가 */}
            <tr>
              <td className="border border-gray-400 bg-gray-200 text-center font-bold text-xs w-12 h-6">7</td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white"></td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white"></td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white">2. 도급단가</td>
              <td className="border border-gray-400 px-2 py-1 text-xs text-right" style={{ backgroundColor: '#FFFF99' }}>4530</td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white">▶ 기성조건</td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white">2개월 기성</td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white"> ▷ 시     공</td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white"></td>
              <td className="border border-gray-400 px-2 py-1 text-xs text-center bg-white">●</td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white">6. 지역지구</td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white">일반상업지역</td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white"></td>
            </tr>

            {/* 행 8 - 초기비용 */}
            <tr>
              <td className="border border-gray-400 bg-gray-200 text-center font-bold text-xs w-12 h-6">8</td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white"></td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white"></td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white">3. 초기비용</td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white"></td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white"></td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white"></td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white"> ▷ 설계/감리</td>
              <td className="border border-gray-400 px-2 py-1 text-xs text-center bg-white">●</td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white"></td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white">7. 분양개시</td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white">2022-09-30</td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white"></td>
            </tr>

            {/* 행 9 */}
            <tr>
              <td className="border border-gray-400 bg-gray-200 text-center font-bold text-xs w-12 h-6">9</td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white"></td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white"></td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white"></td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white"></td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white"></td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white"></td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white"> ▷ 분양/광고</td>
              <td className="border border-gray-400 px-2 py-1 text-xs text-center bg-white">●</td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white"></td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white">8. 준공</td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white">2025-10-31</td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white"></td>
            </tr>

            {/* 행 10 - 빈 행 */}
            <tr>
              <td className="border border-gray-400 bg-gray-200 text-center font-bold text-xs w-12 h-6">10</td>
              {Array.from({ length: 12 }, (_, i) => (
                <td key={i} className="border border-gray-400 px-2 py-1 text-xs bg-white"></td>
              ))}
            </tr>

            {/* 행 11 - 부지현황 헤더 */}
            <tr>
              <td className="border border-gray-400 bg-gray-200 text-center font-bold text-xs w-12 h-6">11</td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white">부지현황</td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white"></td>
              <td className="border border-gray-400 px-2 py-1 text-xs text-center bg-white">㎡</td>
              <td className="border border-gray-400 px-2 py-1 text-xs text-center bg-white">평</td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white">부지매입비용</td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white">기준단가</td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white"></td>
              <td className="border border-gray-400 px-2 py-1 text-xs text-center bg-white">지    분</td>
              <td className="border border-gray-400 px-2 py-1 text-xs text-center bg-white">㎡</td>
              <td className="border border-gray-400 px-2 py-1 text-xs text-center bg-white">평</td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white">건축구조/규모</td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white">철근콘크리트</td>
            </tr>

            {/* 행 12 - 사업면적 */}
            <tr>
              <td className="border border-gray-400 bg-gray-200 text-center font-bold text-xs w-12 h-6">12</td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white">사업면적</td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white"></td>
              <td className="border border-gray-400 px-2 py-1 text-xs text-right" style={{ backgroundColor: '#FFFF99' }}>15763</td>
              <td className="border border-gray-400 px-2 py-1 text-xs text-right" style={{ backgroundColor: '#CCE5FF' }}>4768.31</td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white"></td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white">천원/평</td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white"></td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white">공동주택</td>
              <td className="border border-gray-400 px-2 py-1 text-xs text-right" style={{ backgroundColor: '#CCE5FF' }}>7879.53</td>
              <td className="border border-gray-400 px-2 py-1 text-xs text-right" style={{ backgroundColor: '#CCE5FF' }}>2383.56</td>
              <td className="border border-gray-400 px-2 py-1 text-xs bg-white">지 상 층 수</td>
              <td className="border border-gray-400 px-2 py-1 text-xs text-center" style={{ backgroundColor: '#FFFF99' }}>40</td>
            </tr>
          </tbody>
        </table>

        {/* 컬럼 헤더 (A, B, C... 표시용) */}
        <div className="mt-4 p-2 bg-gray-50 text-xs text-gray-500">
          <p>Excel 스타일 재현 샘플 (E4~Q12 범위)</p>
          <p>노란색: 사용자 입력값, 파란색: 수식 계산값, 흰색: 고정값/텍스트</p>
        </div>
      </div>
    </div>
  );
}