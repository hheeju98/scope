let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
    name: "Jonas",
    age: 30
};
const friend = me;
friend.age = 27;
console.log('Friend', friend); //27
console.log('ME', me) //27


// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage : ', jessica);
console.log('After marriage : ', marriedJessica);
/// marriedJessica = {}; const는 heap아닌 stack에 저장되어 있기 때문에 불가능


//Copying objects
const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob',],
};

const jessicaCopy = Object.assign({}, jessica2); // assigin은 firt level에서만 동작
jessicaCopy.lastName = 'Davis';
console.log('Before marriage : ', jessica2);
console.log('After marriage : ', jessicaCopy); // 새로운 object가 heap에 생성되었다

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
console.log('Before marriage : ', jessica2); // jessica2에도 4개의 배열이 찍힌다 first level이 아니기 때문
console.log('After marriage : ', jessicaCopy);

//lodash라이브러리 사용 추천