# Excel MCP 설치 및 설정 완료 보고서

**작업일자**: 2025년 1월 16일  
**작업자**: 현대엔지니어링 주택사업1본부  
**프로젝트**: PF 캐시플로우 SaaS 플랫폼 개발  

---

## 📋 작업 개요

Python 없이 Excel 파일을 직접 읽고 분석할 수 있는 Excel MCP(Model Context Protocol) 서버를 설치하고 설정했습니다.

---

## 🔧 주요 문제점 및 해결 과정

### 1. 초기 문제: 한글 파일명 인코딩 이슈

**문제상황**: 
- Windows 환경에서 한글 파일명(`클로드 mcp1_울산.xlsx`) 처리시 CP949/UTF-8 인코딩 충돌
- Python REPL에서 한글 경로 입력시 SyntaxError 발생
- PowerShell 출력에서 한글 깨짐 현상

**해결책**: 
- 임시방편: 영문 파일명으로 복사 (`ulsan_pf_model.xlsx`)
- 근본해결: Excel MCP 서버 도입으로 Python 의존성 제거

### 2. Excel MCP 서버 설치 과정

#### 2.1 Smithery를 통한 자동 설치
```bash
npx -y @smithery/cli install @negokaz/excel-mcp-server --client claude
```

#### 2.2 설치 중 발생한 문제들
1. **PowerShell 실행 정책 문제**
   - 증상: `npx` 명령어 실행 차단
   - 해결: CMD 환경에서 설치 진행

2. **Claude Desktop 설정 충돌**
   - 증상: "MCP excel: Server disconnected" 오류
   - 원인: 잘못된 패키지명과 중복 Excel 서버 설정

#### 2.3 설정 파일 수정
**파일 위치**: `C:\Users\ckdgm\AppData\Roaming\Claude\claude_desktop_config.json`

**수정 전** (문제가 있던 설정):
```json
{
  "excel": {
    "command": "npx",
    "args": ["-y", "@modelcontextprotocol/server-excel"], // 존재하지 않는 패키지
    "env": {
      "EXCEL_WORKING_DIRECTORY": "C:\\Users\\ckdgm\\Documents\\GitHub\\pf-cashflow\\new-pf-cashflow"
    }
  },
  "excel-mcp-server": {
    "command": "cmd",
    "args": ["/c", "npx", "-y", "@smithery/cli@latest", "run", "@negokaz/excel-mcp-server"] // 복잡한 실행 방식
  }
}
```

**수정 후** (정상 작동 설정):
```json
{
  "excel": {
    "command": "npx",
    "args": ["--yes", "@negokaz/excel-mcp-server"],
    "env": {
      "EXCEL_MCP_PAGING_CELLS_LIMIT": "4000",
      "EXCEL_WORKING_DIRECTORY": "C:\\Users\\ckdgm\\Documents\\GitHub\\pf-cashflow\\new-pf-cashflow"
    }
  }
}
```

#### 2.4 PowerShell 실행 정책 수정
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser -Force
```

#### 2.5 Excel MCP 패키지 수동 설치
```bash
npm install -g @negokaz/excel-mcp-server
```

---

## 📁 프로젝트 구조 정리

### 작업 디렉토리 변경
**기존**: `C:\Users\ckdgm\Documents\GitHub\pf-cashflow`  
**신규**: `C:\Users\ckdgm\Documents\GitHub\pf-cashflow\new-pf-cashflow` ✅

### new-pf-cashflow 폴더 구조
```
new-pf-cashflow/
├── .next/                    # Next.js 빌드 폴더
├── app/                      # Next.js App Router
├── components/               # React 컴포넌트
├── public/                   # 정적 파일
├── node_modules/             # 의존성
├── package.json              # 프로젝트 설정
├── tsconfig.json             # TypeScript 설정
├── next.config.ts            # Next.js 설정
├── PFX mcp1_ulsan_r3.xlsx   # 메인 PF 모델 파일 ✅
├── 클로드 mcp1_울산_r3.xlsx   # 작업용 파일
├── 울산역세권 M5 주상복합 손익_오리지널.xlsx  # 원본 파일
├── E4_Q9_셀분석결과.csv      # 분석 데이터
└── cell_analysis_data.txt    # 셀 분석 결과
```

---

## ✅ 최종 설치 결과

### Excel MCP 서버 상태
- **설치 상태**: ✅ 정상 설치 완료
- **연결 상태**: ✅ Claude Desktop과 정상 연결
- **작업 파일**: `PFX mcp1_ulsan_r3.xlsx`
- **기본 디렉토리**: `new-pf-cashflow`

### 인식된 Excel 시트 구조 (11개 시트)
1. **EXIT (시뮬)** - 범위: A1:AC30
2. **손익** - 범위: E1:AX88
3. **CASH FLOW** - 범위: A1:CD133 (3개 페이지로 분할)
4. **수입** - 범위: A1:BH249 (4개 페이지로 분할)
5. **PF상환 민감도** - 범위: A1:Y36
6. **보유세액** - 범위: A1:AB59
7. **면세비율** - 범위: A1:H31
8. **색상구분** - 범위: B3:E15
9. **셀정리** - 범위: A1:L26
10. **Sheet1** - 범위: A1 (빈 시트)
11. **Sheet3** - 범위: A1 (빈 시트)

### 사용 가능한 Excel MCP 기능
- ✅ 시트 정보 조회 (`excel_describe_sheets`)
- ✅ 시트 데이터 읽기 (`excel_read_sheet`)
- ✅ 셀 범위 지정 읽기
- ✅ 페이지네이션 지원 (대용량 데이터)
- ✅ 엑셀 파일 쓰기 (`excel_write_to_sheet`)
- ✅ 테이블 생성 (`excel_create_table`)
- ✅ 셀 서식 적용 (`excel_format_range`)
- ✅ 시트 복사 (`excel_copy_sheet`)

---

## 🔄 Excel MCP vs Python 비교 분석

### Excel MCP의 장점 (구조 파악용)
- **즉시 사용**: 코딩 없이 자연어로 질문
- **자동 구조 인식**: 시트별 데이터 범위 자동 감지
- **비개발자 친화적**: 복잡한 스크립트 작성 불필요
- **통합 워크플로우**: 채팅으로 질문 → 즉시 분석 → 결과 해석

**사용 시나리오**:
```
"CASH FLOW 시트에서 2024년 월별 수입 데이터 보여줘"
"분양률이 80%일 때 손익이 어떻게 변해?"
"PF 모델에서 분양수입이 어느 셀에서 계산돼?"
```

### Python의 장점 (개발용)
- **세밀한 제어**: 복잡한 계산 로직 정확 구현
- **대용량 처리**: 수십 개 PF 프로젝트 동시 분석
- **자동화**: 매월 자동 PF 모델 업데이트
- **SaaS 백엔드**: Next.js API 구현

**사용 시나리오**:
```python
# API에서 사용할 PF 계산
@app.post("/api/calculate-pf")
def calculate_pf_metrics(sales_rate, construction_cost):
    return {"npv": npv, "irr": irr, "payback": payback}
```

---

## 🎯 향후 활용 계획

### Phase 1: 구조 분석 (Excel MCP 활용)
- PF 모델 시트별 데이터 구조 파악
- 핵심 계산 로직 이해
- 시트 간 연결관계 분석
- 데이터 검증 및 이상값 탐지

### Phase 2: SaaS 개발 (Python + Next.js)
- MCP로 파악한 구조를 바탕으로 API 개발
- 실시간 PF 계산 엔진 구현
- 대시보드 데이터 처리 로직
- 자동화된 리포팅 시스템

### 최적 작업 흐름
1. **Excel MCP**로 빠른 정보 수집 및 구조 파악
2. **Python**으로 정교한 계산 로직 구현
3. **Next.js**에서 사용자 인터페이스 개발

---

## 🛠 기술 스택 정리

### MCP 서버 구성
- **Excel MCP**: `@negokaz/excel-mcp-server`
- **Desktop Commander**: 파일 시스템 접근
- **GitHub MCP**: 소스 코드 관리
- **Context7 MCP**: 라이브러리 문서 참조

### 개발 환경
- **Frontend**: Next.js 15 + TypeScript + Tailwind CSS
- **Backend**: Next.js API Routes + Python 계산 엔진
- **데이터베이스**: 향후 결정 (PostgreSQL 검토 중)
- **배포**: Vercel (예정)

---

## 📝 작업 완료 체크리스트

- [x] Excel MCP 서버 설치
- [x] Claude Desktop 설정 파일 수정
- [x] PowerShell 실행 정책 수정  
- [x] 패키지 수동 설치
- [x] 작업 디렉토리를 new-pf-cashflow로 변경
- [x] PFX mcp1_ulsan_r3.xlsx 파일 인식 확인
- [x] 11개 시트 구조 파악 완료
- [x] Excel MCP 기능 테스트 완료
- [x] 문서화 완료

---

## 🎉 결론

**Excel MCP 설치 및 설정이 성공적으로 완료되었습니다!**

이제 Python 코딩 없이도 자연어로 PF 모델 분석이 가능하며, 향후 SaaS 플랫폼 개발 시 구조 파악과 개발을 효율적으로 분리하여 진행할 수 있습니다.

**다음 단계**: PF 모델의 핵심 계산 로직 분석 및 SaaS 요구사항 정의

---

*문서 작성: 2025-01-16*  
*최종 업데이트: 2025-01-16*