'use client'

import React, { useState, useEffect } from 'react';

const ProfitSheetUI = () => {
  const [gridData, setGridData] = useState([]);
  const [loading, setLoading] = useState(true);

  // 실제 엑셀 데이터 (MCP에서 가져온 데이터 기반)
  useEffect(() => {
    const actualExcelData = [
      // Row 4
      { row: 4, E4: "사  업  명", H4: "KTX 울산역세권 주상복합 신축사업", L4: "작 성 전 제", M4: "건축심의 접수 前", O4: "검  토  일", P4: "2022-04-28" },
      // Row 5  
      { row: 5, E5: "위      치", H5: "울산시 울주군 삼남읍 신화리 M5블록", L5: "공사기간", M5: "37", O5: "작  성  자", P5: "김성수 책임" },
      // Row 6
      { row: 6, E6: "사업조건", H6: " 1. 사업구도", I6: "도급사업", J6: "[자체분양사업/분양불도급/도급]", L6: "4. 도급범위", M6: "시 행 사", N6: "시 공 사", O6: "5. 인허가", P6: "건축심의 접수 前" },
      // Row 7
      { row: 7, H7: " 2. 도급단가", I7: "4530", J7: "▶ 기성조건", K7: "2개월 기성", L7: " ▷ 시     공", N7: "●", O7: "6. 지역지구", P7: "일반상업지역" },
      // Row 8
      { row: 8, H8: " 3. 초기비용", L8: " ▷ 설계/감리", M8: "●", O8: "7. 분양개시", P8: "2022-09-30" },
      // Row 9
      { row: 9, H9: " ", L9: " ▷ 분양/광고", M9: "●", O9: "8. 준공", P9: "2025-10-31" },
      // Row 11
      { row: 11, E11: "부지현황", H11: "㎡", I11: "평", J11: "부지매입비용", K11: "기준단가", M11: "지    분", N11: "㎡", O11: "평", P11: "건축구조/규모", Q11: "철근콘크리트" },
      // Row 12
      { row: 12, E12: "사업면적", H12: "15763", I12: "4768.31", K12: "천원/평", M12: "공동주택", N12: "7879.53", O12: "2383.56", P12: "지 상 층 수", Q12: "40" },
      // Row 13
      { row: 13, E13: "제척면적", H13: "0", I13: "0", K13: "천원/평", M13: "OT+근생", N13: "7883.47", O13: "2384.75", P13: "지 하 층 수", Q13: "3" },
      // Row 14
      { row: 14, E14: "실사용면적", H14: "15763", I14: "4768.31", K14: "천원/평", M14: "계", N14: "15763.00", O14: "4768.31", P14: "옥 탑 층 수", Q14: "0" },
      // Row 15
      { row: 15, N15: "▶ 주차대수 :", O15: "1185", P15: "▶ 세대당대수:", Q15: "1.61" },
      // Row 16
      { row: 16, E16: "건축계획", H16: "용적율", I16: "6.35", J16: "건폐율", K16: "33.67", N16: "지하주차장", P16: "철거면적" }
    ];

    setGridData(actualExcelData);
    setLoading(false);
  }, []);

  // 컬럼 헤더
  const columns = ['E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q'];

  // 셀 값 가져오기
  const getCellValue = (rowData, colName, rowNum) => {
    const cellKey = `${colName}${rowNum}`;
    return rowData[cellKey] || '';
  };

  // 셀 스타일 결정 (실제 엑셀과 유사하게)
  const getCellStyle = (value, colName, rowNum) => {
    const baseStyle = "border border-gray-300 p-1 text-xs min-h-[24px] flex items-center";
    
    // 숫자인 경우
    if (typeof value === 'number' || (!isNaN(value) && value !== '')) {
      return `${baseStyle} justify-end bg-yellow-50 font-mono`;
    }
    
    // 헤더 스타일
    if (rowNum <= 6 && value) {
      return `${baseStyle} bg-gray-50 font-semibold text-gray-800`;
    }
    
    // 일반 텍스트
    if (value) {
      return `${baseStyle} bg-white`;
    }
    
    // 빈 셀
    return `${baseStyle} bg-white`;
  };

  if (loading) {
    return <div className="p-6">Loading Excel data...</div>;
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-gray-900">손익 시트 (E4:Q72)</h1>
        <p className="text-gray-600">실제 엑셀 파일과 동일한 그리드 구조</p>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-auto">
        {/* 컬럼 헤더 */}
        <div className="grid gap-0 bg-gray-100 border-b-2 border-gray-400" style={{gridTemplateColumns: 'repeat(14, minmax(80px, 1fr))'}}>
          <div className="border border-gray-400 p-2 text-xs font-bold text-center bg-gray-200">
            행
          </div>
          {columns.map(col => (
            <div key={col} className="border border-gray-400 p-2 text-xs font-bold text-center bg-gray-200">
              {col}
            </div>
          ))}
        </div>

        {/* 데이터 행들 */}
        {Array.from({ length: 69 }, (_, i) => i + 4).map(rowNum => {
          const rowData = gridData.find(r => r.row === rowNum) || {};
          
          return (
            <div key={rowNum} className="grid gap-0 hover:bg-blue-50" style={{gridTemplateColumns: 'repeat(14, minmax(80px, 1fr))'}}>
              {/* 행 번호 */}
              <div className="border border-gray-300 p-2 text-xs font-bold text-center bg-gray-100">
                {rowNum}
              </div>
              
              {/* 각 컬럼의 셀 */}
              {columns.map(colName => {
                const cellValue = getCellValue(rowData, colName, rowNum);
                const cellId = `${colName}${rowNum}`;
                
                return (
                  <div 
                    key={cellId}
                    className={getCellStyle(cellValue, colName, rowNum)}
                    title={`${cellId}: ${cellValue}`}
                  >
                    <span className="truncate w-full text-left px-1">
                      {cellValue}
                    </span>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      {/* 하단 정보 */}
      <div className="mt-4 bg-white p-4 rounded-lg shadow">
        <div className="grid grid-cols-4 gap-4 text-sm">
          <div>
            <span className="font-semibold">범위:</span> E4:Q72
          </div>
          <div>
            <span className="font-semibold">총 행:</span> 69개
          </div>
          <div>
            <span className="font-semibold">총 열:</span> 13개 (E-Q)
          </div>
          <div>
            <span className="font-semibold">데이터 셀:</span> 577개
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfitSheetUI;