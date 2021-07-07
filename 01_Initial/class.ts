class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    console.log(person);
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

console.log(greeter(user));

// * 생성자(Constructor)는 new 연산자와 함께 사용되며, 클래스로부터 객체를 생성할 때 호출되어 객체의 초기화를 담당한다.
// * 인스턴스 변수의 초기화 작업에 주로 사용되며, 인스턴스 생성 시에 실행되어야 할 작업을 위해서도 사용된다.
// new 연산자에 의해 생성자가 성공적으로 생성되면 힙(Heap)영역에 객체가 생성되고, 객체의 주소가 리턴된다.
// 리턴된 객체의 주소는 클래스 타입 변수에 저장되어 객체에 접근할 때 이용한다.

// 인터페이스에 선언되지 않는 변수값을 넘기는 상황에 대한 설명은 아래에 설명됨
// -> https://1day4me.tistory.com/66