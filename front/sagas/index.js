import { all, fork } from "redux-saga/effects";
import postSaga from "./post";
import userSaga from "./user";
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

//redux-saga/effects
//take는 1회용으로 작동되지만
//takeEvery를 사용하게 되면 while문을 대체할 수 있다.
//takeLatest는 여러번 실행되게 하지않고 마지막에 한 명령만 실행이 된다.
//takeLatest는 Front에서 서버에 여러번의 요청을 하고 오는
//여러개의 응답이 오지않게 그전 응답들을 취소를 하는것이기 때문에
//단점이 있다.
//첫번째 클릭을 실행하고 싶다면 takeLeading을 사용한다.
//이것도 위의 기능과 마찬가지의 단점을 가지고 있다.

export default function* rootSage() {
  yield all([fork(postSaga), fork(userSaga)]);
}
