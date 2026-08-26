function setTimeBasedScene() {

  const now = new Date();

  const hour = now.getHours();

  const dayImage =
    document.getElementById("day");

  const nightImage =
    document.getElementById("night");


  /*
    06:00 ~ 17:59
    → 낮

    18:00 ~ 05:59
    → 밤
  */

  if (hour >= 6 && hour < 18) {

    dayImage.style.opacity = "1";
    nightImage.style.opacity = "0";

  } else {

    dayImage.style.opacity = "0";
    nightImage.style.opacity = "1";

  }

}


/* 페이지가 열릴 때 확인 */

setTimeBasedScene();


/*
  페이지를 계속 열어놓아도
  시간이 바뀌면 자동으로 변경
*/

setInterval(
  setTimeBasedScene,
  60 * 1000
);
