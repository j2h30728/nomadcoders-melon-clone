# Melon Contest Blueprint

## How to run?

- Open this folder on VSCode.
- Click on `View` -> `Terminal`.
- Run `npm i`.
- Start `mongodb`.
- Change the `COOKIE_SECRET` on the `.env` file.
- Run `npm run dev:server`.
- Open another terminal and run `npm run dev:assets`.

## How to deploy?

- Run `npm run build`.
- Run `npm start`.


## 스키마

#### 사용자
1. 이메일
2. 이름
3. 비밀번호
#### 음악
1. 제목
2. 가수
3. 장르
4. 재생수