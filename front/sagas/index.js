//generator  yield는 중단점 (대충 이해한 느낌) 함수를 생성하고
//실행시키고 싶은 코드 밑에 yield을 적는다 뒤에 값을 적게 되면 value로 뒤의 값이 나오게 되는데
//이와 같은 성질을 이용하여
// let i = 0;
// const generator = function* () {
//   while (true) {
//     yield i++;
//   }
// };
// 이런식으로 만들게 되면 함수를 호출할때마다 i의 value값이 나오게 된다.
// 개인적인 생각)) 이해를 100%하지 못했지만 조회수같은 것을 뽑거나 할때 쓰이면 좋을 것 같다는 생각이 든다.
export default function* rootSage() {}
