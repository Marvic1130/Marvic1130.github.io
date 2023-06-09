---
layout: post
title:  "Clang Chapter.01 변수와 상수"
summary: "C언어의 기본 구조와 변수, 상수 개념에 대해 공부한다."
author: marvic1130
date: '2023-03-19 22:40:23 +0900'
category: [Programing_language, Clang, Tutorial]
tags: Clang
thumbnail: /assets/img/posts/Clang.png
keywords: Clang, 변수, 상수, C언어, 프로그래밍언어
usemathjax: false
permalink: /blog/adding-categories-tags-in-posts/
---

<style>
img {
    max-width: 100%;
    height: auto;
}
</style>

# C언어 Chapter 1. 변수와 상수

<br/>

이번 포스팅에서는 변수(Variable)와 상수(Constant)에 대해서 알아보겠습니다.

<br/>

>시작하기 전에 저는 현업 개발자가 아닌 평범한 컴공과 대학생입니다. 
> 
>이 강좌는 제가 학교 수업 시간에 배운 것과 제가 혼자 공부한 것을 정리하는 목적으로 쓴 글입니다.
> 
>잘못된 부분이 있다면 꼭 알려주세요

***

## C언어의 기본구조

<br/>

### 코드 입력하기

<br/>

먼저 IDE에 아래 코드를 입력합니다.

```cpp
#include <stdio.h>

int main(void){
    printf("Hello world");
    
    return 0;
}
```

이 코드를 실행하면 아래와 같은 결과를 얻어올 수 있습니다.

<img src="https://user-images.githubusercontent.com/63188145/226181926-1b59c770-27b2-4d1a-b9a9-6a7a55933346.png" style="max-width:100%; height:auto;">

### 코드 설명

이 코드는 프로그래밍 언어를 처음 배울 때 제일 많이 입력하는 코드입니다.

이 코드는 C언어 표준 라이브러리 함수 중 하나인 `printf()` 함수를 사용하여 문자열을 출력하는 프로그램 입니다.

<br/>

```c
#include <stdio.h>
```
* `#include <stdio.h>`은 **stdio.h** 헤더 파일을 불러오는 코드입니다. 

    처음 하시는 분들은 studio랑 많이 헷갈려 하시는데, `stdio`는 **st**andard **i**nput **o**utput의 약자입니다.

<br/>

```c
int main(void){
```
* `int main(void){` 이 부분은 메인 함수를 선언하는 부분입니다. 

   함수 선언을 4개로 쪼개보면 `int`, `main`, `(void)`, `{}`로 나눌 수 있는데,

   앞에 int는 반환을 int형 정수를 반환한다는 뜻입니다.

<br/>

* main은 이 함수의 이름입니다. 코드에서 컴파일러가 main 함수를 찾아서 컴파일 하기 때문에,

  코드 안에 main 함수가 반드시 한 개만 있어야 합니다.

   main 함수가 없거나 2개 이상이라면 컴파일 오류가 납니다.

  <br/>

* (void)는 매개변수가 없다(void)는 뜻입니다. (매개변수에 대한 설명은 나중에) 

   이 부분은 void를 생략해도 컴파일이 가능합니다.

   `int main(){}` 이런식으로 사용 가능합니다.

<br/>

* 마지막 {}는 이 함수의 시작과 끝을 알려줍니다.

   정리하면 아래와 같은 구조입니다.

```c
int main(){ // 반환 타입: int, 함수 이름: main, 매개변수: 없음(void)
    ...
    ...
    ...
    ...
}

```

<br/>

```c
printf("Hello world")
```

* `printf("Hello world");` 이 코드는 괄호 안에 있는 문자열을 출력하는 코드입니다.

   printf라는 함수는 위에서 `#include <stdio.h>`를 선언해야 사용 가능합니다.
   
   #include `<stdio.h>`를 주석 처리하고 실행하면 `printf()`가 정의되지 않았다는 에러가 발생합니다.

   이런 함수들을 사용하려면 헤더 파일을 꼭 호출해야 사용할 수 있습니다.

   뒤에 `;(세미콜론)` 꼭 붙여야 합니다. `;`은 한 문장이 끝났다는 것을 컴파일러에게 알려주는 기호입니다.

<br/>

```c
return 0;
```

* `return 0;`은 반환한다는 뜻으로,

  server 함수가 client 함수로 return 뒤에 있는 값을 반환합니다.

  이때 main 함수는 OS에 0을 반환하여 프로그램이 정상적으로 종료됨을 알려줍니다.

  만약 return 0;를 쓰지 않으면 컴파일할 때 컴파일러가 자동으로 입력해 줍니다.

  그리고 }로 함수를 닫아주어 끝을 냅니다.

<br/>

### Summery

```c
#include <stdio.h> // 전처리기. stdio.h 호출
// "//"는 주석처리 주석 부분은 무시하고 컴파일 (컴파일이란 코드를 기계어(2진수)로 바꿔주는 것)
int main(void){ // main 함수 선언
    printf("Hello world"); // Hello world 출력
    return 0; // OS에 0 반환
}
```
<br/>

c언어로 코딩을 시작할 때 세팅을 아래처럼 세팅하고 코딩하시면 됩니다.

```c
#include <stdio.h>

int main(){

    return 0;
}
```
위에 코드는 꼭 외우도록 하세요.

(외우기 힘들다고 하지 마세요 자바에 비하면 짧은 겁니다)

int main(){ 와 return 0; 사이에 코드를 입력하면 됩니다.

<br/>

### 컴파일이란? 

우리가 입력한 코드를 컴퓨터가 이해할 수 있는 기계어(바이너리 코드)로 변환해 주는 것을 말합니다.

컴파일을 해주는 프로그램을 '컴파일러'라고 부릅니다.

<br/>

### 주석

C언어에서 주석 처리하는 방법은 총 2가지 있습니다.

먼저 위에서 보여드린 "//" 을 사용하는 방법입니다.

//는 //뒤에서부터 그 줄만 주석 처리합니다.

```c
// 안녕하세요
printf("안녕하세요"); // 안녕하세요
```

다음 방법은  /* */입니다

/* */는 /* 에서부터 */까지 주석 처리합니다.

이 방법은 여러 줄을 한번에 주석 처리할 때 유용합니다.

```c
/* 동해물과 백두산이
마르고 닳도록
하느님이 보우하사
우리나라 만세 */

printf("애국가"); /* 안녕하세요
c언어를 열심히 공부해 볼까요? */
```

주석 처리는 보통 코드를 설명하기 위해 사용됩니다.

프로그래밍을 하다 보면 반드시 코드가 매우 길어지게 되는데,

주석을보면 어디가 어떤 기능을 하는지 직관적이게 표시할 수 있습니다.

<br/>

***

## 변수와 상수

<br/>

### 변수(Variable)

먼저 변수란 프로그램에서 값들이 저장되는 공간을 변수(Variable)이라고 합니다.

변수는 사용하기 전에 반드시 미리 선언을 해야 사용이 가능합니다.

변수 선언 방법은 다음과 같습니다.

```c
int n;
```

`int n;` 이라는 코드는 n이라는 이름을 가진 상자를 준비하고,

이 상자에 int형식을 가지는 값을 넣겠다고 선언하는 것입니다.

<img src="https://user-images.githubusercontent.com/63188145/226188605-8f4eb58b-37d7-4eb2-9aeb-c0cb6c897740.png" style="max-width:100%; height:auto;">

<br/>

변수를 선언하고 사용하려면 자료형에 대해 꼭 알아야 하는데, 

다음 포스팅에서 배울 자료형에 대해 아주 간략하게 짚고 넘어가겠습니다.

<br/>

자료형은 데이터 타입(Data Type)이라고 부릅니다.

변수나 상수에 어떤 형식의 값을 넣을 건지 결정해 줍니다.

데이터 타입(기본형)에는 정수형, 부동소수점형(실수형), 문자형 3가지로 나눌 수 있습니다.

그중 정수형의 기본형은 int 부동소수점은 double입니다.

문자형은 char 하나밖에 없습니다.

<br/>

### 변수 선언하기

그러면 여러 가지 형식의 변수를 선언해 보겠습니다.

```c
#include <stdio.h>

int main(){
    int n;
    double d;
    char c;

    return 0;
}
```

참고로 변수의 이름에도 지켜야 할 규칙이 있습니다

변수와 상수, 함수 이름은 아래 규칙을 지켜야 합니다.

>1. 알파벳문자와 숫자, _(under bar)로 이루어져야 합니다.
>2. 이름 중간에 공백이 들어가면 안 됩니다.
>3. 첫 번째 문자는 숫자로 시작할 수 없습니다.
>4. 대문자와 소문자는 다른 것으로 취급합니다 ex: N 과 n 은 다른 변수입니다.
>5. c언어에서 사용하고 있는 키워드와 똑같은 이름은 안됩니다.

키워드는 아래와 같습니다

```c
byte    short    int    long    float    double    char    if

else    switch    case    for    while    struct    break    continue

do    enum    return    sizeof    main    static    const   default

signed    register    typedef    union    void
```

이외에도 많습니다( 일단 기억나는 것만 썼습니다)

궁금하시다면 더 찾아보세요.

<br/>

위에 규칙은 반드시 지켜야 하고(지키지 않을 시 컴파일 에러)

다음 규칙은 개발자들의 관행 같은 거여서

꼭 지키지 않아도 됩니다(하지만 지키는 게 좋습니다)

1. 변수의 역할을 가장 잘 설명하는 이름으로 작명하면 좋다

ex: sum (합을 저장하는 변수),    r(반지름 radius),    year(년)

2.  여러 단어로 된 이름은 두 가지 방법으로 작명한다

* snake_case(스네이크 표기법)

  단어와 단어 사이에 _(under_bar)를 넣는다

  >ex. hello_world , last_index

* camalCase(캐멀 표기법)
  
  띄어쓰기 대신 대문자로 단어를 구분한다.

  >  ex: helloWorld, lastIndex

개발자마다 다 다르게 사용하는데,

보통 변수, 상수, 함수, 클래스, 접근가능 범위 등 여러 요소를 고려하여 여러 표기법을 사용한다.
**_식별자 예시_**

```c
// 가능한 식별자(변수 이름)
sum
YEAR_PER_MONTH // snake case
setTime // camalCase
_count
n1

// 불가능한 식별자
2nd_num // 숫자로 시작
index# // _ 이외의 특수기호 사용
void // c언어 키워드 사용
```

<br/>

위에서 변수를 만들었으니까

변수에 값을 넣어보겠습니다.


변수에 값을 넣는 것은 간단합니다.

식별자(변수 이름) = 리터럴(값)

이렇게 변수에 값을 넣는 것을 '변수를 초기화한다'라고 말합니다.

(리터럴 이란 13, 2.5, 'A'와 같은 것들은 대수학에서 상수라고 하는데,

프로그래밍에서는 상수라는 용어를 다른 의미로 쓰기 때문에 리터럴이라고 말합니다.)

### 변수 초기화

```c
#include <stdio.h>

int main(){
    // 변수 선언
    int n;
    double d;
    char c;
    
    //변수 초기화
    n = 0;
    d = 3.14;
    c = 'A';

    printf("%d, %g, %c\n", n, d, c); // 변수 출력

    return 0;
}
```

위에 코드에서 n = 0, d = 3.14, c = 'A'로 초기화했습니다

초기화가 잘 되었는지 출력도 해줍니다.

이때 주의할 점은 문자형 같은 경우에는 반드시 문자가 한 개가 와야 하고,

문자의 앞뒤에 '를 붙여줘야 합니다.

(이유는 다음 포스팅 자료형에서 말씀드리겠습니다.)

그럼 실행해 보겠습니다.

<img src="https://user-images.githubusercontent.com/63188145/226190139-45d87aa6-c3cf-4a2c-9292-15b81f0c8535.png">

이렇게 0, 3.14, A 가 잘 출력되는것을 볼 수 있습니다.

이때 printf 안에 들어간 %d, %g, %c는 변수를 출력할 때

어떤 형식으로 출력할 건지 결정하는 형식 지정자입니다.

%d는 정수형 %g는 실수형 %c는 문자형입니다.

<br/>

그리고 변수의 초기화를 생성과 동시에 할 수도 있습니다.

이번엔 변수의 생성과 초기화를 한 후 다른 값으로 바꿔보겠습니다.

<br/>

아래와 같이 입력하고 실행해 줍니다.

```c
#include <stdio.h>

int main(){
    // 변수 선언 및 초기화
    int n = 0;
    double d = 3.14;
    char c = 'A';

    printf("%d, %lf, %c\n", n, d, c); // 변수 출력
    
    //변수 초기화
    n = 3;
    d = 0;
    c = 'a';

    printf("%d, %lf, %c\n", n, d, c); // 변수 출력
    return 0;
}
```

이번에는 실수 형식 지정자를 %lf로 바꿔 봤습니다.

출력해보시면 %g 와 무엇이 다른지 알 수 있습니다.

보통 실수 형식 지정자는 %lf를 주로 사용합니다.

저는 %g가 보기에 더 깔끔해서 %g를 선호합니다.

(형식 지정자도 다음 포스팅 때 더 알아보겠습니다.)

<img src="https://user-images.githubusercontent.com/63188145/226232092-19c9022e-adc0-4af9-b7a8-198e66dc8cfa.png">

%lf는 기본적으로 소수점 뒤 6자리(조절 가능)를 출력하고

%g는 불필요한 자리수는 날려버립니다.

<br/>

이렇게 변수는 이렇게 저장되어 있는 값을 변경 가능하다는 특징을 가지고 있습니다.

***

### 상수(Constant)

상수는 변수와 비슷한데  한 가지가 다릅니다.

상수는 초기화한 후 다른 값으로 변경이 불가능합니다.

### 상수 선언 방법 1. #define

첫 번째 방법은 #define 을 사용하는 방법입니다.

#define 문장은 코드의 맨 첫 부분 #include가 있는 부분에 선언을 해줍니다.

(저는 보통 #include 밑에 선언합니다.)

이렇게 #이 붙은 명령어는 전처리기가 처리합니다.

그리고 #을 전처리기 지시자라고 부릅니다.

그러면 #define 을 언제 사용하는지 알려드리겠습니다.

```c
#include <stdio.h>

int main(){
    int usd = 5;
    double krw = 1182.5 * usd; // 2020년 9월 14일 환율 == 1182.5원
    printf("%d달러는 %g원 입니다.\n", usd, krw);

    usd = 4;
    krw = 1182.5 * usd; // 2020년 9월 14일 환율 == 1182.5원
    printf("%d달러는 %g원 입니다.\n", usd, krw);

    usd = 3;
    krw = 1182.5 * usd; // 2020년 9월 14일 환율 == 1182.5원
    printf("%d달러는 %g원 입니다.\n", usd, krw);

    usd = 2;
    krw = 1182.5 * usd; // 2020년 9월 14일 환율 == 1182.5원
    printf("%d달러는 %g원 입니다.\n", usd, krw);

    return 0;
}
```

이런 프로그램이 실행이 될 때

환율의 값은 바뀌지 않습니다.

그런데 다음날이 되어서 환율이 바뀐다면 1182.5라는 숫자를 찾아서 수정해야 하는 번거로움이 있습니다.

<br/>

실제 프로그래밍을 하다가 설계 미스 혹은 오타로 저렇게 값을 일일이

수정한다고 하면 분명히 빠트릴 수 있습니다.

그래서 이런 값들은 상수로 선언하는 것이 좋습니다.

<br/>

그리고 이런 이유뿐만이 아니라 변경되면 안 되는 값이 변경이 될 위험도 있기 때문에 상수를 선언해 줍니다.

<br/>

아래와 같이 입력해 줍니다.

```c
#include <stdio.h>
#define EXCHANGE_RATE 1128.5 // 2020년 9월 14일 환율 == 1182.5원

int main(){
    int usd = 5;
    double krw = EXCHANGE_RATE * usd;
    printf("%d달러는 %g원 입니다.\n", usd, krw);

    usd = 4;
    krw = EXCHANGE_RATE * usd;
    printf("%d달러는 %g원 입니다.\n", usd, krw);

    usd = 3;
    krw = EXCHANGE_RATE * usd;
    printf("%d달러는 %g원 입니다.\n", usd, krw);

    usd = 2;
    krw = EXCHANGE_RATE * usd;
    printf("%d달러는 %g원 입니다.\n", usd, krw);

    return 0;
}
```
const는 자료형 앞에 와야 하고 선언과 동시에 초기화를 해야 합니다.

<img src="https://user-images.githubusercontent.com/63188145/226284526-c5afb003-2369-4009-b852-8475ec919e36.png">

이렇게 상수를 선언할 때 보통 식별자로 대문자 스네이크 케이스를 사용합니다.

상수를 사용하면 그 문장이 무엇을 의미하는지 더 쉽게 알 수 있습니다.

### const 연산자

상수를 선언하는 두 번째 방법은 const를 사용하는 방법입니다.

const는 constant의 약자로 변경할 수 없다는 뜻입니다.

<img src="https://user-images.githubusercontent.com/63188145/226285710-4de92b16-64ce-444e-a8ec-719ab2687990.png">

이렇게 변수와 상수에 대해 알아봤습니다. 

***

## 환율 계산기 만들기

이것을 이용해서 간단한 프로그램을 만들어 보겠습니다.

scanf() 함수를 사용해서 환율과 금액을 입력받고,

환율을 상수로 선언한 뒤(const를 활용하기 위해),

몇 달러인지 출력하는 프로그램을 먼저 만들어 보겠습니다.

먼저 메인 함수와 헤더를 세팅합니다.

```c
#include <stdio.h>

int main(){

    return 0;
}
```

환율을 입력받을 변수 in_exc를 선언하고

scanf()로 입력을 받아보겠습니다.

여기서 상수를 사용하지 않은 이유는 const 상수는

선언과 동시에 초기화를 해줘야 하기 때문에 먼저 변수로 입력받은 후에

상수를 선언할 예정입니다.

```c
#include <stdio.h>

int main(){
    double in_exc; // 환율을 입력받을 변수 선언
    scanf("%lf", &in_exc); // scanf()함수를 이용하여 환율을 입력받음
    
    return 0;
}
```

scanf() 함수는 형식 지정자에 맞는 값을 입력을 받고

뒤에 있는 변수에  값을 넣어줍니다.

&in_exc에서 &는 주소 연산자로 in_exc의 주소로 입력값을 넣어줍니다.

주소 연산자도 나중에 배울 겁니다.

그다음 환율을 상수로 선언하고

그 외 필요한 변수를 선언하겠습니다.

```c
#include <stdio.h>

int main(){
    double in_exc; // 환율을 입력받을 변수 선언
    scanf("%lf", &in_exc); // scanf()함수를 이용하여 환율을 입력받음
    const double EXCHANGE_RATE = in_exc; // 환율을 상수로 선언
    
    int krw; // 금액을 입력받을 변수 선언
    double usd; // 달러 변수 선언
    scanf("%d", &krw); // 금액을 입력받아서 초기화

    usd = krw / EXCHANGE_RATE;
    
    return 0;
}
```

이렇게 변수 세팅은 끝났습니다.

printf() 함수를 사용하여 결과값을 볼 수 있도록 합니다.

```c
#include <stdio.h>

int main(){
    double in_exc; // 환율을 입력받을 변수 선언
    printf("USD 환율을 입력해 주세요:"); 
    scanf("%lf", &in_exc); // scanf()함수를 이용하여 환율을 입력받음
    const double EXCHANGE_RATE = in_exc; // 환율을 상수로 선언
    
    int krw; // 금액을 입력받을 변수 선언
    double usd; // 달러 변수 선언
    printf("환전할 KRW 금액을 입력해 주세요:");
    scanf("%d", &krw); // 금액을 입력받아서 초기화

    usd = krw / EXCHANGE_RATE; // usd 초기화 '/' 는 나누기 입니다
    printf("%dKRW은 %.2lfUSD입니다\n", krw, usd); // usd를 소수점 밑 2자리까지 출력
    return 0;
}
```

<img src="https://user-images.githubusercontent.com/63188145/226287158-15497117-3281-41bc-b5da-29c1db8e8bf4.png">