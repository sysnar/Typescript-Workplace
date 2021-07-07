
function greeter(person: string) {
    return "Hello, " + person;
}

let user = [0, 1, 2];

document.body.textContent = greeter(user);

// tsc greeter.ts 
// |-> Typescript 파일을 js로 컴파일
// |->  greeter.ts:20:37 - error TS2345: Argument of type 'number[]' is not assignable to parameter of type 'string'. 
// |-> 에러를 출력하지만 js파일은 컴파일되어 생성된다.