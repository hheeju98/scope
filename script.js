//'use strict';
// 파라미터는 그 함수 스코프에만 정의됙 때문에 같은 이름을 가진 파라미터가 많아도 상관없음
function calcAge(birthYear) {
    const age = 2037 - birthYear;

    function printAge() {
        let output = `${firstName},  are ${age}, born in ${birthYear}`
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            const firstName = 'Steven'; // 새 변수를 만드는것 자바스크립트는 현재 스코프에서 먼저 찾는다
            output = 'NEW OUTPUT'; // 외부 변수의 스코프를 재할당 하는것
            const str = `oh, you're a millenial, ${firstName}`;
            console.log(str);

            function add(a, b) {
                return a + b;
            }

        }
        console.log(output);
        //console.log(str); // error
        console.log(millenial);
        add(2, 3); //undefined error strict mode에서 function은 블록스코프이기 때문 !
    }
    printAge();

    return age;
}

const firstName = 'john';
calcAge(1991);
printAge(); // not defined error
console.log(age); // cannit accessable
// scope =  inner->outer