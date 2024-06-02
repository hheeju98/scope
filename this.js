'use strict';
// console.log(this);
const calcAge = function (birthYear) {
    console.log(2037 - birthYear);
    // console.log(this); // undefined
}
calcAge(1991);


const calcAgeArrow = (birthYear) => {
    console.log(2037 - birthYear);
    console.log(this); // window 화살표 함수는 this를 가지지 못한다.
}
calcAgeArrow(1980);

const jonas = {
    year: 1991,
    calcAge: function () {
        console.log(this); //객체
        console.log(2037 - this.year);
    }
}
jonas.calcAge();

const matilda = {
    year: 2017,
}
matilda.calAge = jonas.calcAge;
matilda.calAge(); // 결과 :20   this는 매서드를 호출하는 객체를 가르킨다

const f = jonas.calcAge;
f(); // regular function call이기 때문에 this->undefined
// object 에 attach되어야 한다