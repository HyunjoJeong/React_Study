//클래스

//ES6 방식의 클래스 만들기 : class 키우더 사용 가능

class Shape {
   static create(x, y) {return new Shape(x, y);}      // static 함수 
   // 정적 메서드는 클래스의 인스턴스 없이 호출이 가능하며 클래스가 인스턴스화되면 호출할 수 없다. 정적 메서드는 종종 어플리케이션의 유틸리티 함수를 만드는데 사용된다.

   name = "shape";                                    // 변수     --> 보면 알겠지만 함수나 변수나 둘다 function 혹은 var, let 등의 키워드를 사용 안함.

   constructor (x, y) {
      this.move(x, y);
   }
   move(x, y) {                                       // 내장 함수
      this.x = x;
      this.y = y;
   }
   area() { return 0; }                               // 자식 class에서 오버라이딩 할 것임.
}

var shape1 = new Shape(1, 2);
console.log(`area: ${shape1.area()}`);
console.log(`location: ${shape1.x}, ${shape1.y}`);

class Circle extends Shape {                          // extends 키워드를 이용해 상속, 자바랑 달리 다중 상속이나 인터페이스는 지원하지 않음.
   constructor (x, y, radius) {
      super(x, y);                                    // 부모 함수 참조
      this.radius = radius;
   }
   area() { return this.radius * this.radius; }
}

var circle1 = new Circle(3,3,5);
console.log(`circle area: ${circle1.area()}`);
console.log(`circle location: ${circle1.x}, ${circle1.y}`)