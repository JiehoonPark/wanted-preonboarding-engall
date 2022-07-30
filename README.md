# 원티드 프리온보딩 5차 과제 - schedule

## 1. 소개

- 원티드 프리온보딩 5기 4-2 기업 과제
- schedule 페이지 만들기 + schedule 추가 기능 만들기
- 기간 : 2022/07/28 ~ 2022/07/29

<br>

## 2. 사용법

```shell
# with yarn
# install
$ yarn install

# run json-server
$ yarn server

# run
$ yarn start
```

<br>

## 3. 기술 스택

- React
- Typescript
- react-query
- axios
- styled-components
- date-fns
- json-server
- react-icons

<br>

## 4. 프로젝트 구조

```
root
├──data
│   └── db.json
│
├──public
│   ├── images
│   │    ├── logo.png
│   │    └── AiFillCaretDown.svg
│   └── index.html
│
├──src
│   ├── api
│   │    └── schedules.ts
│   │
│   ├── components
│   │    ├── common
│   │    │     ├── Buttons.tsx
│   │    │     ├── CheckBox.tsx
│   │    │     ├── Modal.tsx
│   │    │     ├── PageBox.tsx
│   │    │     ├── RadioBox.tsx
│   │    │     ├── ScrollTopButton.tsx
│   │    │     ├── Select.tsx
│   │    │     └── Title.tsx
│   │    ├── form
│   │    │     ├── StartTime.tsx
│   │    │     └── WeekCheckBox.tsx
│   │    ├── layout
│   │    │     └── Layout.tsx
│   │    └── schedule
│   │          ├── ScheduleDayBox.tsx
│   │          ├── ScheduleTimeBox.tsx
│   │          └── ScheduleWeeklyBox.tsx
│   │
│   ├── constants
│   │     ├── day.ts
│   │     └── time.ts
│   │
│   ├── hooks
│   │     └── useQueries.ts
│   ├── pages
│   │     ├── ScheduleForm.tsx
│   │     └── WeeklySchedule.tsx
│   ├── routes
│   │     └── Router.tsx
│   ├── styles
│   │     ├── GlobalStyle.ts
│   │     └── theme.ts
│   ├── types
│   │     └── schedule.ts
│   ├── utils
│   │     ├── checkDuplication.ts
│   │     ├── checkEmpty.ts
│   │     ├── getTime.ts
│   │     ├── reverseGetTime.ts
│   │     ├── scrollTop.ts
│   │     └── sortedDataByDayOfWeek.ts
│   ├── App.tsx
│   └── index.tsx
```

### 폴더 구조

- 코드의 사용 목적에 따라 폴더 구조를 분리했습니다.
- 코드의 가독성, 재사용성을 높일 수 있는 방법을 고민해 컴포넌트 내부에서 길어진 코드는 utils, constants 폴더로 분리했습니다.
- components/common: 재사용성이 높은 컴포넌트들은 외부로 분리한 후 import 해 사용합니다.
- constants: 재사용성이 높은 상수는 constants 폴더 하위로 분리해 import 해 사용합니다.
- utils: 라이브러리를 사용하거나 직접 작성한 함수, 데이터 가공 함수 등의 로직을 분리합니다.

<br>

## 5. 구현

### db.json

- json-server 를 이용해 db를 가동합니다.
- 요청 url은 `http://localhost/4000/schedules` 입니다.
- 개별적인 schedule 데이터는 id (number), day(string), time(string)을 가집니다.
- id 값을 기준으로 get, delete 요청이 간편하게 이루어질 수 있도록 아래와 같은 구조를 구상했습니다.

```js
{
  "schedules": [
    {
      "id": 11,
      "day": "Thu",
      "time": "02:30"
    },
    {
      "id": 12,
      "day": "Fri",
      "time": "02:30"
    },
   // ...
  ]
}
```

<br>

### 고민했던 점들

1. 클래스 추가 페이지 (ScheduleForm.tsx)

   - 컴포넌트의 재사용성을 높이기 위해 고민해서, 반복되는 요소를 구현한 후 props로 꼭 필요한 부분만 커스텀해 사용합니다.

2. 렌더링 최적화: useRef를 활용해 불필요한 렌더링을 줄였습니다.

   - input 창이 많은 입력 폼의 특성상, state를 사용해 값을 입력받으면 불필요한 렌더링 발생이 많아질 수 있습니다.
   - 이 점을 사전에 고려해, 렌더링 최적화를 위해 useRef를 사용했습니다.

<br>

## 구현 결과

### 전체 스케줄 페이지

- pages/WeeklySchedule.tsx
<div align="center">
  <img height="250px" src="https://user-images.githubusercontent.com/87647245/181867647-9536f6ff-c6b6-4260-b8da-2c7cbbc82c67.png"/>
  <img height="250px" src="https://user-images.githubusercontent.com/87647245/181867644-f6d8ce6e-8fe8-4450-b14d-6c61ed805c03.png"/>
</div>

- 우측 상단의 버튼을 클릭하면 [클래스 추가 페이지](###-클래스-추가-페이지)로 이동합니다.
- 개별 스케줄을 삭제하는 경우, 컨펌창을 띄워 사용자에게 한번 더 확인을 받습니다.

<br>

### 클래스 추가 페이지

- pages/ScheduleForm.tsx
<div align="center">
  <img height="280px" src="https://user-images.githubusercontent.com/87647245/181867639-321b54b8-b4e6-4289-aa5c-a2a598b76d5e.png"/>
  <img height="280px" src="https://user-images.githubusercontent.com/87647245/181867642-65d270c2-f41d-4908-a4e8-fb7c2dc61c8c.png"/>
</div>

- 시간은 00부터 11까지, 분은 00부터 55까지 5분 단위로 선택 가능합니다.
- AM과 PM 버튼은 중복선택이 불가능한 radio type 입니다.
- 요일은 다중 선택 가능한 checkbox type 입니다. 선택한 요일은 진한 검정색이 됩니다.

<br>

#### Submit: 중복되는 클래스 처리하기

<div align="center">
  <img height="280px" src="https://user-images.githubusercontent.com/87647245/181867643-3ce8bb62-1253-47ec-bcbb-db00b102f198.png"/>
  <img height="280px" src="https://user-images.githubusercontent.com/87647245/181867645-1bd82d37-7d29-421c-a862-c062ad6361cb.png"/>
</div>

- Submit 버튼을 클릭하면
  1. 선택한 요일에 **중복되는 스케줄이 있는** 경우, 선택한 요일들 중 중복되는 요일이 언제인지 사용자에게 alert 창을 띄워 알려줍니다.
  2. 선택한 요일에 **중복되는 스케줄이 없는** 경우, 서버에 post 요청을 전송하고 전체 스케줄 화면으로 이동합니다.

<br>

### 전체 페이지 반응형 UI 구현

<div align="center">
  <img height="200px" src="https://user-images.githubusercontent.com/87647245/181867649-f928ad68-f83c-43bf-96f2-afb35c4c2f65.png"/>
  <img height="200px" src="https://user-images.githubusercontent.com/87647245/181867648-0f2c40fe-46da-4925-ac2f-d668aa071b12.png"/>
  <img height="200px" src="https://user-images.githubusercontent.com/87647245/181867647-9536f6ff-c6b6-4260-b8da-2c7cbbc82c67.png"/>
</div>

- CSS의 flex 속성을 활용해 요일별 스케줄에 적절한 UI를 구현했습니다.
