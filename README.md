# mz-lang

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fneordinary%2Fmz-lang&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)

mz랭은 유튜브 컴공선배 팀과 장안의 화제인 [엄랭](https://github.com/rycont/umjunsik-lang)의 킹갓제너럴대준식 개발자 [@RyCont](https://github.com/rycont)와 함께 작업한 언어입니다.
</br> (만들고 나니 mz랭이라는 이름이 안 어울리는 것 같습니다. [유튜브 영상 댓글]로 이름 추천 받습니다.)

[0️⃣ 유튜브 컴공선배 영상 보고 구독하기](https://www.youtube.com/@comgongbro)

## Contributors ✨
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
엄랭을 모티브로한 MZ랭입니다. https://github.com/rycont/umjunsik-lang
</br> Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/happbob"><img src="https://avatars.githubusercontent.com/u/54854764?v=4?s=100" width="100px;" alt="Minseo Lim"/><br /><sub><b>Minseo Lim</b></sub></a><br /><a href="https://github.com/neordinary/mz-lang/commits?author=happbob" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

# 문법

개어렵습니다.
</br>모든 프로그램은 "인녕하세요."로 시작하며, 항상 "드림."으로 끝나야 합니다.

## 자료형

정수: '^'과 '~'의 갯수로 나타냅니다. '^'의 갯수만큼 1을 더하며, '~'의 갯수만큼 1을 뺍니다.

```
^^^ => 3
^^ => 2
~~ => -2
~~~ => -3
~^^~ => 0
```

## 연산자

- 1 증가: `^`
- 1 감소: `~`
- 곱하기: `@`

```
^^ -> 2
~~ -> -2
~^^~ -> 0
^^@^^ -> 4
~~@^^ -> -4
^^^@^^^@^^^ -> 27
```

## 변수

변수는 인덱싱(정수)을 통해 접근하고 대입할 수 있습니다. 지정하지 않았을경우 모든 변수의 기본값은 0입니다.

### 대입(넹)

연음의 갯수번째 변수에 뒤에 오는 수를 대입합니다

```
네네넹 => 3번째 변수에 0 지정
네넹 => 2번째 변수에 0 지정
넹^^ => 1번째 변수에 2 지정
네넹^ => 2번째 변수에 1 지정
넹~~~ => 1번째 변수에 -3 지정
```

### 사용(네)

연음의 갯수번째 변수를 불러옵니다

```
네 => 1번째 변수
네네 => 2번째 변수
네네네 => 3번째 변수
```


## 콘솔

### 넵, 알겠습니다.

콘솔에 정수를 출력합니다. `넵, `(띄어쓰기 주의)과 ` 감사합니다.`(띄어쓰기 주의)사이에 오는 정수를 콘솔에 출력합니다.

```tsx
넵, ^^ 알겠습니다. => 콘솔에 2 출력
넵, 네 알겠습니다. => 콘솔에 첫번째 변수 출력
```

### 넵, 감사합니다.

콘솔에 문자를 출력합니다. `넵, `(띄어쓰기 주의)과 ` 감사합니다.`(띄어쓰기 주의)사이에 오는 정수를 유니코드 문자로 변환하여 콘솔에 출력합니다. 
</br>`넵, `과 ` 감사합니다.`사이에 정수가 주어지지 않으면 개행합니다(`식ㅋ` => `\n`)

```tsx
넵, ^^^^^^^^^^^@^^@^^@^^ 감사합니다. => 콘솔에 X 출력
```

## 지시문

### 넵, 확인해보겠습니다.

`넵, {정수} 확인해보겠습니다. {실행할 명령}` (띄어쓰기 주의)으로 작성합니다. 정수가 0이라면 `실행할 명령`이 실행되며, 그렇지 않다면 다음줄로 넘어갑니다.

### 담당자 연결해드리겠습니다.

`담당자 연결해드리겠습니다. `(띄어쓰기 주의) 뒤에 오는 정수번째 줄로 이동합니다. `담당자 연결해드리겠습니다. ^^ => 2번째 줄(글자)로 이동`. 
</br>원라인코드의 경우에는 `/`로 분리된 코드단위로 카운트하여 이동합니다.

### 감사합니다. 

`감사합니다. ` 뒤에 오는 정수를 반환하며 프로그램을 종료합니다.

## 기타

- 확장자는 `.mz`입니다. (레포명 변경하면 확장자도 변경할 예정입니다.)

# 예제

(예제: 구구단 참조)[https://github.com/neordinary/mz-lang/blob/main/examples/gugudan.mz]
