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

$ run
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
