interface Point {
  readonly x: number;
  readonly y: number;
}

// p1 변수의 Type을 Point Interface로 설정
let p1: Point = { x: 10, y: 20 };
p1.x = 5; // 오류!

// TypeScript에서는 아래와 같이 배열을 변경할 수 없도록 ReadonlyArray를 제공합ㄴ
let a: number[] = [1, 2, 3, 4];
let ro1: ReadonlyArray<number> = a;
let ro2: ReadonlyArray<number> = [1, 2, 3, 4]

ro[0] = 12; // 오류!
ro.push(5); // 오류!
ro.length = 100; // 오류!

// 아래 코드와 같이 재할당 하는 것은 불가능하다.
a = ro; // 오류!

// 다만 아래와 같이 타입 단언(type assertion)으로 오버라이딩 하는 것은 가능!
a = ro as number[];