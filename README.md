# Lerna Tutorial

테스트 방법

```sh
> npm install
> lerna clean # node_modules 제거
> lerna bootstrap # 각각의 폴더에서 npm run install 하는 것과 동일
> lerna bootstrap --hoist # 공통 패키지는 root에 설치
```

제일 중요한 명령어는 `lerna bootstrap --hoist` 이며, 공통 패키지를 root에서 관리할 수 있게 해준다.

